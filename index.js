const express = require('express');
// Introducing a lint error - unused variable
const unusedVariable = "This will cause a lint error";

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello World');
});

module.exports = app.listen(8080, () => {
});
