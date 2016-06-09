
(function() {
  'use strict'

  angular.module('myapps')
    .component('vbutton', {
      bindings: {
        link: '@', 
        displaytext: '@'
      },
      templateUrl: 'vbutton.html'
    });

})();
