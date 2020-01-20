require("dotenv").config();

module.exports.index = (req, res) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body:
        "Hello! This is an editable text message. You are free to change it and write whatever you like.",
      from: "whatsapp:+14155238886",
      to: "whatsapp:+918791431819"
    })
    .then(message => console.log(message.sid))
    .done();
  // return res.status(200).json({ message: "" });
};
