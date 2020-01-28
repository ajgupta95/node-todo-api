const mongoose=require('mongoose');
var User=mongoose.model('User',{
    Email:{
        type:String,
        required:true,
        trim:true,
        minlenght:1
    }
});
module.exports={User};