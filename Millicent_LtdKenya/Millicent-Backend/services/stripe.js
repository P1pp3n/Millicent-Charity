const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (donationData) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name: 'Donation' },
        unit_amount: donationData.amount * 100,
        recurring: donationData.frequency === 'monthly' ? { interval: 'month' } : undefined,
      },
      quantity: 1,
    }],
    mode: donationData.frequency === 'monthly' ? 'subscription' : 'payment',
    success_url: `${process.env.FRONTEND_URL}/donation-success`,
    cancel_url: `${process.env.FRONTEND_URL}/donate`,
    metadata: {
      donorId: donationData.donorId
    }
  });

  return session;
};

module.exports = { createCheckoutSession };