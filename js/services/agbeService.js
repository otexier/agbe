agbeServices.factory('agbeService', ['$location', '$log', 'dataService','agbeAdapter', function ($location, log, dataService,agbeAdapter) {

    var agbeService = {

        // public API methods

        agbeGo: function (agbeLocation) {
            $location.path('/agbe/' + agbeLocation);
        },
        init: function () {
            log.log("agbeService.init()");
            dataService.worldData = agbeAdapter.createStartWorld();
        },

        go: function (newLocation) {
            dataService.storyData.step = newLocation;
            $location.path('/story/' + newLocation);
        },
        loadStory: function () {
            log.log("agbeService.loadStory()");
            dataService.load();
            agbeService.go(dataService.storyData.step);
        },

        newStory: function () {
            log.log("agbeService.newStory()");
            dataService.characterData = agbeAdapter.createStartCharacter();
            dataService.inventoryData = agbeAdapter.createStartInventory();
            dataService.storyData = agbeAdapter.createStartStory();
            agbeService.go(dataService.storyData.step);
        },

        registerCharacter : function(world,character) {
            world.characterDictionnary[character.id] = character;
        },

        registerObject : function(world,object) {
            world.objectDictionnary[object.id] = object;
        },

        saveStory: function () {
            log.log("agbeService.saveStory()");
            dataService.save();
            agbeService.go(dataService.storyData.step);
        },

        take: function (objectId) {
            var objectInfo = agbeService.getObjectInfo(objectId);
            if (objectInfo.nb >= 1) {
                objectInfo.nb = objectInfo.nb-1;
            }
            else {
                alert('Impossible to take object with id '+objectId+' : current number is '+objectInfo.nb);
            }
            var inventoryObjectInfo = agbeService.getInventoryObjectInfo(objectId);
            if (typeof inventoryObjectInfo.nb === "undefined") {
                inventoryObjectInfo.nb = 0;
            }
            inventoryObjectInfo.nb = inventoryObjectInfo.nb+1;
        },

        // private API methods

        declareCharacterNumber : function(characterId,characterNb) {
            var characterInfo = agbeService.getCharacterInfo(characterId);
            if (characterInfo != null) {
                if (typeof characterInfo.nb === "undefined") {
                    characterInfo.nb = characterNb;
                }
            }
        },

        declareObjectNumber : function(objectId,objectNb) {
          var objectInfo = agbeService.getObjectInfo(objectId);
          if (objectInfo != null) {
              if (typeof objectInfo.nb === "undefined") {
                  objectInfo.nb = objectNb;
              }
          }
        },

        dropObject : function(objectId) {
            var inventoryObjectInfo = agbeService.getInventoryObjectInfo(objectId);
            inventoryObjectInfo.nb = inventoryObjectInfo.nb-1;
            if (inventoryObjectInfo.nb <= 0) {
                delete dataService.inventoryData.objects[objectId];
            }
        },

        getDataByStep : function() {
            var dataByStep = dataService.storyData.dataByStep[dataService.storyData.step];
            if (dataByStep == null) {
                dataByStep = {};
                dataService.storyData.dataByStep[dataService.storyData.step] = dataByStep;
            }
            return dataByStep;
        },

        getInventoryObjectInfo: function (objectId) {
            var obj = dataService.worldData.objectDictionnary[objectId];
            if (obj == null) {
                alert('getInventoryObjectInfo : Impossible to retrieve object with id ' + objectId);
            }
            var res = dataService.inventoryData.objects[objectId];
            if (res == null) {
                res = new agbeEntities.ObjectInfo(objectId);
                dataService.inventoryData.objects[objectId] = res;
            }
            return res;
        },

        getInventoryObjectKeyList: function () {
            var result = [];
            for (var objectId in dataService.inventoryData.objects) {
                result.push(objectId);
            }
            return result;
        },

        getCharacterDefinition:function(characterId) {
            return dataService.worldData.characterDictionnary[characterId];
        },

        getCharacterInfo: function (characterId) {
            var char = agbeService.getCharacterDefinition(characterId);
            if (char == null) {
                alert('getCharacterInfo : Impossible to retrieve character with id ' + characterId);
            }
            var dataByStep = agbeService.getDataByStep();
            if (dataByStep.charactersInfos == null) {
                dataByStep.charactersInfos = {};
            }
            var res = dataByStep.charactersInfos[characterId];
            if (res == null) {
                res = new agbeEntities.CharacterInfo();
                dataByStep.charactersInfos[characterId] = res;
            }
            return res;
        },

        getObjectInfo: function (objectId) {
            var obj = dataService.worldData.objectDictionnary[objectId];
            if (obj == null) {
                alert('getObjectInfo : Impossible to retrieve object with id ' + objectId);
            }
            var dataByStep = agbeService.getDataByStep();
            if (dataByStep.objectsInfos == null) {
                dataByStep.objectsInfos = {};
            }
            var res = dataByStep.objectsInfos[objectId];
            if (res == null) {
                res = new agbeEntities.ObjectInfo();
                dataByStep.objectsInfos[objectId] = res;
            }
            return res;
        },

        getCharacterImgPath:function(characterId) {
            var result = null;
            var char = dataService.worldData.characterDictionnary[characterId];
            if (char == null) {
                alert("Impossible to find character with id="+characterId);
            }
            result = char.img;
            return result;
        },

        getPhysicalObject: function (objectId) {
            var obj = dataService.worldData.objectDictionnary[objectId];
            if (obj == null) {
                alert('getPhysicalObject : Impossible to retrieve object with id ' + objectId);
            }
            return obj;
        },

        isCharacterPresent:function(characterId) {
            var isPresent = false;
            var characterInfo = agbeService.getCharacterInfo(characterId);
            isPresent = characterInfo.nb >= 1;
            return isPresent;
        },

        isObjectPresent: function (objectId) {
            var isPresent = false;
            var objectInfo = agbeService.getObjectInfo(objectId);
            isPresent = objectInfo.nb >= 1;
            return isPresent;
        }
    }

    // direct injection to circumvent circular dependencies error
    agbeAdapter.agbeService = agbeService;

    return agbeService;
}]);