angular
  .module('angularAuthentication')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', '$rootScope'];
function LoginCtrl(User, $rootScope) {
  console.log('LoginCtrl');
  const vm = this;
  vm.login = () => {
    User
      .login(vm.user)
      .$promise
      .then(data => {
        $rootScope.$broadcast('loggedIn');
        console.log(data);
      }, err => {
        console.log(err);
      });
  };
}
