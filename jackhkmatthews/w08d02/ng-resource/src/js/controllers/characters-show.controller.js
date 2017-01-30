angular
  .module('lightsaberApp')
  .controller('CharactersShowCtrl', CharactersShowCtrl);

CharactersShowCtrl.$inject = ['API', '$http', '$stateParams', '$resource'];
function CharactersShowCtrl(API, $http, $stateParams, $resource) {
  const vm     = this;
  vm.character = {};

  const Character = $resource(`${API}/characters/:id`, { id: '@_id'});

  //@_id takes the value of stateParams
  vm.character = Character.get($stateParams);

}
