const Exercise = require('../models/exerciseModel')
const mongoose = require('mongoose')


const sessionSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    exercises: [
        {
          type: Exercise.schema,
          ref: 'Exercise',
        },
      ],
      user_id: {
        type: String,
        required: true
    },
    share: {
      type: Boolean,
      required: true
    },
    comment: {
      type: String,
      
    }
  }, { timestamps: true });

module.exports = mongoose.model('Session', sessionSchema)


