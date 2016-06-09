( function () {
    
    'use strict';
    angular.module('myapps')
    .controller('myappsCtrl', ['fakeapps', myappsCtrl]);
    
    function myappsCtrl(fakeapps){
        var vm = this;
        
        this.apps = fakeapps.getApps();
    }
    
})();