const express = require('express')
//const { setFollow } = require('../controllers/profileController')

const router = express.Router()

const {getGroups, createGroup} = require("../controllers/groupController")

//hent alle grupper
router.get('/', getGroups)
router.post('/', createGroup)


module.exports = router