const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupName: { type: String, minlength: 1, required: true },
  description: { type: String, default: '' },
  administrator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  image: { type: String },
});

module.exports = mongoose.model('Group', groupSchema);