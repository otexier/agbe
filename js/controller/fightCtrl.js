agbeApp.controller('fightCtrl', ['$scope', '$location', '$route', '$routeParams', '$log', 'agbeService','agbeUiService',
    function ($scope, $location, $route, $routeParams, $log, agbeService,agbeUiService) {

        // externalization of variables
        $scope.agbeService = agbeService;

        $scope.fightVisible = true;

        $scope.init = function () {

        }

        $scope.getMainCharacterImgWidth = function () {
            var currentPopupWidth = agbeUiService.currentPopupData.w;
            return currentPopupWidth / 3;
        }

        $scope.getMainCharacterImgPath = function () {
            return './story/img/characters/main.jpg';
        }

        $scope.getOpponentImgWidth = function () {
            var currentPopupWidth = agbeUiService.currentPopupData.w;
            return currentPopupWidth / 3;
        }

        $scope.getOpponentImgPath = function () {
            return './story/img/characters/crab.jpg';
        }

        $scope.getMainCharacterHealthPoints = function () {
            return 20;
        }

        $scope.getOpponentHealthPoints = function () {
            return 15;
        }

        $scope.onClickAttack = function () {

        }

        $scope.onClickRetreat = function () {

        }

    }]);