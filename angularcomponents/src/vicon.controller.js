( function () {
    
    'use strict';
    angular.module('myapps')
      .controller('viconCtrl', ['iconLookup', viconCtrl]);
      
      function viconCtrl(iconLookup){
          var vm = this;
          
          vm.$onInit = init;
          
          function init() {
            vm.class = getIconClass(vm.testsuite);    
          }
          
          function getIconClass(testsuite){
            var lookupTable = iconLookup.lookupObj();
            
            if(lookupTable.hasOwnProperty(testsuite)){
                return lookupTable[testsuite];
            }
            else
                return "";
          }
      }
    
})();