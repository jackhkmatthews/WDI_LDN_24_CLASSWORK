const mongoose = require('mongoose');

const PresidentSchema = mongoose.Schema({
  name: String,
  start: Number,
  end: Number
});

module.exports = mongoose.model('President', PresidentSchema);