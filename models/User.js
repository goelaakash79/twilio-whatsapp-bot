const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    phone: String,
    name: String,
    state: {
      initialString: String,
      questionState: String,
      endState: String
    }
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("user", UserSchema);
