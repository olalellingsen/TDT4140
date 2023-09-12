//Funksjoner som refereres til i router fil

const Exercise = require('../models/exerciseModel')
const mongoose = require('mongoose')
const { response } = require('express')

//Lage en ny treningsokt
const createWorkout = async (req, res) => { 
    const {title, sets, reps, weight, user_id} = req.body


    //legg dokument til i database
    try {
        const workout = await Exercise.create({title, sets, reps, weight, user_id})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//Hente alle treningsokter
const getAllWorkouts = async (req, res) => {
    const workouts = await Exercise.find({})
    res.status(200).json(workouts)
}

//Hente spesifikk treningsokt
const getWorkout = async (req, res) => {
    const {id} = req.params

    //om id ikke har en viss minimum lengde krasjer program, validerer derfor dette i hht. mongoose.
    //sjekke om ID er gyldig
    if((validateID(id, 'ID spesifisert er ikke gyldig', res) != null)){return};

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: "Fant ikke okten med id %s", id})
    }
    res.status(200).json(workout)
}

//validering av ID
function validateID (id, message, res) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: message})
    } else return null
}

//`DELTETE  /treningsokter/:id`
//Slette en treningsokt
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    //sjekke om ID er gyldig
    if((validateID(id, 'ID spesifisert er ikke gyldig', res) != null)){return};

    const workout = await Exercise.findOneAndDelete({_id: id})
    
    if (!workout) {
      return res.status(400).json({error: 'Treningsokt finnes ikke'})
    }
  
    res.status(200).json(workout)
  }

//Oppdatere en treningsokt
const updateWorkout = async (req, res) => {
    const {id} = req.params
    const {title, sets, reps, weight, user_id} = req.body

    //sjekke om ID er gyldig
    if((validateID(id, 'ID spesifisert er ikke gyldig', res) != null)){return};

    const workout = await Exercise.findByIdAndUpdate(id, {
        title: title,
        sets: sets,
        reps: reps,
        weight: weight,
        user_id: user_id
    })
    
    if (!workout) {
      return res.status(400).json({error: 'Feil i endring av øvelse'})
    }
  
    res.status(200).json(workout)
  }

module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}