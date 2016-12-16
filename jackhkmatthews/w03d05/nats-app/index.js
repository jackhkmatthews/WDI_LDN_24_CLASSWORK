const express  = require('express');
const morgan   = require('morgan');

//create an express app by invoking
const app      = express();
const port     = process.env.PORT || 3000;

//use morgan for loggin
app.use(morgan('dev'));

//directory we will look for files in
app.set('views', `${__dirname}/views`);
//templating engine to be used
app.set('view engine', 'ejs');
//where to look for static files
app.use(express.static(`${__dirname}/public`));

//routes handler for get /
app.get('/', (req, res) => res.render('home.ejs'));

//routes handler for get /
app.get('/about', (req, res) => res.render('about.ejs'));

//routes handler for get /
app.get('/product', (req, res) => res.render('products.ejs'));
//tell the app to listen
app.listen(port, () => console.log(`express started on ${port}`));
