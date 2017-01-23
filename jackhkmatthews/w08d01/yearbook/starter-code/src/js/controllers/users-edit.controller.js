angular
  .module('wdiYearbook')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['$http', '$stateParams', '$state'];
function UsersEditCtrl($http, $stateParams, $state){
  const vm = this;
  const id = $stateParams.id;

  $http
    .get(`http://localhost:3000/api/users/${id}`)
    .then(response => {
      console.log(response);
      vm.user = response.data;
    });

  vm.update = update;

  function update(){
    $http
      .put(`http://localhost:3000/api/users/${id}`, vm.user)
      .then(response => {
        $state.go('usersShow', {id: vm.user._id});
        console.log(response);
      });
  }
}
