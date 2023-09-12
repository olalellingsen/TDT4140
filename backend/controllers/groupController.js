const Group = require('../models/groupModel')


const getGroups = async (req, res) => {
    const groups = await Group.find({})
    res.status(200).json(groups)
} 

const createGroup = async (req, res) => {
    try {
      const groupDetails = {
        groupName: req.body.groupName,
        description: req.body.description,
        administrator: req.body.administrator,
        members: [...req.body.members],
        image: req.body.image 
      };
  
      console.log(groupDetails)
      // create a new group using the group model
      const newGroup = new Group(groupDetails);
      
      // save the new group to the database
      await newGroup.save();
  
      res.status(200).json(newGroup);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }


module.exports = {getGroups, createGroup}