const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 5000;

const history = [
    
]

app.use(express.static('server/public'))

app.use(bodyParser.urlencoded({extended: true}))




// app.get('/history', function (req,res){
//     console.log('request for the guess was made',history);
//     res.send(history)

// })

// app.post('calculation', function (req,res){
   
// })

app.post('/history', function (req , res){
 
    history.push(req.body)
    console.log('got the history', history)
    res.send(201)
})













app.listen(port,() =>{
    console.log('Server is listening',port)
})