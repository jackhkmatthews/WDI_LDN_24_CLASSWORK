angular
  .module('wdiYearbook')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['$http'];
function UsersIndexCtrl($http){
  const vm = this;

  $http
    .get('http://localhost:3000/api/users')
    .then(response => {
      vm.users = response.data;
    });
}
