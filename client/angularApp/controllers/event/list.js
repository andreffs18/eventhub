'use strict';

eventhubController.controller('EventsController', function ($rootScope, $scope, EventFactory) {
  
  EventFactory.Event.getAll(function (response) {
    $scope.events = response;
  });
});
