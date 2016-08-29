/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
  'use strict';

  angular.module('app.pages')
    .controller('LoginFormController', LoginFormController);

  LoginFormController.$inject = ['$rootScope', '$http', '$state'];

  function LoginFormController($rootScope, $http, $state) {
    var vm = this;

    activate();

    function activate() {
      // bind here all data from the form
      vm.account = {};
      // place the message if something goes wrong
      vm.authMsg = '';

      vm.login = function() {
        vm.authMsg = '';

        if (vm.loginForm.$valid) {
          var params = {
            email: vm.account.email,
            password: vm.account.password
          };

          $http.post('/api/login', params).then(function(response) {
            if (response.data.success) {
              setClientProperty(NUCLEUS_USER, JSON.stringify(response.data.user));

              var version = getCurrentVersion() + '.png';
              var url = '/api/users/' + response.data.user.sid + '/photo/' + version;

              $rootScope.user = {
                name: response.data.user.firstName,
                job: 'Developer',
                picture: url
              };

              $state.go('app.dashboard');
            } else {
              vm.authMsg = 'Incorrect credentials.';
            }
          }, function() {
            vm.authMsg = 'Server Request Error';
          });
        } else {
          // set as dirty if the user click directly to 
          // login so we show the validation messages
          /*jshint -W106*/
          vm.loginForm.account_email.$dirty = true;
          vm.loginForm.account_password.$dirty = true;
        }
      };
    }
  }
})();
