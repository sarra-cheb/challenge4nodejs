const express = require('express');
const router = express.Router();
const fs = require('fs')
const nodemailer = require('nodemailer');
const ejs = require('ejs')
const email = process.env.EMAIL
const password = process.env.PASSWORD


router.post('/sendwithejs', async (req, res) => {
  try {
    const html = fs.readFileSync('template/fileejs.html', 'utf-8')
    const render = ejs.render(html, { vars: req.body })
    console.log(render);
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
      html: render
    })
    res.send({ message: 'email sent ' })

  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
})

module.exports = router;