const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true},
  meta: {
    age: Number,
    website: String,
    address: String,
    country: String
  }
}, {
  timestamps: true
});

userSchema.methods.sayHello = function(){
  console.log(`hi, my name is ${this.firstName}`);
};

module.exports = mongoose.model('User', userSchema)
