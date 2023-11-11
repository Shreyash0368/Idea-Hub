const mongoose = require('mongoose')
const { Schema } = mongoose
const Notes = new Schema({
  id: {
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
module.exports = mongoose.model('notes', Notes);