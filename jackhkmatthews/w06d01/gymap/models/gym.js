const mongoose = require('mongoose');

const gymSchema = mongoose.Schema({
  name: String,
  image: String,
  lat: String,
  lng: String
});

module.exports = mongoose.model('Gym', gymSchema);
