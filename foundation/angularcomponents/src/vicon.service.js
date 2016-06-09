( function () {
    
    'use strict';
    angular.module('myapps')
      .factory('iconLookup', [iconLookup]);
      
      function iconLookup(){
          return {
              lookupObj: lookupObj
          };
      }
      
      function lookupObj(){
          return {
              "restaurant" : "fa fa-beer",
              "ecommerce" : "fa fa-money",
              "gift" : "fa fa-archive"
          };
      }
      
    
})();