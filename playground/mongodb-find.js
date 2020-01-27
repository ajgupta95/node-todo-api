const MongoClient= require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log("connection did not made");
    }
    console.log("connected to MongoDb server");
    var db = client.db('TodoApp');
      
    db.collection('Users').find().count().then((num)=>{
        console.log(num);
    });
    db.collection('Users').find().toArray().then((docs)=>{
        console.log(docs);
    },(err)=>{
        console.log("did not find")
    });
    client.close();
});