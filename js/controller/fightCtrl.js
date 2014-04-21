agbeApp.controller('fightCtrl', ['$scope', '$location', '$route', '$routeParams', '$log', 'agbeService', 'agbeUiService','dataService',
    function ($scope, $location, $route, $routeParams, $log, agbeService, agbeUiService,dataService) {


        // record on agbeUiService
        agbeUiService.fightCtrlScopeReference = $scope;

        // externalization of variables
        $scope.agbeService = agbeService;

        $scope.visible = false;

        $scope.currentOpponent = undefined;

        $scope.currentOpponentId = undefined;

        $scope.currentOpponentInfo = {};

        $scope.init = function (characterId) {
            $scope.currentOpponentId = characterId;
            $scope.currentOpponent = agbeService.getCharacterDefinition(characterId);
            if ($scope.currentOpponent == null) {
                alert('FightCtrl : impossible to find character with id '+characterId);
            }
            $scope.currentOpponentInfo = agbeService.getCharacterInfo($scope.currentOpponentId);
            if ($scope.currentOpponentInfo.nb == null) {
                $scope.currentOpponentInfo.nb = 1;
            }
            if ($scope.currentOpponentInfo.healthPoints == null) {
                $scope.currentOpponentInfo.healthPoints = $scope.currentOpponent.healthPoints;
            }
            if ($scope.currentOpponentInfo.dexterity == null) {
                $scope.currentOpponentInfo.dexterity = $scope.currentOpponent.dexterity;
            }
        }

        $scope.getMainCharacterImgPath = function () {
            return './story/img/characters/main.jpg';
        }

        $scope.getOpponentImgPath = function () {
            return './story/img/characters/crab.jpg';
        }

        $scope.getMainCharacterHealthPoints = function () {
            return dataService.characterData.healthPoints;
        }

        $scope.getOpponentHealthPoints = function () {
            return $scope.currentOpponentInfo.healthPoints;
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
            result = dices+dex;
            return result;
        }

        $scope.decrementMainCharHealthPoint = function(amount) {
            dataService.characterData.healthPoints = dataService.characterData.healthPoints-amount;
        }

        $scope.decrementOpponentHealthPoint = function(amount) {
            $scope.currentOpponentInfo.healthPoints = $scope.currentOpponentInfo.healthPoints-amount;
        }

        $scope.displayNullRound = function() {
            alert('égalité');
        }

        $scope.endGameIfDead = function(message) {
            if (dataService.characterData.healthPoints <0) {
                agbeUiService.endGame(message);
            }
        }

        $scope.endFightIfOpponentDead = function(message) {
            if ($scope.currentOpponentInfo.healthPoints <= 0) {
                $scope.visible = false;
                alert('Combat gagné');
            }
        }

        $scope.onClickAttack = function () {
            var mainCharAttack = $scope.computeMainCharAttack();
            var opponentAttack = $scope.computeOpponentAttack();
            if (mainCharAttack == opponentAttack) {
                $scope.displayNullRound();
            }
            else {
                if (mainCharAttack > opponentAttack) {
                    $scope.decrementMainCharHealthPoint(2);
                }
                else if (opponentAttack > mainCharAttack) {
                    $scope.decrementOpponentHealthPoint(2);
                }
                $scope.endGameIfDead("Vous venez d'être tué.");
                // still alive
                $scope.endFightIfOpponentDead("Vous êtes victorieux");
            }
        }

        $scope.onClickRetreat = function () {

        }

    }]);