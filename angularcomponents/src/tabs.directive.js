(function() {
  angular.module('myapps')
  .directive('tabsDir', [tabsDir]);

  function tabsDir () {
    function link(scope, elem, attrs) {

      scope.$on('showtab', function(event, data) {
        if(attrs['id'] == data+'title'){
          elem.addClass('is-active');
        } 
        else {
          elem.removeClass('is-active');
        }

        angular.element( '.tabs-panel').removeClass('is-active');
        angular.element( '.tabs-panel' + '#' + data).addClass('is-active');
      });
    }
    
    return {
      restrict: 'A',
      link: link
    };
  }

})();
