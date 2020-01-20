const mongoose = require("mongoose");

const UserQuesSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    question_id: String,
    answer: String
  },
  { timestamps: true }
);

module.exports = UserQuestion = mongoose.model("userQuestion", UserQuesSchema);
