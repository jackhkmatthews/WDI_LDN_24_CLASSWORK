const express = require('express');
const morgan  = require('morgan');
const router  = require('./config/routes').router;
const app     = express();
const expressLayouts = require('express-ejs-layouts');
const port    = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(expressLayouts);
app.use('/', router);

app.listen(port, () => console.log(`started express server on ${port}`));
