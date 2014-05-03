agbeApp.controller('menuDemarrageCtrl', ['$scope', '$location','$route','$log','agbeService', function ($scope, $location,$route,$log,agbeService) {
    $log.log("Initialisation de menuDemarrageCtrl");
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.agbeService = agbeService;

    $scope.agbeApplicationReady = false;

    $scope.onDeviceReady = function() {
        $scope.agbeApplicationReady = true;
        agbeService.onApplicationReady();
    }

    if ((typeof(cordova) !== 'undefined' || typeof(phonegap) !== 'undefined')) {
        document.addEventListener("deviceready", $scope.onDeviceReady, false);
    }
    else {
        $scope.agbeApplicationReady = true;
    }
}]);