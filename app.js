const express = require('express');
const stripe = require('stripe')('pk_test_G3zChCqOlDnDRdKGnCbsmJuD');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

/// start the app
const app = express();

//// deployment and localhost
const port = process.env.PORT || 5000;

/// start server.
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
