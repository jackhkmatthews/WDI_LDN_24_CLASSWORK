angular
  .module('lightsaberApp')
  .controller('CharactersNewCtrl', CharactersNewCtrl);

CharactersNewCtrl.$inject = ['API', '$http', '$state', '$resource'];
function CharactersNewCtrl(API, $http, $state, $resource) {
  const vm  = this;

  const Character = $resource(`${API}/characters`);

  vm.create = charactersCreate;

  function charactersCreate(){
    Character
    .save(vm.character)
    .$promise
    .then(() => {
      $state.go('charactersIndex');
    });
  }
}
