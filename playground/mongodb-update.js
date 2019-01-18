// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
 if(err){
   return console.log('Unable to connect to mongoDB server',err);
 }
   console.log('Connected To MongoDB Server.');
 const db = client.db('TodoApp')
 


// db.collection('Todo').findOneAndUpdate({
//    _id:new ObjectID('5c415888b08194a09a46e24e')
// },{
//    $set:{
//       completed:true
//    }
// },{
//    returnOriginal:false
// }).then((result)=>{
//    console.log(result);
// },(err)=>{
//    console.log(err);
// });


//challange

db.collection('Users').findOneAndUpdate({
   _id:new ObjectID('5c40676c056eee16ecf6805d')
},{
   $set:{
      name:'Auntor'
   },
   $inc:{
 age:1
   }
},{
   returnOriginal:false
}).then((result)=>{
   console.log(result);
},(err)=>{
   console.log(err);
});

   
 //client.close();
});