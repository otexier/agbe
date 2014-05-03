var agbeApp = angular.module('agbe', ['ngRoute','agbe.services']).
    config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/story/:storyStep', {
                templateUrl : 'partials/storyStep.html',
                controller : 'storyStepCtrl'
            }
        );
        $routeProvider.when('/agbe/:agbePanel', {
                templateUrl : 'partials/agbePanel.html',
                controller : 'agbePanelCtrl'
            }
        );
        $routeProvider.otherwise({
                templateUrl : 'template/home.html',
                controller : 'menuDemarrageCtrl'
            }
        );
    });