(function() {
  angular.module('myapps')
  .directive('tabsDir', [tabsDir]);

  function tabsDir () {
    function link(scope, elem, attrs) {
      scope.$on('showtab', function(event, data) {
        if(attrs['id'] == data){
          console.log(data + " matches id");
          elem.addClass('is-active');
        } else {
          elem.removeClass('is-active');
        }
      });
    }
    
    return {
      restrict: 'A',
      link: link
    };
  }

})();
