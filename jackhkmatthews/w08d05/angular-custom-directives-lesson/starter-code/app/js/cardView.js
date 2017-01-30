angular
  .module('CardsAgainstAssembly')
  .directive('card', cardView);

cardView.$inject = [];
function cardView() {
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl = '_cardView.html';
  directive.scope = {
    question: '@' //the string
  //  figureThisOut: '&', //result value that the function returns
  //  thisData: '=' //interperlated value of the variable
  };
  return directive;
}
