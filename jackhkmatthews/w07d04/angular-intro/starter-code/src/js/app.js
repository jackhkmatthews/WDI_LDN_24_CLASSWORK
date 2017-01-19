console.log('js loaded');

angular
  .module('leapFrog', [])
  .controller('ExhibitCtrl', ExhibitCtrl)
  .controller('OperationsCtrl', OperationsCtrl)
  .controller('DonorsCtrl', DonorsCtrl);

ExhibitCtrl.$inject = [];
function ExhibitCtrl(){
  const vm = this;
  vm.currentExhibit = {
    'Name': 'Opal & Iron',
    'Artist Name': 'Atticus',
    'Start Date': 'tomorrow',
    'End Date': 'next week',
    'Theme': 'Dates'
  };
  vm.nextExhibit = {
    'Name': 'Pens & Tempest',
    'Artist Name': 'Duck & Scarecrow',
    'Start Date': '20 February 2017',
    'End Date': '20 March 2017',
    'Theme': 'Nature'
  };
}

OperationsCtrl.$inject = [];
function OperationsCtrl(){
  const vm = this;
  vm.hours = {
    weekdays: {
      opening: '10:30',
      closing: '17:00'
    },
    weekends: {
      opening: '11:00',
      closing: '15:00'
    }
  };
  vm.address = {
    number: 34,
    street: 'Gallery way',
    town: 'Artsy Fartsy Town',
    city: 'Arsehatious',
    postCode: 'ART ART'
  };
  vm.phone = '+44 208 777 6454';
}

DonorsCtrl.$inject = [];
function DonorsCtrl(){
  const vm = this;
  vm.headOfMuseam = {
    phone: '+44 788 965 4567',
    name: 'Mishka Duke',
    age: '46',
    email: 'mishka.duke@mmoa.com'
  };
  vm.donations = {
    estMinValue: 0.5,
    estMaxValue: 1000000,
    types: ['Art', 'Cash', 'Credit card', 'Bond']
  };
}
