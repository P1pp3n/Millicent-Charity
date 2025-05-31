const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createCheckoutSession } = require('../services/stripe');
const Donation = require('../models/Donation');
const { sendDonationReceipt } = require('../services/email');

// @route   POST api/donations
router.post('/', auth, async (req, res) => {
  try {
    const { amount, frequency } = req.body;
    
    const session = await createCheckoutSession({
      amount,
      frequency,
      donorId: req.user.id
    });

    // Save donation record
    const donation = new Donation({
      amount,
      donor: req.user.id,
      paymentIntent: session.id,
      frequency,
      status: 'pending'
    });
    await donation.save();

    res.json({ id: session.id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Webhook for Stripe events
router.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle successful payment
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    
    // Update donation status
    await Donation.findOneAndUpdate(
      { paymentIntent: session.id },
      { status: 'completed' }
    );

    // Send receipt
    const donation = await Donation.findOne({ paymentIntent: session.id })
      .populate('donor');
    await sendDonationReceipt(donation.donor.email, donation.donor.name, donation.amount);
  }

  res.json({ received: true });
});

module.exports = router;