agbeApp.controller('storyStepCtrl', ['$scope', '$location', '$route', '$routeParams', '$log', 'agbeService','agbeUiService','soundService',
    function ($scope, $location, $route, $routeParams, $log, agbeService,agbeUiService,soundService) {

        // externalization of variables
        $scope.agbeService = agbeService;

        $scope.urlInternet = {};

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

        $scope.fight = function() {
            agbeUiService.fight('crab');
        }

        $scope.onSound = function() {
            soundService.play('sword');
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