angular.module('eventApp', [])
.controller('EventController', function($scope) {
    $scope.days = [];

    // Generate sample data for demonstration
    for (let i = 1; i <= 31; i++) {
        $scope.days.push({
            date: 'March ' + i,
            events: []
        });
    }

    // Function to add event to a day
    $scope.addEvent = function(day) {
        let eventName = prompt('Enter event name:');
        if (eventName) {
            day.events.push(eventName);
        }
    };
});