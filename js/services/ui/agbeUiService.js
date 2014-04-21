agbeServices.factory('agbeUiService', ['$log', 'agbeService',function (log, agbeService) {

    var agbeUiService = {

        AGBE_FIGHT_POPUP_ID : "id_agbe_fight_popup",
        AGBE_STEP_CONTAINER_ID : "id_agbe_step_container",

        currentPopupData : {},

        fight : function(scope,characterId) {
            angular.element(agbeUiService.AGBE_FIGHT_POPUP_ID).show();
        }

    }

    return agbeUiService;
}]);