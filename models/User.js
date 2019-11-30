const mongoose = require('mongoose');
const Schema = mongoose.Schema; // the same but with destructuring const { Schema } = mongoose;

const userSchema = new Schema({
googleId: String,
});

mongoose.model('users', userSchema)