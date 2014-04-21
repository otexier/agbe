agbeApp.directive('agbeChoice', function () {
    return {
        templateUrl: 'template/agbe-choice.html',
        scope: {

        },
        link: function ($scope, element, $attrs) {
            var num = $attrs.choiceLabel;
            $scope.choiceLabel = num;
            var action = $attrs.choiceAction;
            $scope.choiceAction = action;
        },
        controller: ['$scope', '$attrs', 'agbeService', function ($scope, $attrs, agbeService) {

            $scope.agbeService = agbeService;

            $scope.go = function (destinationPage) {
                agbeService.go(destinationPage);
            }

            $scope.take = function (objectId) {
                agbeService.take(objectId);
            }

            $scope.onChoiceClick = function () {
                var action = $scope.choiceAction;
                $scope.$eval(action);
            }
        }]
    }
});