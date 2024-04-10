const express = require("express");
const app = express();
const port = 3000;
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

// Initialize nodemailer transporter
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "anandrp2000@gmail.com", // Your Gmail email address
      pass: "uxtksdggknyexwgl", // Your Gmail password or App Password
    },
    tls: {
      rejectUnauthorized: false
    }
  });
// Initialize Mailgen with your options
let mailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Mailgen",
    link: "https://mailgen.js/",
  },
});

app.get("/", (req, res) => {
  // Generate email body
  let email = {
    body: {
      name: "Anand",
      intro: "Welcome to Mailgen! We're very excited to have you on board.",
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  // Generate the email using Mailgen
  let emailBody = mailGenerator.generate(email);

  // Email message object
  let message = {
    from: "anandrp2000@gmail.com", // Sender email address
    to: "anandrp.sics@gmail.com", // Recipient email address
    subject: "Hello from Mailgen",
    html: emailBody,
  };

  // Send email
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
      res.json({ error: error.message });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ message: "Email sent", info: info.response });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
