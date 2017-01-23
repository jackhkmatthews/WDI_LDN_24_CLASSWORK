angular
  .module('wdiYearbook')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$http', '$stateParams', '$state'];
function UsersShowCtrl($http, $stateParams, $state){
  const vm = this;
  const id = $stateParams.id;

  $http
    .get(`http://localhost:3000/api/users/${id}`)
    .then(response => {
      vm.user = response.data;
    });

  vm.deleteUser = deleteUser;

  function deleteUser(){
    $http
      .delete(`http://localhost:3000/api/users/${id}`)
      .then(response => {
        console.log(response);
        $state.go('usersIndex');
      });
  }
}
