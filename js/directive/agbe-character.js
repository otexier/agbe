agbeApp.directive('agbeCharacter', function () {
    return {
        templateUrl: 'template/agbe-character.html',
        scope: {

        },
        link: function ($scope, element, $attrs) {
            $scope.characterText = $attrs.characterText;
            $scope.characterId = $attrs.characterId;
            $scope.characterNb = $attrs.characterNb;
            if ($scope.characterNb == null) {
                $scope.characterNb = 1;
            }
            // object number declaration
            $scope.agbeService.declareCharacterNumber($scope.characterId, $scope.characterNb);
        },
        controller: ['$scope', '$attrs', 'agbeService','agbeUiService', function ($scope, $attrs, agbeService,agbeUiService) {

            $scope.agbeService = agbeService;

            $scope.isCharacterPresent = function () {
                return agbeService.isCharacterPresent($scope.characterId);
            },

                $scope.getCharacterImgPath = function () {
                    if ($scope.characterId != null) {
                        return agbeService.getCharacterImgPath($scope.characterId);
                    }
                }

            $scope.onCharacterClick = function () {
                agbeUiService.fight($scope.characterId);
            }
        }]
    }
});