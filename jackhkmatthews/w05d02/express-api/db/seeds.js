const mongoose = require('mongoose');

const databaseUrl = process.env.MONGOLAB_UBI || 'mongodb://localhost:27017/express-api';
mongoose.connect(databaseUrl);

const Shoe = require('../models/shoe');

const shoe1 = new Shoe({
  name: 'Ultra Boost 3.0 Triple White',
  color: 'White',
  laces: true,
  material: 'Primeknit',
  price: 130.00
});

shoe1.save((err, shoe) => {
  if (err) return console.log(err);
  return console.log(`${shoe.name} was saved`);
});
