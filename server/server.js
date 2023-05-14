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

//created where I will store my post data. It will be the history array
// we initialized our finder to req.body so that we can incorporate into
// the parameters of our solution function
// then we used our history.push to send in our newly defined inputs at their original properties,
// and added the new total property.

app.post('/history', function (req , res){
 

  let finder = req.body 
  
  console.log('got the history', finder)
    
   let total = solution((finder.firstNum/1),(finder.secondNum/1),finder.operator)
    console.log(total)

    history.push({firstNum:finder.firstNum,secondNum:finder.secondNum,operator:finder.operator,total})
    console.log('')
    res.sendStatus(201)
})

// our app.get is pulling our history array and it's corresponding data from the server and back on the 
// data

app.get(history, function(req,res){
    res.send(history)
    console.log('My server is now sending over what is in our data', history)
})

// created a function that finds my solution to the calculations inputted
// created conditionals that if the data value matches the input it will compute the
// first number and the second number and give back the total.


function solution(firstNum,secondNum,output){
    let total = 0
    if( '-' === output){
       total = firstNum - secondNum 
    }
    else if( '+' === output){
       total = firstNum + secondNum
    }
    else if( '*' === output){

       total = firstNum * secondNum 
    }
    else if('/' === output){
       total = firstNum / secondNum 
       
    }return total
    
}

// app.get(history,function(req,res){

    
// })









app.listen(port,() =>{
    console.log('Server is listening',port)
})