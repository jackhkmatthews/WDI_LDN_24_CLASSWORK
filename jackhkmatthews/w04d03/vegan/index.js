const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-overide');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const databaseURL = 'mongodb://localhost/veganess';

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({encoded: true}));
ap


app.listen(port, () => console.log('started on port 3000'));
