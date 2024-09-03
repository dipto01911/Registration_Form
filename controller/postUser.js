 const express=require('express');
// const bodyparser=require('express');
const User=require('../models/User');
const path=require('path');
const bcrypt=require('bcryptjs');
const app=express();
// app.use(express.json());
// app.use(bodyparser.json())
// app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname))

const postuser=async(req,res,next)=>{
const{name,age,email,password}=req.body;
  let users=await User.findOne({email:email})
   if(users){
    return res.status(400).json({message:'User already exist'})
   }
   try{
   const user=new User({name,age,email,password})
   //save password in hash format in database
   const salt=await bcrypt.genSalt(10);
   const hash=await bcrypt.hash(password,salt);
   user.password=hash;
   await user.save();
   console.log(user);
res.sendFile(path.join(__dirname,'../Form/success.html'));
   console.log('Succesfully save');
   }catch(e){
   next(e);
   }
}
 module.exports={postuser};