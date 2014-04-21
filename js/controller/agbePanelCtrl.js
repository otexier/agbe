agbeApp.controller('agbePanelCtrl', ['$scope', '$location', '$route', '$routeParams', '$log', 'agbeService', '$http',
    function ($scope, $location, $route, $routeParams, $log, agbeService, $http) {

        $log.log("agbePanel : Voici le nom de l'étape : " + $routeParams.agbePanel);

        // externalization
        $scope.agbeService = agbeService;
        //

        $scope.coucou = 3;

        $scope.panelRelativePath = function () {
            return 'template/' + $routeParams.agbePanel + '.html';
        };


    }]);