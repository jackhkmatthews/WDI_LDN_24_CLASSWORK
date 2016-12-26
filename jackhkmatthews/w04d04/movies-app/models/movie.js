const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, trim: true, require: true },
  description: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);
