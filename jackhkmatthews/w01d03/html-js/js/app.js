// prompt('How\'re you?');
// alert('That\'s great!');
//
// var homeTown = 'London';
// var responseTown = prompt('Where am I from?');
// while (homeTown !== responseTown) {
//   responseTown = prompt('Where am I from');
// }
//
// var sport = 'Football';
// var responseSport = prompt('Congrats!  Now what\'s my favourite sport?');
// while (sport !== responseSport) {
//   responseSport = prompt('What\'s my favourite sport?');
// }

var puddingGood = 'Sticky Toffee';
var puddingBad = 'Tiramisu';

var responsePudding = prompt('So. What\'s my favorie pudding?');
while (responsePudding !== puddingBad && responsePudding !== puddingGood) {
  responsePudding = prompt('That wasn\'t an option! Try again pls.');
}

if (responsePudding === puddingGood) {
  alert('You really are a gr8 m9! Let\'s go for some.');
} else {
  alert('Cmon coffee sukz');
}
