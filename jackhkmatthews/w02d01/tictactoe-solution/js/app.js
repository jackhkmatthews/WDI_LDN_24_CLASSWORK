window.onload           = start;
var counter             = 0;
var winCounter          = 0;
var XMoves              = [];
var OMoves              = [];
var winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                           [1, 4, 7], [2, 5, 8], [3, 6, 9],
                           [1, 5, 9], [3, 5, 7]
                          ];

function start() {
  var cells = document.getElementsByTagName('li');
  addCellListener(cells);
}

function addCellListener(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].addEventListener('click', addXorO);
  }
}

function addXorO(){
  var display = document.querySelector('#display');

  if (this.innerHTML !== 'O' && this.innerHTML !== 'X'){
    if (counter % 2 === 0){
      OMoves.push(parseInt(this.getAttribute('id')));
      this.innerHTML = 'O';
      this.setAttribute('class', 'O');
      display.innerHTML = 'Xs turn';
      checkForWinner(OMoves, 'O');
    } else {
      XMoves.push(parseInt(this.getAttribute('id')));
      this.innerHTML = 'X';
      this.setAttribute('class', 'X');
      display.innerHTML = 'Os turn';
      checkForWinner(XMoves, 'X');
    }
    counter++;
  }
}

function checkForWinner(movesArray, player) {
  console.log(movesArray, player);
  for (var i = 0; i < winningCombinations.length; i++) {
    winCounter = 0;

    for (var j = 0; j < winningCombinations[i].length; j++) {
      if(movesArray.indexOf(winningCombinations[i][j]) !== -1) {
        winCounter++;
      }
    }
    if(winCounter === 3) {
      alert('game over ' + player + ' wins');
    }
  }
}
