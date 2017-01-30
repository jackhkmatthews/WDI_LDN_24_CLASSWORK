angular
  .module('lightsaberApp')
  .controller('CharactersEditCtrl', CharactersEditCtrl);

CharactersEditCtrl.$inject = ['API', '$http', '$stateParams', '$state', '$resource'];
function CharactersEditCtrl(API, $http, $stateParams, $state, $resource) {
  const vm     = this;
  vm.character = {};

  const Character = $resource(`${API}/characters/:id`,
    { id: '@_id'},
    { 'update': {method: 'PUT'} }
  );

  vm.character = Character.get($stateParams);
  vm.update    = charactersUpdate;

  function charactersUpdate(){
    Character
      .update({ id: $stateParams.id}, vm.charater)
      .$promise
      .then(() => {
        $state.go('charactersIndex');
      });
  }

}
