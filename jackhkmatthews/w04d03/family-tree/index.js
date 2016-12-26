const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost/family-tree';

mongoose.connect(databaseUrl);

const User = require('./models/user');

const person = new User({
  firstName: 'Alex',
  meta: {
    age: 28
  },
  email: 'alex@alex.com'
});

person.save((err, user) =>{
  if (err) return console.log(err);
  console.log(`User was created ${user}`);
  return user.sayHello();
});

//INDEX
// User.find({}, (err, users) => {
//   if (err) return console.log(err);
//   return console.log(users);
// });

//SHOW..
// User.findById('585a9e2ec440446316f23de8', (err, user) => {
//   if (err) return console.log(err);
//   if(!user) return console.log('no user found');
//   return console.log(user);
// });

// User.findByIdAndUpdate('585a9e2ec440446316f23de8', {
//   meta: { age: 31}
// }, {
//   new: true
// }, (err, user) => {
//   if (err) return console.log(err);
//   return console.log(user);
// });

// User.findByIdAndRemove('585a9e2ec440446316f23de8', err => {
//   if (err) return console.log(err);
//   return console.log('Deleted');
// });

// User.findOne((err, user) => {
//   if (err) return console.log(err);
//   user.sayHello();
// });
