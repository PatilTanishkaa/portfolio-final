const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
//const nodemailer = require("nodemailer"); replacesd with resend
const { Resend } = require("resend");
const Contact = require("./models/Contact");

const app = express();

// Email transporter

// Email service

const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(function () {
        console.log("MongoDB connected successfully!");
    })
    .catch(function (error) {
        console.log("MongoDB connection failed:", error);
    });

// Test route

app.get("/", function (req, res) {

    res.send("Portfolio backend is running!");

});



// Contact form route

app.post("/api/contact", async function (req, res) {

    try {
        let newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message

        });
        await newContact.save();
        console.log("Message saved to MongoDB!");

        // Send email notification
   // Send email notification

try {

    await resend.emails.send({

        from: "onboarding@resend.dev",

        to: process.env.EMAIL_USER,

        subject: `New Portfolio Contact - ${req.body.name}`,

        text: `
New message received through your portfolio.

Name: ${req.body.name}
Email: ${req.body.email}

Message:
${req.body.message}
        `

    });

    console.log("Email notification sent!");

} catch (emailError) {

    console.log("Email sending failed:", emailError);

}
// Send email notification

try {

    await resend.emails.send({

        from: "onboarding@resend.dev",

        to: process.env.EMAIL_USER,

        subject: `New Portfolio Contact - ${req.body.name}`,

        text: `
New message received through your portfolio.

Name: ${req.body.name}
Email: ${req.body.email}

Message:
${req.body.message}
        `

    });

    console.log("Email notification sent!");

} catch (emailError) {

    console.log("Email sending failed:", emailError);

}
        res.json({
            message: "Message received successfully!"
        });

    } catch (error) {

        console.log("Error saving message:", error);

        res.status(500).json({
            message: "Something went wrong."
        });

    }

});

// Start server

const PORT = 5000;


app.listen(PORT, function () {

    console.log(`Server running on http://localhost:${PORT}`);

});