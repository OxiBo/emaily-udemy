const mongoose = require("mongoose");
const Schema = mongoose.Schema; // the same but with destructuring const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: {
      type: Number,
      default: 0
  }
});

mongoose.model("users", userSchema);
