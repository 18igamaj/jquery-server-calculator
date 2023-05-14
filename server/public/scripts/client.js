$(document).ready(onReady);


function onReady(){
    console.log('jquery is good!')
    $('#all-control').on('submit', postCalc)
    $('.all-ops').on('click',postOp)
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
        operator
    }
})

}

function getCalc(){

    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(function(response){
        console.log('Our get works!', response)
    })

}

