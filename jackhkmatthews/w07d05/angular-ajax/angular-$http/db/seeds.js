const mongoose  = require('mongoose');
const config    = require('../config/config');
const President = require('../models/president');

mongoose.connect(config.db);

President.collection.drop();

[
  {name: 'George Washington', start: 1789, end: 1797 },
  {name: 'John Adams', start: 1797, end: 1801 },
  {name: 'Thomas Jefferson', start: 1801, end: 1809 },
  {name: 'James Madison', start: 1809, end: 1817 }
].forEach(president => {
  return President
    .create(president, (err, president) => {
      console.log(`${president.name} was created`);
    });
});
