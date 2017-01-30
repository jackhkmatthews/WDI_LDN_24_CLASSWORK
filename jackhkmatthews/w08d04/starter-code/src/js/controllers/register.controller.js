angular
  .module('angularAuthentication')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'TokenService', 'CurrentUserService', '$state'];
function RegisterCtrl(User, TokenService, CurrentUserService, $state){
  console.log(RegisterCtrl);

  const vm = this;

  vm.register = register;

  function register(){
    console.log('vm.user: ', vm.user);
    User
    .register(vm.user)
    .$promise
    .then(data => {
      CurrentUserService.getUser();
      $state.go('usersIndex');
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
}
