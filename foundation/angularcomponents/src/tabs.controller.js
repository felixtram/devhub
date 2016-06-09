( function () {
    
    'use strict';
    angular.module('myapps')
      .controller('tabsCtrl', ['$scope', tabsCtrl]);
      
      function tabsCtrl($scope){
        var vm = this;
          
        vm.activateTab = activateTab;
        
        function activateTab(tabId) {
            $scope.$broadcast('showtab', tabId);
        }
      }
})();