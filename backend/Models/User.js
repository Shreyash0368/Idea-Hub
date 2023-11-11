const mongoose = require('mongoose')
const { Schema } = mongoose
const UserSchema = new Schema({
  emailID: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
  },
  password: {
    type: String,
    required: true,   
  }
   
});
const User = mongoose.model('users', UserSchema);
// User.createIndexes();
module.exports = User