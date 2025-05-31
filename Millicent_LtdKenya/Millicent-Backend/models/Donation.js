const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  paymentIntent: { type: String, required: true },
  frequency: { type: String, enum: ['one-time', 'monthly'], default: 'one-time' },
  status: { type: String, default: 'pending' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', DonationSchema);