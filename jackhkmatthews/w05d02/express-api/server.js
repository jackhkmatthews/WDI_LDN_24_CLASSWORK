const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const routes     = require('./config/routes');
const app        = express();
const port       = process.env.PORT || 3000;

const databaseUrl = process.env.MONGOLAB_UBI || 'mongodb://localhost:27017/express-api';
mongoose.connect(databaseUrl);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', routes);

app.listen(port, console.log(`listening on port ${port}`));
