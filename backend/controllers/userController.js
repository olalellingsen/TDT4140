const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const validator = require('validator')
const JWT = require('jsonwebtoken')



const generateJWT = (_id) => {
    return JWT.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
  }

//innlogging av bruker
const userLogin = async (req, res) => {
    const {username, password} = req.body
    const loginUser = await User.findOne({username})

    //validering
    if(!(username && password)){
        return res.status(400).json({error: "Passord eller brukernavn er ugyldig eller ikke oppgitt"})
    }
    else if (!validator.isEmail(username)){
        return res.status(400).json({error: "Brukernavn/mail er ikke registrert"})
    }
    else if(!loginUser){
        return res.status(400).json({error: "Brukernavn/mail er ikke registrert"})
    }
    
    const isValidPassword = bcrypt.compareSync(
        req.body.password,
        loginUser.password
      );

    if (!isValidPassword){
        return res.status(400).json({error: "Passord er ikke gyldig"})
    }

    //lage token
    const loginToken = generateJWT(loginUser._id)
    const uid = loginUser._id
    const following = loginUser.following

    return res.status(200).json({username, loginToken, uid, following})

}

//oppretting av bruker
const userSignup = async (req, res) => {
    const {username, password} = req.body

    //validering
    if(!(username && password)){
        res.status(400).json({error: "Passord eller brukernavn er ugyldig eller ikke oppgitt"})
    }
    else if (!validator.isEmail(username)){
        res.status(400).json({error: "Email er ikke gyldig"})
    }
    else if (!validator.isStrongPassword(password)){
        res.status(400).json({error: "Passord er er for svakt"})
    }
    else if(await User.findOne({username})){
        res.status(400).json({error: "Brukernavn/mail allerede registrert"})
    }

    //opprette bruker
    else{
        
        const newUser = await User.create({
            username: username,
            password: bcrypt.hashSync(password, 10),
        });

        const userJWT = generateJWT(newUser._id)


        res.status(200).json({username, userJWT})
       
}
} 

const getUsers = async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
} 

const setFollow = async(req,res)=>{
    
    const {selfUserID, followingUserID} = req.body


    try {
        //await user.findByIdAndUpdate({_id: userId},{$addToSet:{following: userProfileId}})
        await User.findByIdAndUpdate({_id: selfUserID},{$addToSet:{following: followingUserID}})  

    } catch (error) {
        return res.json(error)
    }
    const followUser = await User.findById({_id: followingUserID})
    return res.json({
        message: followUser
    })
    
}

module.exports = {userLogin, userSignup, getUsers, setFollow}