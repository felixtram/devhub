( function () {

  'use strict';
  angular.module('myapps')
    .factory('fakeapps', ['$http', fakeApps]);

  function fakeApps($http){
    return {
      fakeApiCall: fakeApiCall,
      getApps: getApps
    };

    /* ----------------------------- */


    function fakeApiCall(){
      // call will be intercepted by httpBackend defined in main.module.js
      return $http.get('/myapps');
    }

    function getApps(){
      return {
        "inprogress" : [
          {
            "name" : "Short Name",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "percentage" : 10,
            "suites" : [ "Restaurant bundle", "Retail bundle", "Gift", "Ecommerce DevHub", "New"]
          },
          {
            "name" : "Longer App Name That Is Longer",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "percentage" : 20,
            "suites" : [ "Gift", "Ecommerce bundle (ODP)"]
          }
        ],
        "completed" : [
          {
            "name" : "Lots Of Icons",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "percentage" : 100,
            "suites" : [ "Retail bundle", "Retail Element", "Gift", "Ecommerce bundle", "ODP Ecommerce"]
          }, {

            "name" : "Completed App",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "percentage" : 100,
            "suites" : [ "Restaurant bundle"]
          }
        ]
      };

    }
  }

})();
