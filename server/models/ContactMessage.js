const mongoose = require('mongoose');

const ContactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  subject: {
    type: String,
    required: [true, 'Please add a subject'],
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Please add a message'],
    minlength: [10, 'Message must be at least 10 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ContactMessage', ContactMessageSchema);
