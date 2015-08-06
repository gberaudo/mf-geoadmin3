goog.provide('ga_controls3d_directive');

goog.require('ga_map');
(function() {

  var module = angular.module('ga_controls3d_directive', [
    'ga_map'
  ]);

  module.directive('gaControls3d', function() {
    return {
      restrict: 'A',
      templateUrl: 'components/controls3d/partials/controls3d.html',
      scope: {
        map: '=gaControls3dMap'
      },
      link: function(scope, elt, attrs) {
        scope.rotate = function(angle) {

        };

        scope.tilt = function(angle) {

        };

        scope.zoom = function(delta) {

        };
      }
    };
  });
})();
