const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 5000;

const history = []

app.use(express.static('server/public'))

app.use(bodyParser.urlencoded({extended: true}))




app.get('/history', function (req,res){
    console.log('request for the guess was made');
    res.send()
})














app.listen(port,() =>{
    console.log('Server is listening',port)
})