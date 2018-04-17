const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000
var app = express();
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs')

app.get('/', (req, res)=>{
     // res.send('Testing');
   res.render('index')

})

app.listen(port)

