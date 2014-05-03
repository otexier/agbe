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

        // Cordova is ready
        //
        $scope.onDeviceReady = function() {
            alert("pg pret");
        }

        document.addEventListener("deviceready", $scope.onDeviceReady, false);



        $scope.onSoundSwordOgg = function() {
            soundService.play('sword','ogg');
        }

        $scope.onSoundGunWav = function() {
            soundService.play('gun','wav');
        }

        $scope.onSoundGunMp3 = function() {
            soundService.play('gun','mp3');
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