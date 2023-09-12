const express = require('express')
const {
    createSession,
    getAllSessions,
    getSession,
    deleteSession
} = require('../controllers/sessionController')

const router = express.Router()

//Hent alle treningsokter
router.get('/', getAllSessions)

//Hent spesifikk treningsokt
router.get('/:id', getSession)

//Legg til treningsokt
router.post('/', createSession)

//Slett spesifikk treningsokt
router.delete('/:id', deleteSession)

//Oppdater til spesifikk treningsokt
router.patch('/:id', (req, res) => {
    res.json({message: "PATCH en session"})
})

// app.get('/', (req, res) => {
//     res.json({message: "Velkommen til Strevar!"})
// })

module.exports = router