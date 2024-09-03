
const{Schema,model}=require('mongoose');

//const{}=require('')
const userschema= new Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        validate:{
            validator:function(e){
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e);
        },
  message: props => `${props.value} is not a valid email address!`
    }

       },
    password:{
        type:String,
        minlength:[4,'password is too short'],
        required:true,
    },

})
const User=model('User',userschema);
module.exports=User;