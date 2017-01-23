angular
  .module('thePresidentsApp')
  .controller('PresidentsCtrl', PresidentsCtrl);

PresidentsCtrl.$inject = ['$http'];
function PresidentsCtrl($http) {
  const vm = this;

  vm.all = [];
  vm.newPresident = {};
  vm.presidentsCreate = presidentsCreate;
  vm.deletePresident = deletePresident;

  presidentsIndex();

  function presidentsIndex(){
    $http
      .get('http://localhost:3000/api/presidents')
      .then(response => {
        vm.all = response.data;
        console.log(response);
      });
  }

  function presidentsCreate(){
    $http
      .post('http://localhost:3000/api/presidents', vm.newPresident)
      .then(response => {
        console.log(response);
        vm.all.push(response.data);
        vm.newPresident = {};
      });
  }

  function deletePresident(president){
    console.log(president);
    $http
      .delete(`http://localhost:3000/api/presidents/${president._id}`)
      .then(response => {
        const index = vm.all.indexOf(president);
        vm.all.splice(index, 1);
        console.log(response);
      });
  }





}
