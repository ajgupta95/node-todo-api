const {mongoose}=require('../server/db/mongoose');

const {Todo}=require('../server/models/todo');


// Todo.find({
//     _id:'5e2fce218aa81e716219441a'}).then((todos)=>{
//     console.log(todos);
// });

// Todo.findOne({
//     _id:'5e2fce218aa81e716219441a'
// }).then((todo)=>{ 
//     console.log(todo);
// });

Todo.findById( '5e2fce218aa81e716219441a').then((todo)=>{
    if(!todo){
        return console.log("not found");
    }
    console.log(todo);
}).catch((e)=>{console.log(e);});