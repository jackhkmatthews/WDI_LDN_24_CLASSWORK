const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  name: {type: String},
  color: {type: String},
  laces: {type: Boolean},
  material: {type: String},
  price: {type: Number}
}, {
  timestamps: true
});

//save number as pence then convert back to pounds when the value is requested
//cannot store floats in DB.
shoeSchema.path('price')
  .set(value => value * 100)
  .get(value => (value / 100).toFixed(2));

//allows get requests to database. Declines to have hidden mongoose document information shown.
shoeSchema.set('toJSON', {getters: true, setters: true, virtuals: false});

module.exports = mongoose.model('Shoe', shoeSchema);
