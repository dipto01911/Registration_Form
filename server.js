
const express=require('express');
const connectDB=require('./db');
const routes=require('./routes/index');
const bodyparser=require('body-parser')
const {postuser}=require('./controller/postUser')
const app=express();
app.use(express.json());
app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}))
app.use(routes);

app.post('/post',postuser)

//global error handler
app.use((err,req,res,next)=>{
    res.status(500).json({message:'Server Error'});
})
connectDB('mongodb://localhost:27017/register')
.then(()=>{
    console.log('database connect..');
    app.listen(4000,()=>console.log('Listen..'))
}).catch((err)=>{
    console.log(err)
})