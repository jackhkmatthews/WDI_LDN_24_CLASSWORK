angular
  .module('toDoApp')
  .controller('ToDosCtrl', ToDosCtrl);

ToDosCtrl.$inject = [];

function ToDosCtrl(){

  const vm = this;
  vm.items = [
    { task: 'sleep', done: false },
    { task: 'food', done: false},
    { task: 'watch shows', done: false},
    { task: 'win at football... Luca', done: false}
  ];

  vm.addItem = addItem;
  vm.done = done;
  vm.newItem = { task: '', done: false };

  function addItem(){
    vm.items.push(vm.newItem);
    vm.newItem = {task: '', done: false};
  }

  function done(item){
    item.done = true;
    console.log(item);
  }

}
