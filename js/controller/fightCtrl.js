agbeApp.controller('fightCtrl', ['$scope', '$location', '$route', '$routeParams', '$log', 'agbeService', 'agbeUiService','dataService',
    function ($scope, $location, $route, $routeParams, $log, agbeService, agbeUiService,dataService) {


        // record on agbeUiService
        agbeUiService.fightCtrlScopeReference = $scope;

        // externalization of variables
        $scope.agbeService = agbeService;

        $scope.visible = false;

        $scope.currentOpponent = undefined;

        $scope.currentOpponentInfo = {};

        $scope.init = function (characterId) {
            $scope.currentOpponent = agbeService.getCharacterDefinition(characterId);
            if ($scope.currentOpponent == null) {
                alert('FightCtrl : impossible to find character with id '+characterId);
            }
            $scope.currentOpponentInfo = agbeService.getCharacterInfo($scope.currentOpponentId);
        }

        $scope.getMainCharacterImgPath = function () {
            return './story/img/characters/main.jpg';
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

        $scope.computeMainCharAttack = function () {
            var result = 0;
            var dices = Math.floor((Math.random()*6)+1)+Math.floor((Math.random()*6)+1);
            var dex = dataService.characterData.dexterity;
            result = dices+dex;
            return result;
        }

        $scope.computeOpponentAttack = function () {
            var result = 0;
            var dices = Math.floor((Math.random()*6)+1)+Math.floor((Math.random()*6)+1);
            var dex = dataService.characterData.dexterity;
            result = dices+$scope.currentOpponentInfo;
            return result;
        }

        $scope.onClickAttack = function () {
            var mainCharAttack = $scope.computeMainCharAttack();
            var opponentAttack = $scope.computeOpponentAttack();
            if (mainCharAttack > opponentAttack) {
                $scope.decrementMainCharHealthPoint(2);
            }
            else if (opponentAttack > mainCharAttack) {
                $scope.decrementOpponentHealthPoint(2);
            }
            else if (mainCharAttack = opponentAttack) {
                $scope.displayNullRound();
            }
        }

        $scope.onClickRetreat = function () {

        }

    }]);