angular
  .module('angularAuthentication')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', '$rootScope'];
function RegisterCtrl(User, $rootScope){
  console.log('RegisterCtrl');
  const vm = this;

  vm.register = () => {
    User
      .register(vm.user)
      .$promise
      .then(data => {
        console.log(data);
        $rootScope.$broadcast('loggedIn');
      }, err => {
        console.log(err);
      });
  };
}
