const express = require('express')
//const { setFollow } = require('../controllers/profileController')

const router = express.Router()

const {userLogin, userSignup, getUsers, setFollow} = require("../controllers/userController")
//const {setFollow} = require("../controllers/userController")

//innlogging
router.post('/login', userLogin)


//oppretting av bruker
router.post('/signup', userSignup)

//følge ny bruker
router.post('/newfollow', setFollow)

//ta bort en følger
//router.post('/removefollow', removeFollow)

//hent alle brukere
router.get('/', getUsers)


module.exports = router