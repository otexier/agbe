agbeServices.factory('persistenceService', ['$log', function ($log) {

    var persistenceService = {

        objectToPersistence : function(key,objectToBePersisted) {
            $log.log("persistenceService.objectToPersistence key="+key+" objectToBePersisted="+objectToBePersisted);
            localStorage.setItem(key,JSON.stringify(objectToBePersisted));
        },

        objectFromPersistence : function(key) {
            var resultString = localStorage.getItem(key);
            var result = JSON.parse(resultString);
            $log.log("persistenceService.objectFromPersistence : key="+key+" returns "+result);
            return result;
        }

    }
    return persistenceService;
}]);
