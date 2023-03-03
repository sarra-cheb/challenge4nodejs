const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const email = process.env.EMAIL
const password = process.env.PASSWORD


router.post('/sendwithtext', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      }
    });
    await transporter.sendMail({
      from: email,
      to: email,
      subject: 'Sending Email using Node.js',
      text: 'hhsqsqhgdshjdshj',
    })
    res.send({ message: 'email sent ' })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
})
module.exports = router;