//extract the filename from the clicked button's id attribute

// ue the filename to play the sound

var DaftPunk = DaftPunk || {};

DaftPunk.playSound = function() {
  new Audio('../sounds/' + this.fileName + '.wav').play();
};

DaftPunk.getFileName = function (e) {
  e.preventDefault();
  this.fileName = e.target.id;
  this.playSound();
};

//add event listeners for clicks
DaftPunk.addListeners = function(){
  console.log(this);
  var buttons = document.getElementsByTagName('a');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', this.getFileName.bind(this));
  }
};

window.onload = function(){
  DaftPunk.addListeners();
};
