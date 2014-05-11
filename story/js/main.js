agbeServices.factory('agbeAdapter', ['$log', function (log) {

    var agbeAdapter = {

        agbeService : undefined,

        createStartCharacter: function () {
            var newCharacter = new agbeEntities.MainCharacter();
            newCharacter.healthPoints = 5;
            newCharacter.dexterity = 11;
            newCharacter.name = "Moi";
            newCharacter.attackSoundPath = 'sword.ogg';
            return newCharacter;
        },

        createStartInventory: function () {
            var newInventory = new agbeEntities.Inventory();
            return newInventory;
        },

        createStartStory: function () {
            var story = new agbeEntities.Story();
            story.step = "start";
            story.date = new Date(2014, 01, 01, 12, 0, 0, 0);
            return story;
        },

        createStartWorld: function () {
            var newWorld = new agbeEntities.World();
            agbeAdapter.agbeService.registerObject(newWorld,new agbeEntities.PhysicalObject('knife', 'Couteau', 'objects/knife.png'));
            agbeAdapter.agbeService.registerCharacter(newWorld,new agbeEntities.Character('crab', 'Le méchant crabe', 2,7,'characters/crab.jpg','crab.ogg'));
            return newWorld;
        }
    }

    return agbeAdapter;
}]);