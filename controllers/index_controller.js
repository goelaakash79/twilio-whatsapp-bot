require("dotenv").config();

module.exports.index = (req, res) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: "Hey from a dumb bot",
      from: "whatsapp:+14155238886",
      to: "whatsapp:" + process.env.WHATSAPP_PHONE_NUMBER,
      mediaUrl: "http://techslides.com/demos/sample-videos/small.mp4"
    })
    .then(message => console.log(message.sid))
    .catch(err => console.log(err))
    .done();
  // return res.status(200).json({ message: "" });
};
