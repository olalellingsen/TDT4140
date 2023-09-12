//definerer strukturen til dokumentene vi lagrer

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Exercise', exerciseSchema)

