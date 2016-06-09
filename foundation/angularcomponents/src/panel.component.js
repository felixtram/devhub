
(function() {
  'use strict'

  angular.module('myapps')
    .component('panel', {
      bindings: {
        app: '='
      },
      templateUrl: 'panel.html'
    });

})();
