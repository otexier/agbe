agbeApp.controller('storyStepCtrl', ['$scope', '$location', '$route', '$routeParams', '$log', 'agbeService','agbeUiService',
    function ($scope, $location, $route, $routeParams, $log, agbeService,agbeUiService) {

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
            alert('c est prêt');
        }

        document.addEventListener("deviceready", $scope.onDeviceReady, false);


        // Audio player
        //
        $scope.my_media = null;
        $scope.mediaTimer = null;

        // Play audio
        //
        $scope.playAudio = function(src) {
            if ($scope.my_media == null) {
                // Create Media object from src
                $scope.my_media = new Media(src, onSuccess, onError);
            } // else play current audio
            // Play audio
            $scope.my_media.play();

            // Update my_media position every second
            if ($scope.mediaTimer == null) {
                $scope.mediaTimer = setInterval(function() {
                    // get my_media position
                    $scope.my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                        },
                        // error callback
                        function(e) {
                            alert("Error getting pos=" + e);
                        }
                    );
                }, 1000);
            }
        }


        $scope.onSound = function() {
            $scope.playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');
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