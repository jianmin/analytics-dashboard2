/**=========================================================
 * Module: access-register.js
 * Demo for register account api
 =========================================================*/

(function() {
  'use strict';

  angular.module('app.pages')
    .controller('RegisterFormController', RegisterFormController);

  RegisterFormController.$inject = ['$http', '$state'];
  function RegisterFormController($http, $state) {
    var vm = this;

    activate();

    function activate() {
      // bind here all data from the form
      vm.account = {};
      // place the message if something goes wrong
      vm.authMsg = '';
            
      vm.register = function() {
        vm.authMsg = '';

        if (vm.registerForm.$valid) {
          var params = {
            email: vm.account.email,
            firstName: vm.account.firstname,
            lastName: vm.account.lastname,
            password: vm.account.password
          };

          $http.post('/api/signup', params).then(function(response) {
            if (response.data.success) {
              $state.go('app.dashboard');
            } else {
              vm.authMsg = response.data.message;
            }
          }, function() {
            vm.authMsg = 'Server Request Error';
          });
        } else {
          // set as dirty if the user click directly to login 
          // so we show the validation messages
          /*jshint -W106*/
          vm.registerForm.account_firstname.$dirty = true;
          vm.registerForm.account_lastname.$dirty = true;
          vm.registerForm.account_email.$dirty = true;
          vm.registerForm.account_password.$dirty = true;
          vm.registerForm.account_agreed.$dirty = true;              
        }
      };
    }
  }
})();
