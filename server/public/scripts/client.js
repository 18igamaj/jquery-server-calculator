$(document).ready(onReady);


function onReady(){
    console.log('jquery is good!')
    $('#all-control').on('submit', postCalc)
    
}
let operator;
//created a global operator for to set in my functions to the calculation inputs.
function postCalc(event){
event.preventDefault();

let firstInput = $('#first-number').val()
let secondInput = $('#second-number').val()
let operator = $('#all-ops').val()

//created my inputs to be able to show up on my server and save the data that is collected.

$.ajax({
    method: 'POST',
    url: '/history',
    data: {
        firstInput,
        secondInput,
        operator
    }
})

}



// function postInput(){

//   console.log('our on ready function works')

// }