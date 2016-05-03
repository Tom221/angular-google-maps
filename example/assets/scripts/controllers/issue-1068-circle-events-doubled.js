(function (window, ng) {
    ng.module('app', ['uiGmapgoogle-maps'])
    .controller('MapsCtrl', ['$scope', "uiGmapLogger", "uiGmapGoogleMapApi", "$interval",
      function ($scope, $log, GoogleMapApi, $interval) {
          $log.currentLevel = $log.LEVELS.debug;
          var center = {
              latitude: 26.153215225012733,
              longitude: -81.80121597097774
          };

          $scope.map = {
              center: center,
              pan: true,
              zoom: 16,
              refresh: false,
              events: {},
              bounds: {}
          };

          $scope.map.circle = {
              id: 1,
              center: center,
              radius: 500,
              stroke: {
                  color: '#08B21F',
                  weight: 2,
                  opacity: 1
              },

              fill: {
                  color: '#08B21F',
                  opacity: 0.5
              },
              geodesic: true, // optional: defaults to false
              draggable: true, // optional: defaults to false
              clickable: true, // optional: defaults to true
              editable: true, // optional: defaults to false
              visible: true, // optional: defaults to true
              events: {
                  dblclick: function () {
                      $log.debug("circle dblclick");
                  },
                  radius_changed: function (gObject) {
                      var radius = gObject.getRadius();
                      $log.debug("circle radius radius_changed " + radius);
                  }
              }
          }
          
          $interval(function(){
    			$scope.map.circle.radius += 100;
		  }, 1000);
      } ]);



})(window, angular);