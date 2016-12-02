// Question 1
function maxOfTwoNumbers(numberOne, numberTwo) {
  if (numberOne > numberTwo) return numberOne;
  if (numberTwo > numberOne) return numberTwo;
  return 'equal!';
}

// Question 2
function maxOfThree(a, b, c) {
  return maxOfTwoNumbers(a, maxOfTwoNumbers(b, c));
}



// Question 3
function isCharacterAVowel(character) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  if (vowels.indexOf(character) !== -1) {
    return character + ' is a Vowel!';
  } else if (vowels.indexOf(character) === 5){
    return character + ' is a semi vowel';
  } else {
    return character + ' is not a Vowel';
  }
}

// Question 4
function sumArray() {

}


// Question 4
function multiplyArray() {

}


// Question 5
var numberOfArguments = function(){

}



// Question 6
var reverseString = function (){

};


// Question 7
function findLongestWord () {

}


// Question 8
function filterLongWords () {

}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}
