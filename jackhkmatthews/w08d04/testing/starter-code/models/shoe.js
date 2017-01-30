const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
  name: {type: String, trim: true},
  brand: {type: String, trim: true},
  material: {type: String, trim: true},
  size: {type: Number}
}, {
  timestamps: true
});

module.exports = mongoose.model('Shoe', shoeSchema);
