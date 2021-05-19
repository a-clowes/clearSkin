const express = require('express');
const bodyParser = require('body-parser');
const queries = require('../database/queries.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static('/Users/alisonclowes/HR_SEI2/clearSkin/client/dist'));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
