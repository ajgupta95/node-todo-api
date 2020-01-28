const express=require('express');
const bodyParser=require('body-parser');
const {ObjectID}=require('mongodb');

const {mongoose}=require('./db/mongoose'); 
const{Todo}=require('./models/todo');
const {User}=require('./models/users');

const app=express();

app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
     var todo=new Todo({
         text:req.body.text
     });
     todo.save().then((doc)=>{
         res.send(doc);
         console.log(doc);
     },(e)=>{
         res.status(400).send(e);
     });
});
app.post('/users',(req,res)=>{
    var user=new User({
        Email:req.body.text
    });
    user.save().then((doc)=>{
        res.send(doc);
        console.log(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});
app.get('/users',(req,res)=>{
    User.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.send("not found");
        }
        res.send(todo);
    }).catch((e)=>{console.log(e)});
});
app.delete('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findByIdAndDelete(id).then((todo)=>{
        if(!todo){
            return res.send("not found");
        }
        res.send(todo);
    }).catch((e)=>{console.log(e)});
});



app.listen(5353,()=>{
    console.log("server is listening");
});



