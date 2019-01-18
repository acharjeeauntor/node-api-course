// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
 if(err){
   return console.log('Unable to connect to mongoDB server',err);
 }
   console.log('Connected To MongoDB Server.');
 const db = client.db('TodoApp')
 

 //delete Many
// db.collection('Todo').deleteMany({text:'new todo'}).then((result)=>{
//    console.log(result);
// },(err)=>{
//    console.log(err);
// });




//delete One
// db.collection('Todo').deleteOne({text:'Somting'}).then((result)=>{
//    console.log(result);
// },(err)=>{
//    console.log(err);
// });




//findOneAndDelete
// db.collection('Todo').findOneAndDelete({completed:false}).then((result)=>{
//    console.log(result);
// },(err)=>{
//    console.log(err);
// });





//challange
// db.collection('Users').deleteMany({name:'Auntor'});

db.collection('Users').findOneAndDelete({
   _id:new ObjectID('5c4066cf7a7b4f20f00639ae'
   )}).then((result)=>{
      console.log(JSON.stringify(result));
   },(err)=>{
      console.log(err);
   });



   
 //client.close();
});