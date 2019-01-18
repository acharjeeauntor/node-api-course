// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
 if(err){
   return console.log('Unable to connect to mongoDB server',err);
 }
   console.log('Connected To MongoDB Server.');
 const db = client.db('TodoApp');

//  db.collection('Todo').find({
//     _id:new ObjectID('5c4066110a91a30730f5c1ce')
//  }).toArray().then((docs)=>{
//   console.log('Todos:')
//   console.log(JSON.stringify(docs,undefined,2));
//  },(err)=>{
// console.log('Unable to fetch data.',err);
//  });
 


// db.collection('Todo').find().count().then((count)=>{
//  console.log(`Todos Count: ${count}`)
// },(err)=>{
// console.log('Unable to fetch data.',err);
// });

db.collection('Users').find({name:'Auntor'}).toArray().then((docs)=>{
console.log('Todos:');
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
   console.log('Unable to fetch data.',err);
});



 client.close();
});