require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const PORT = 5000;  

const app = express();

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});


app.use(cors());                    
app.use(bodyParser.json());         

app.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log('📩 Received form data:', { name, email, subject, message });

  const mailOptions = {
    from: email,
    to: emailUser,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
