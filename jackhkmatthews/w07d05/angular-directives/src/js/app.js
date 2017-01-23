// app.js is the main JS file which you should define your Angular module
angular
  .module('happyApp', [])
  .controller('homeCtrl', homeCtrl);

homeCtrl.$inject = [];
function homeCtrl(){
  const vm = this;
  vm.happyHistory = [];
  vm.selectedHappiness = '';
  vm.daysIndex = 0;
  vm.days = ['Monday', 'Tuesday', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  vm.submit = function(){
    const element = {
      day: vm.days[vm.daysIndex],
      happy: vm.selectedHappiness
    };
    vm.happyHistory.push(element);
    vm.daysIndex = (vm.daysIndex + 1) % 7;
  };
}
