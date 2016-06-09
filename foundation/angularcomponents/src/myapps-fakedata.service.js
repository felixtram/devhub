( function () {
    
    'use strict';
    angular.module('myapps')
      .factory('fakeapps', [fakeApps]);
      
      function fakeApps(){
          return {
              getApps: getApps
          };
      }
      
      function getApps(){
          return {
              "inprogress" : [
                  {
                     "name" : "Dino-Fighter",
                     "description" : "Description for Dino-Fighter app",
                     "percentage" : 10,
                     "suites" : [ "ecommerce", "gift"]
                  }, 
                  {
                     "name" : "TestApp2",
                     "description" : "description for test app 2",
                     "percentage" : 20,
                     "suites" : [ "ecommerce", "gift", "restaurant"]
                  }
                ],
              "completed" : [
                  {
                     "name" : "TestApp3",
                     "description" : "description for test app 3",
                     "percentage" : 100,
                     "suites" : [ "ecommerce", "gift"]
                  }, {
                      
                     "name" : "Unicorns Suck",
                     "description" : "Description for unicorns suck",
                     "percentage" : 100,
                     "suites" : [ "ecommerce", "restaurant"]
                  }
                ]
          };
      }
      
    
})();