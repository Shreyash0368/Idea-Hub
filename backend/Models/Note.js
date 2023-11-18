const mongoose = require('mongoose')
const { Schema } = mongoose
const Note = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: "General"
  },
  description: {
    type: String,
    required: true,
    default: ""
  },
  date: {
    type: Date,
    default: Date.now
  }
   
})
module.exports = mongoose.model('notes', Note);