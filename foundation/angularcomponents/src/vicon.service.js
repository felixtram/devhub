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
              "Restaurant bundle" : "icon vantiv-silverware",
              "Restaurant Element" : "icon vantiv-silverware",
              "Retail bundle" : "icon vantiv-shoppingcart",
              "Retail Element" : "icon vantiv-shoppingcart",
              "Gift" : "icon vantiv-gift",
              "Gift - Litle" : "icon vantiv-gift",
              "Ecommerce bundle (ODP)" : "icon vantiv-laptop",
              "ODP Ecommerce" : "icon vantiv-laptop",
              "Ecommerce DevHub" : "icon vantiv-laptop",
              "New" : "icon vantiv-plus"

              // Ecommerce DevHub, Ecommerce bundle(ODP)
          };
      }
      
    
})();