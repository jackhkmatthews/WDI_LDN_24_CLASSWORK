console.log('js loaded');

var Game = Game || {};

Game.addListeners = function addListeners() {
  console.log('hi');
};

document.addEventListener('DOMContentLoaded', Game.addListeners);
