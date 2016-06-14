(function() {
  'use strict';

  // we are using ngMockE2E for $httpBackend service
  // make sure you load the angular-mocks library as well
  // httpBackend allows us to intercept http calls
  // which we'll use for mocking data, remove this
  // dependency when you're ready to wire the app to
  // an actual backend
  angular.module('mainmod', ['myapps', 'ngMockE2E'])
    .run(function($httpBackend){
        var apps = {
          "inprogress" : [
            {
              "name" : "Dino-Fighter",
              "description" : "Description for Dino-Fighter app",
              "percentage" : 10,
              "suites" : [ "Restaurant bundle", "Retail bundle"]
            },
            {
              "name" : "TestApp2",
              "description" : "description for test app 2",
              "percentage" : 20,
              "suites" : [ "Gift", "Ecommerce bundle (ODP)", "restaurant"]
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

        $httpBackend.whenGET('/myapps').respond(apps);
        $httpBackend.whenGET(/.*/).passThrough();

      });
})();
