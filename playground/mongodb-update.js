const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
       return console.log('Not able to connect');
    }
    console.log('mongoDb connected');


var db=client.db('TodoApp');
db.collection('Users').findOneAndUpdate({
    _id:new ObjectID ('5e2e7ceccd4a370f45572274')
},
{
    $set:{
        location:"UP,noida 70 sector"
    },
    $inc:{
        age:1
    }
    
},
{returnOriginal:false
}).then((result)=>{
    console.log(result);
});
client.close();
});