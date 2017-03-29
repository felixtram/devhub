( function () {
    
    'use strict';
    angular.module('myapps')
    .controller('myappsCtrl', ['fakeapps', myappsCtrl]);
    
    function myappsCtrl(fakeapps){
        var vm = this;
        
        vm.apps = [];
        
      
        activate();

        function activate() { 
          fakeapps.fakeApiCall().then(function(res){vm.apps = res.data;});
        }
    }
    
})();
