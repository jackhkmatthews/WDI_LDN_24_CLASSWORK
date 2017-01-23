angular
  .module('wdiYearbook')
  .controller('UsersNewCtrl', UsersNewCtrl);

UsersNewCtrl.$inject = ['$http', '$state'];
function UsersNewCtrl($http, $state){
  const vm = this;

  vm.create = () => {
    return $http
      .post('http://localhost:3000/api/users', vm.user)
      .then(response => {
        console.log(response);
        $state.go('usersIndex');
      });
  };
}
