angular
  .module('criminalsApp')
  .controller('CriminalsCtrl', CriminalsCtrl);

CriminalsCtrl.$inject = ['$http'];
function CriminalsCtrl($http){

  const vm = this;
  vm.all = [];
  vm.newCriminal = {};

  vm.criminalsIndex = criminalsIndex;
  vm.criminalsCreate = criminalsCreate;
  vm.criminalsDelete = criminalsDelete;

  vm.criminalsIndex();

  function criminalsIndex() {
    $http
    .get('http://localhost:3000/api/criminals')
    .then(response => {
      vm.all = response.data;
    });
  }

  function criminalsCreate(){
    console.log(vm.newCriminal);
    vm.all.push(vm.newCriminal);
    $http
    .post('http://localhost:3000/api/criminals', vm.newCriminal)
    .then(response => {
      console.log(response);
    });
    vm.newCriminal = {};
  }

  function criminalsDelete(criminal){
    const index = vm.all.indexOf(criminal);
    vm.all.splice(index, 1);
    $http
    .delete(`http://localhost:3000/api/criminals/${criminal._id}`)
    .then(response => {
      console.log(response.data);
    });
  }

  console.log('crims ctrl');
}
