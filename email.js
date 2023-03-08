const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // replace with your email address
    pass: "your-email-password", // replace with your email password
  },
});

// setup email data
const mailOptions = {
  from: "your-email@gmail.com", // replace with your email address
  to: "recipient-email@example.com", // replace with recipient email address
  subject: "Test Email",
  text: "Hello World!",
};

// send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
