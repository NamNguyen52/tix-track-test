function customerModal() {
  return {
    restrict: 'EA',
    templateUrl: 'views/directive_templates/customerModalTemplate.html',
    scope: {
      showModal: '=',
      enteredFirstName: '=',
      enteredLastName: '=',
      toggleModal: '&',
      addNewCustomer: '&'
    }
  }
}

angular
  .module('ngTest')
  .directive('customerModal', customerModal)
