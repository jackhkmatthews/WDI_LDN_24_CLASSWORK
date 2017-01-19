const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  // password: { type: String, required: true }
  passwordHash: {type: String, required: true}
});

// userSchema.pre('save', function(next){
//   if (!this.isModified('password')) return next();
//   //overide cleartext password with hash
//   this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8), null);
//   next();
// });

userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password;
    this.passwordHash = bcrypt.hashSync(this._password, bcrypt.genSaltSync(8), null);
  });

userSchema
  .path('passwordHash')
  .validate(function(passwordHash){
    if (this.isNew) {
      if (!this._password){
        return this.invalidate('password', 'A password is required');
      }
    }
  });

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash, null);
};


module.exports = mongoose.model('User', userSchema);
