const express = require('express');
const { createReadStream } = require('fs');
const router = express.Router();
const nodemailer = require('nodemailer');
const email = process.env.EMAIL
const password = process.env.PASSWORD


router.post('/sendwithattatchments', async (req, res) => {
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
      html: "<h1 style='color:red;'>easyyyyyyyyyy </h1>",
      attachments: [
        {
          content: createReadStream('./star.png'),
          filename: 'img.png'
        },
        {
          filename: 'doc.pdf',
          content: createReadStream('./workshop3.pdf')
        }
      ]
    })
    res.send({ message: 'email sent ' })
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'error server' })
  }
})
module.exports = router;