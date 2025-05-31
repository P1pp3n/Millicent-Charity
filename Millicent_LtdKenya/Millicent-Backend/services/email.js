const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: process.env.SENDGRID_USER,
    pass: process.env.SENDGRID_API_KEY
  }
});

const sendDonationReceipt = async (email, name, amount) => {
  const mailOptions = {
    from: '"Millicent Charity" <donations@millicent.org>',
    to: email,
    subject: 'Thank you for your donation!',
    html: `<h2>Dear ${name},</h2>
           <p>Thank you for your generous donation of $${amount}.</p>
           <p>Your support helps us continue our mission.</p>`
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendDonationReceipt };