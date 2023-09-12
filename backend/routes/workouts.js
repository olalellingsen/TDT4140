const express = require('express')
const {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//Hent alle treningsokter
router.get('/', getAllWorkouts)

//Hent spesifikk treningsokt
router.get('/:id', getWorkout)

//Legg til treningsokt
router.post('/', createWorkout)

//Slett spesifikk treningsokt
router.delete('/:id', deleteWorkout)

//Oppdater til spesifikk treningsokt
router.patch('/:id', updateWorkout)

// app.get('/', (req, res) => {
//     res.json({message: "Velkommen til Strevar!"})
// })

module.exports = router
