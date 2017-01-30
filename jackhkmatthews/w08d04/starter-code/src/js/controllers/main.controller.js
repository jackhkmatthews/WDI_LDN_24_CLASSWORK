angular
  .module('angularAuthentication')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', 'TokenService', '$state'];
function MainCtrl($rootScope, CurrentUserService, TokenService, $state) {
  const vm = this;
  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });
  vm.logout = function(){
    CurrentUserService.removeUser();
  };

}
