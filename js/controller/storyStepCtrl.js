agbeApp.controller('storyStepCtrl', ['$scope', '$location', '$route', '$routeParams', '$log', 'agbeService',
    function ($scope, $location, $route, $routeParams, $log, agbeService) {

        // externalization of variables
        $scope.agbeService = agbeService;

        $log.log("Voici le nom de l'étape : " + $routeParams.storyStep);

        $scope.headerHtml = function () {
            return '<h3>lkjlkj</h3>';
        }

        $scope.stepRelativePath = function () {
            return 'story/' + $routeParams.storyStep + '.html';
        }

        $scope.soisPoli = function () {
            alert('bonjour madame');
        }

        $scope.showPopup = function () {
            $("#id_agbe_fight_popup").show();
        }

        $scope.hidePopup = function() {
            $("#id_agbe_fight_popup").hide();
        }

        $scope.onCharacterClick = function () {
            agbeService.agbeGo('character');
        }

        $scope.onInventoryClick = function () {
            agbeService.agbeGo('inventory');
        }

        $scope.onParametersClick = function () {
            agbeService.agbeGo('parameters');
        }
    }]);