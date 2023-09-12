require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const exerciseRouter = require('./routes/workouts')
const userRouter = require('./routes/users')
const sessionRouter = require('./routes/sessions')
const friendsRouter = require('./routes/users')
const groupRouter = require('./routes/groups')

//create express app
const app = express()

//funksjon som kalles hver gang en request tikker inn
//hensikten er for forstaaelse av programflyt 
//"middelware"
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// app.get('/', (req, res) => {
//     res.json({message: "Velkommen til Strevar!"})
// })
//routing
//henter alle routes i exerciseRouter
app.use('/api/exercises',exerciseRouter)
app.use('/api/sessions',sessionRouter)
app.use('/api/users',userRouter)
app.use('/api/friends',friendsRouter)
app.use('/api/groups',groupRouter)

//kobler til databasen
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests as soon as the DB is up and running
        //portNr is required from .env file
        app.listen(process.env.PORT, () => {
            console.log("Database tilkobling suksess. Server lytter etter requests port %s", process.env.PORT)
    })
    })
    .catch((error) => {console.log(error)})





