const express   = require('express');
const app       = express();
const mongoose  = require('mongoose');
const morgan    = require('morgan');
const cors      = require('cors');
const port      = process.env.PORT || 3000;
const routes    = require('./config/routes');

const databaseURL = process.env.MONGOLAB_URL || 'mongodb://localhost:27017/gymap';
mongoose.connect(databaseURL);

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(`${__dirname}/public`));
app.use('/', routes);

app.listen(port, console.log(`Server has started on port: ${port}`));
