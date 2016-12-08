//make buttons listen
//when number pressed
  //if first number variable empty pressed
    //display in display and save in first number
  //if first number variable populated
    //clear display
    //display number
    //save number in second numbner variable
//if operator pressed
  //if first number variable exists
    //save operator in a variable
  //if first number doesnt exists
    //do nothing
//when enter clicked
  //if firstNumber, SecondNumber and operator exist
    //display result

$(start);

var firstNumber, secondNumber, operator, answer;


function start(){
  $('[type="button"]').on('click', function(){
    var $element = $(this);
    if ($element.hasClass('number')) {
      if (!firstNumber){
        firstNumber = parseInt($element.val());
        $('.display').val(firstNumber);
      } else if (!secondNumber){
        secondNumber = parseInt($element.val());
        $('.display').val(secondNumber);
      } else {
        //do nothing
      }
    } else if ($element.hasClass('operator')){
      //do something
      if (!operator){
        operator = $element.val();
        console.log(operator);
      }
    } else if ($element.hasClass('eq')){
      calculateResult();
    } else if ($element.hasClass('clear')){
      firstNumber = '';
      secondNumber = '';
      operator = '';
      $('.display').val(answer);
    }
  });
}

function calculateResult() {
  console.log(firstNumber, secondNumber, operator);
  var answer;
  switch (operator.toUpperCase()) {
    case 'X':
      answer = firstNumber * secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '/':
      answer = firstNumber / secondNumber;
      break;
    case '+':
      answer = firstNumber + secondNumber;
      break;
    default:
      break;
  }
  $('.display').val(answer);
}
