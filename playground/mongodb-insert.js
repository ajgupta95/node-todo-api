 const MongoClient= require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log("connection did not made");
    }
    console.log("connected to MongoDb server");
    var db = client.db('TodoApp');
     db.collection('Users').insertOne({
        name: 'Ajay',
        age:24,
        location:"noida 70 sector"   


    },(err,result)=>{
       if(err){
           return console.log('unable to insert user',err);

       }
       
       console.log((result.ops));
    });
    db.collection('Users').insertOne({
        name: 'Vijay',
        age:27,
        location:"noida 70 sector"   


    },(err,result)=>{
       if(err){
           return console.log('unable to insert user',err);

       }
       console.log((result.ops));
      
    });
    

    client.close();
});
    
//    db.collection('Users').find({name:'Ajay'}).count().then((num)=>{
//        console.log(num);
//    });
//    db.collection('Users').find({name:'Ajay'}).toArray().then((docs)=>{
//        console.log(docs);
//    },(err)=>{
//        console.log("did not find")
//    });
//    client.close();
// }); 

