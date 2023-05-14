
$(document).ready(onReady);


function onReady(){
    console.log('jquery is good!')
    $('#all-control').on('submit', postCalc)
    $('.all-ops').on('click',postOp)
    $('#clear-btn').on('click',clearAll)
    getCalc()
  
}
let operator;
//created a global operator for to set in my functions to the calculation inputs.

function postOp(event){
    event.preventDefault()
    operator = $(this).data().value 
    console.log('See our posted op', operator)
}

function postCalc(event){
event.preventDefault();

let firstInput = $('#first-number').val()
let secondInput = $('#second-number').val()


//created my inputs to be able to show up on my server and save the data that is collected.

$.ajax({
    method: 'POST',
    url: '/history',
    data: {
        firstNum: firstInput,
        secondNum: secondInput,
        operator,
    
    }
    
    }).then(function(response){
        console.log('Success' , response);
        getCalc()
     }).catch(function(error){
        alert('error', error)
    })
}



function getCalc(){

    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(function(response){
        console.log('Our get works!', response)
        renderDom(response)
    })

}

function renderDom(arr){
    $('#solution-history').empty();
    $('#goal').empty();
    for( equation of arr){
       
    $('#goal').text(`${equation.total}`)   
    $('#solution-history').append(`<li> ${equation.firstNum}  ${equation.operator}  ${equation.secondNum} is equal to ${equation.total} </li>`)
    }
}
// our render to DOM function is created to be able to show our server work on our dom.

function clearAll(){
    console.log('Clear button was clicked')
    $('#first-number').val('');
    $('#second-number').val('');
   
}

//created a clear all button that will be able clear out our two inputs.