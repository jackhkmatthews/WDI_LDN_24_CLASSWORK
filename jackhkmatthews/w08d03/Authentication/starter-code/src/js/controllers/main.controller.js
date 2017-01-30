angular
  .module('angularAuthentication')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    console.log('loggedIn heard in main controller');
    CurrentUserService.getUser()
    .then(data => {
      vm.user = data;
      $state.go('usersIndex');
    }, err => {
      console.log(err);
    });
  });
}
