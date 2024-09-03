
const express=require('express');
const bodyparser=require('express');
const router=require('express').Router();
const path=require('path');
const app=express();

app.use(express.static(__dirname))
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Form/Form.html'));
})

module.exports=router;