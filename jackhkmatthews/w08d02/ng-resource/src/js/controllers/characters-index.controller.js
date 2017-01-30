angular
  .module('lightsaberApp')
  .controller('CharactersIndexCtrl', CharactersIndexCtrl);

CharactersIndexCtrl.$inject = ['Character'];
function CharactersIndexCtrl(Character) {
  const vm  = this;
  vm.characters = {};

  vm.characters = Character.query();

  vm.delete = charactersDelete;

  function charactersDelete(character){
    Character
      .delete({id: character._id})
      .$promise
      .then(() => {
        vm.characters = Character.query();
      });
  }

}
