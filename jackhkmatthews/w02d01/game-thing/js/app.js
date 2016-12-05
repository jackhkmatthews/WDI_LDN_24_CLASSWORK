console.log('js loaded');

//make a grid

//make a sequence of a certain length

//llight up swaures within a certain time

//record user inputs

//check sequence

//dislay result

//start again with hard sequence

var Game = Game || {};

Game.sequence                    = [];
Game.guess                       = [];
Game.gridBase                    = 4;
Game.sequenceLength              = 4;
Game.width                       = '400';
Game.height                      = '400';

Game.createGrid = function(){
  console.log('making grid');
  var body = document.getElementsByTagName('body')[0];
  var grid = document.createElement('ul');
  body.appendChild(grid);
  console.log(Game.gridBase*Game.gridBase);
  for (var i = 0; i < Game.gridBase*Game.gridBase; i++) {
    var square = document.createElement('li');
    square.style.width = (Game.width / Game.gridBase) + 'px';
    square.style.height = (Game.height / Game.gridBase) + 'px';
    grid.appendChild(square);
  }
  Game.chooseSequence();
};

Game.chooseSequence = function() {
  for (var i = 0; i < Game.sequenceLength; i++) {
    Game.sequence.push(Game.randomSequenceNumber());
  }
  console.log(Game.sequence);
  Game.lightUp();
};

Game.randomSequenceNumber = function() {
  return Math.round(Math.random() * (Game.gridBase * Game.gridBase));
};

Game.lightUp = function() {
  var squares = document.getElementsByTagName('li');
  for (var i = 0; i < Game.sequence.length; i++) {
    squares[Game.sequence[i]].className = 'light';
  }
};

Game.start = function() {
  console.log('Game Started');
  Game.createGrid();
};

document.addEventListener('DOMContentLoaded', Game.start);
