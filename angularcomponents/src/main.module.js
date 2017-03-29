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
            "name" : "Short Name",
            "description" : "Bacon ipsum dolor amet capicola pancetta ham hock, shoulder shank bacon swine shankle filet mignon meatball short ribs jowl doner tail. ",
            "percentage" : 10,
            "suites" : [ "Restaurant bundle"]
          },
          {
            "name" : "Longer App Name That Is Longer",
            "description" : "Chicken tri-tip turducken picanha, leberkas pork chop meatball swine frankfurter. Tongue spare ribs t-bone shank rump pork corned beef hamburger ball tip pancetta leberkas. Sausage brisket ham, chuck andouille picanha strip steak fatback rump ground round turducken. Flank shank venison salami.",
            "percentage" : 20,
            "suites" : [ "Gift", "Ecommerce bundle (ODP)", "New"]
          },
                    {
            "name" : "Longer App Name That Is Longer",
            "description" : "Sirloin short loin cow, filet mignon meatloaf turducken shank andouille swine landjaeger leberkas beef. Doner tail rump, spare ribs drumstick ham hamburger pork belly pork jerky biltong short ribs. Ham hock chuck tri-tip, pork belly andouille sirloin landjaeger jowl alcatra shank cow. Chuck pork chop brisket strip steak..",
            "percentage" : 20,
            "suites" : [ "Gift", "Ecommerce bundle (ODP)", "Retail bundle", "New"]
          },
          {
            "name" : "Longer App Name That Is Longer",
            "description" : "Kevin swine pork belly porchetta spare ribs beef, prosciutto beef ribs shoulder tongue short ribs ham. Sausage shoulder meatloaf tenderloin ball tip jowl shankle meatball pig. Swine corned beef turkey sirloin shoulder, filet mignon tenderloin tail. Kielbasa chicken sirloin, frankfurter pork filet mignon alcatra doner fatback turducken t-bone beef capicola. Flank pork belly leberkas, meatball ball tip filet mignon beef corned beef porchetta cow boudin turducken. Landjaeger tri-tip leberkas andouille chuck rump. Filet mignon drumstick t-bone shoulder.",
            "percentage" : 20,
            "suites" : [ "Gift"]
          }
        ],
        "completed" : [
          {
            "name" : "Lots Of Icons",
            "description" : "Bacon ipsum dolor amet capicola pancetta ham hock, shoulder shank bacon swine shankle filet mignon meatball short ribs jowl doner tail. ",
            "percentage" : 100,
            "suites" : [ "Retail bundle", "Retail Element", "Gift", "Ecommerce DevHub", "ODP Ecommerce"]
          }, 
          {

            "name" : "Completed App",
            "description" : "Bacon ipsum dolor amet capicola pancetta ham hock, shoulder shank bacon swine shankle filet mignon meatball short ribs jowl doner tail. ",
            "percentage" : 100,
            "suites" : [ "Restaurant bundle", "Retail bundle"]
          }
        ]
      };

      $httpBackend.whenGET('/myapps').respond(apps);
      $httpBackend.whenGET(/.*/).passThrough();

    });
})();
