require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Read Twilio credentials and numbers from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappFrom = process.env.TWILIO_WHATSAPP_FROM; // e.g., 'whatsapp:+14155238886'
const whatsappTo = process.env.TWILIO_WHATSAPP_TO;     // e.g., 'whatsapp:+919026888758'

if (!accountSid || !authToken || !whatsappFrom || !whatsappTo) {
  throw new Error('Missing Twilio configuration. Please set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM, TWILIO_WHATSAPP_TO');
}

const client = require('twilio')(accountSid, authToken);

app.post('/api/send-message', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const msg = await client.messages.create({
      from: whatsappFrom,
      to: whatsappTo,
      body: `Message from ${name}, Email: ${email}, Message: ${message}`,
    });
    res.json({ success: true, sid: msg.sid });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000')); 