const express = require('express');
const stripe = require('stripe')('pk_test_G3zChCqOlDnDRdKGnCbsmJuD');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');


/// start the app
const app = express();

//// handlebars middleware
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/// set static folder

app.use(express.static(`${__dirname}/public`));
// index Routes

app.get('/', (req, res) =>{
  res.render('index');
})


//// deployment and localhost
const port = process.env.PORT || 5000;

/// start server.
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
