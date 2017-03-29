
(function() {
  'use strict'

  angular.module('myapps')
    .component('vprogress', {
      bindings: {
        percentage: '@'
      },
      templateUrl: '/angularcomponents/src/vprogress.html'
    });

})();
