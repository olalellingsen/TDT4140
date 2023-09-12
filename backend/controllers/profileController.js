//Funksjoner som refereres til i router fil

const user = require('../models/userModel')
const mongoose = require('mongoose')
const {response} = require('express')

/*
const checkFollow= async(req, res) => {

        const userProfileId = req.params.userProfileId
        const userId = req.params.userId

    try{    
        user.findById({_id: userId},'following').exec(async(err,user)=>{
            if(err){
                return res.json({
                    error: err
                })
            }
            const follow = user.following.includes(userProfileId);
            const userFollowersData = await user.findById({_id: userProfileId},'followers following');
            return res.json({
                follow: follow,
                followers: userFollowersData.followers.length,
                following: userFollowersData.following.length
            })
        }
        )
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

*/

//Sette ny følger

const setFollow = async(req,res)=>{
    
    const userProfileId = req.params.userProfileId
    const userId = req.params.userId

    try {
        //await user.findByIdAndUpdate({_id: userId},{$addToSet:{following: userProfileId}})
        await user.findByIdAndUpdate({_id: userProfileId},{$addToSet:{followers: userId}})  
    } catch (error) {
        return res.json(error)
    }
    return res.json({
        message: "following"
    })
    
}

const removeFollow=async(req,res)=>{

    const userProfileId = req.params.userProfileId
    const userId = req.params.userId

    try {
        await user.findByIdAndUpdate({_id: userId},{$pull:{following: userProfileId}})
        await user.findByIdAndUpdate({_id: userProfileId},{$pull:{followers:userId}})
        return res.json({
            message: "unfollowed"
        })
    } catch (error) {
        return res.json(error)
    }
}

module.exports = {
    //checkFollow,
    setFollow, 
    removeFollow
}