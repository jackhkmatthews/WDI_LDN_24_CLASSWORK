
var CallbackLesson = CallbackLesson || {};

CallbackLesson.loaded = function loaded(){
  this.getElementById('hello').addEventListener('click', CallbackLesson.clicked);
};

CallbackLesson.clicked = function clicked(){
  console.log(this + ' was clicked');
};

document.addEventListener('DOMContentLoaded', loaded);
