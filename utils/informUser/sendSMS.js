const dotenv = require("dotenv");

dotenv.config();

async function sendSMS(link, group) {
  const accountSid = process.env.ACCOUNT_SID;
  const authToken = process.env.AUTH_SMS_TOKEN;

  const client = require("twilio")(accountSid, authToken);
  
  const message = await client.messages.create({
    body: `Dostępny jest nowy plan dla grupy ${group}: ${link}`,
    messagingServiceSid: process.env.MESSAGING_SERVICE_SID,
    to: process.env.PHONE_NUMBER,
  });
  message.done();
}

module.exports = sendSMS;
