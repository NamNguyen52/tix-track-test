function HomeCtrl() {
  var vm = this;

  vm.enteredFirstName = "";
  vm.enteredLastName = "";
  vm.showModal = false;

  vm.menuItems = ['Orders', 'Customers'];
  vm.customers = [
    {
      first: 'Gates',
      last: 'Bill'
    },
    {
      first: 'Steve',
      last: 'Jobs'
    }
  ];

  function resetModalForm() {
    vm.enteredFirstName = "";
    vm.enteredLastName = "";
  };

  vm.toggleModal = function() {
    vm.showModal = !vm.showModal;
    resetModalForm();
  };

  vm.addNewCustomer = function() {
    if (vm.enteredLastName.length > 0 && vm.enteredFirstName.length > 0) {
      var customer = {
        first: vm.enteredFirstName,
        last: vm.enteredLastName
      };
      vm.customers.push(customer);
      resetModalForm();
    } else {
      return; 
    }
  };

}

angular
  .module('ngTest')
  .controller('HomeCtrl', HomeCtrl)
