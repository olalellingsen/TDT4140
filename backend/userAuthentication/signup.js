//TODO DELETE THIS
//ONLY USED FOR TESTING PURPOSES

const User = require('../models/userModel');
const bcrypt = require('bcrypt');

//statisk signup verifiserings metode
// const createUser = async (username, password) => {

//     const user = await User.findOne({username})

//     if (user) {
//         throw Error('Brukernavn allerede registrert')
//     }

//     const newUser = new User({
//         username: username,
//         password: bcrypt.hashSync(password, 10),
//       });

//     return {
//         username: username,
//         password: bcrypt.hashSync(password, 10),
//       }
// }

const createUser = async (req, res) => {

    const {username, password} = req.body
    const user = await User.findOne({username})

    if (user) {
        throw Error('Brukernavn allerede registrert')
    }

    const newUser = new User({
        username: username,
        password: bcrypt.hashSync(password, 10),
      });

    try {
        res.status(200).json({username, newUser})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    User.create(newUser)
}

// const userSignup = async (req, res) => {
//     // const {username, password} = req.body

//     try {
//         const newUser = createUser(req, res)

//         res.status(200).json({username, newUser})
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// }

module.exports = { createUser };

