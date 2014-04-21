agbeServices.factory('agbeUiService', ['$log', 'agbeService',function (log, agbeService) {

    var agbeUiService = {

        AGBE_STEP_CONTAINER_ID : "id_agbe_step_container",

        currentPopupData : {},

        currentOpponentId : undefined,

        fightCtrlScopeReference : undefined,

        fight : function(characterId) {
            agbeUiService.currentOpponentId = characterId;
            agbeUiService.fightCtrlScopeReference.init();
            agbeUiService.fightCtrlScopeReference.visible = true;
        }

    }

    return agbeUiService;
}]);