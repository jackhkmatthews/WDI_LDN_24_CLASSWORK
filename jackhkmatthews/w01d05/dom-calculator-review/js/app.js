//welcome user
//display caculator with three inputs
  //first number
  //operators
  //second number
//the user will enter some informatino into the calculator
// when the user presses submit
  //diaply the answer

document.addEventListener('DOMContentLoaded', start);

function start() {
  var form = document.getElementsByTagName('form')[0];
  form.addEventListener('submit', formSubmit);
}

function formSubmit(){
  event.preventDefault();
  var firstNumber = parseFloat(document.getElementById('firstNumber').value);
  var operator = document.getElementById('operator').value;
  var secondNumber = parseFloat(document.getElementById('secondNumber').value);

  console.log(firstNumber, operator, secondNumber);
}
