const{ObjectID} = require('mongodb');
const{mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//    console.log(result);
// });


// Todo.findOneAndRemove({text:"Auntor"}).then((doc)=>{
//    console.log(doc);
// });



Todo.findByIdAndRemove('5c518b520f58e2e8f5712e31').then((doc)=>{
   console.log(doc);
});

