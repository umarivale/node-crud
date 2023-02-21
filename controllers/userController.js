const userModel = require('../models/User');
const readUsers = async (req,res)=>{
    try{
        const users = await userModel.find({});
        res.status(200).json(users);
    }catch(error){
    res.status(500).json(error);
    }
}
const readUser = async (req,res)=>{
    try{
        const user = await userModel.findById({_id:req.params.id});
        if(!user)
        {
            return res.status(404).json();
        }
        res.status(200).json(user);
    }catch(error){
    res.status(500).json(error);
    }
}
const createUser = async (req, res)=>{
    const user = new userModel({
        user_name:req.body.user_name,
        password:req.body.password,
        email:req.body.email
    })
    try{
        await user.save();
        res.status(201).json(user);
        }catch(error){
        res.status(500).json(error);
        }
}
const updateUser = async (req,res)=>{
try{
  const user = await userModel.findByIdAndUpdate({_id:req.params.id},{email:req.body.email},{new:true});
  if(!user){
    return res.status(404).json();
  }
  res.status(200).json(user);
}catch(error){
res.ststus(500).json(error);
}
}
const deleteUser = async (req,res)=>{
    console.log('delete method');
try{
  const user = await userModel.findByIdAndDelete({_id:req.params.id});
  if(!user){
    return res.status(404).json();
  }
  res.status(201).json(user);
}catch(error){
res.status(500).json(error);
}
}

module.exports = {
    readUsers,
    readUser,
    createUser,
    updateUser,
    deleteUser
}