const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true }
});

userSchema
  //listens for field password
  .virtual('password')
  //sets/executes setPassword function
  .set(setPassword);

userSchema
  .virtual('passwordConfirmation')
  .set(setPasswordConfirmation);

userSchema
  .path('passwordHash')
  .validate(validatePasswordHash);

userSchema.methods.validatePassword = validatePassword;

//black listing (removing bits of the json object being sent out)
// userSchema.set('toJSON', {
//   transform: function(doc, ret) {  doc = mongo document, ret = default return info
//     delete ret.passwordHash;
//     delete ret.email;
//     delete ret.__v;
//     return ret;
//   }
// });

//white listing (building a new json object to be sent out)
userSchema.set('toJSON', {
  transform: function(doc, ret) {
    const returnJSON = {
      _id: ret._id,
      username: ret.username,
      email: ret.email
    };
    return returnJSON;
  }
});

module.exports = mongoose.model('User', userSchema);

function setPassword(value){
  this._password    = value;
  this.passwordHash = bcrypt.hashSync(value, bcrypt.genSaltSync(8));
}

function setPasswordConfirmation(passwordConfirmation) {
  this._passwordConfirmation = passwordConfirmation;
}

function validatePasswordHash() {
  if (this.isNew) {
    if (!this._password) {
      return this.invalidate('password', 'A password is required.');
    }

    if (this._password !== this._passwordConfirmation) {
      return this.invalidate('passwordConfirmation', 'Passwords do not match.');
    }
  }
}

function validatePassword(password){
  return bcrypt.compareSync(password, this.passwordHash);
}
