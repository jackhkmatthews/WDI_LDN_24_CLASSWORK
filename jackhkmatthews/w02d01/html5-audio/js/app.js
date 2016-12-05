console.log('js loaded');

window.addEventListener('DOMContentLoaded', function(event){

  var audio = document.getElementById('audio');
  audio.src = 'http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3';
  console.log(audio);
  var play = document.getElementById('button');
  play.addEventListener('click', playAudio);
  function playAudio(){
    audio.play();
  }
});
