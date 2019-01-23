var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Newdatabase');

var Todo = mongoose.model('Todo',{
text:{
  type:String,
  required: true,
  minlength:1,
 trim:true

},
 completed:{
    type:Boolean,
    default:false
},
  completedAt:{
     type:Number,
     default:null
}
});

// var newTodo = new Todo({
//    text:'new todo added'
// });

// newTodo.save().then((doc)=>{
// console.log('Saved Todo',doc);
// },(e)=>{
//    console.log(e);
// });

// var otherTodo = new Todo({ 
//    text:'   true   '
// });
// otherTodo.save().then((doc)=>{
// console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//    console.log(e);
// });

var User = mongoose.model('User',{
 email:{
   type:String,
   required: true,
   minlength:1,
  trim:true
 }
});

var firstUser = new User({
 email:'acharjeeauntor@gmail.com'
});

firstUser.save().then((doc)=>{
console.log(JSON.stringify(doc,undefined,2));
},(e)=>{
   console.log(e);
});