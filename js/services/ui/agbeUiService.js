agbeServices.factory('agbeUiService', ['$log', 'agbeService',function (log, agbeService) {

    var agbeUiService = {

        AGBE_STEP_CONTAINER_ID : "id_agbe_step_container",

        currentPopupData : {},

        fightCtrlScopeReference : undefined,

        fight : function(characterId) {
            agbeUiService.fightCtrlScopeReference.init(characterId);
            agbeUiService.fightCtrlScopeReference.visible = true;
        }

    }

    return agbeUiService;
}]);