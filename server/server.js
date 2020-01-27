const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo=mongoose.model('Todo',{
    text:{
       type: String,
       required:true,
       minlenght:1,
       trim:true
    }, 
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }

});

var newTodo= new Todo({
    text:'study at 9',
    // completed:true,
    // completedAt:123
});
newTodo.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
    console.log("error occured",e);
});


var User=mongoose.model('User',{
    Email:{
        type:String,
        required:true,
        trim:true,
        minlenght:1
    }
});

var user =new User({
    Email:'  ajaygupts12@gmail.com  '
});
user.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
        console.log("Error",e);
    }
);
