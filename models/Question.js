const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    decription: String, // vernacular content
    link: String, // video/audio, basically a media file link
  },
  { timestamps: true }
);

module.exports = Question = mongoose.model("question", QuestionSchema);
