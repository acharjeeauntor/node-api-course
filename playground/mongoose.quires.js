const{ObjectID} = require('mongodb');
const{mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//const id = '5c4940f28a9dc21b30d656ef';

// if(!ObjectID.isValid(id)){
//    console.log('Id not valid.');
// }



// // Todo.find({
// //    _id:id
// // }).then((todos)=>{
// //    console.log('Todos:',todos);
// // });

// // Todo.findOne({
// //    _id:id
// // }).then((todo)=>{
// //    console.log('Todo:',todo);
// // });

// Todo.findById(id).then((todo)=>{
//    if(!todo){
//       console.log('ID not Found!');
//    }
//    console.log('Todo by id:',todo);
// }).catch((e)=>console.log(e));


const id ='5c47627c8205552bd893b784';

if(!ObjectID.isValid(id)){
   console.log('User id invalid');
}

User.findById(id).then((user)=>{
   if(!user){
      console.log('user not found.');
   }
   console.log('User Info:',user);
}).catch((e)=>console.log(e));