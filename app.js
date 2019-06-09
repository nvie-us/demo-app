const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello, World! Base route');
})

app.get('/user/:name', function (req, res) {
    res.send(`Hello, ${req.params.name}!`);
});
 
app.listen(3000);