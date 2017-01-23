const express  = require('express');
const morgan   = require('morgan');
const app      = express();
const port     = process.env.PORT || 3000;
const routes   = require('./config/routes');

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use('/', routes);

app.listen(port, () => console.log(`The app is set up on port: ${port}`));
