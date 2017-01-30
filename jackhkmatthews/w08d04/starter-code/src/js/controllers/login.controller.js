angular
  .module('angularAuthentication')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function LoginCtrl(User, CurrentUserService, $state) {
  console.log('LoginCtrl: ', LoginCtrl);
  const vm = this;

  vm.login = login;

  function login(){
    console.log('user: ', vm.user);
    User
    .login(vm.user)
    .$promise
    .then(data => {
      CurrentUserService.getUser();
      $state.go('usersIndex');
      console.log(data.token);
    }, err => {
      console.log(err);
    });
  }
}
