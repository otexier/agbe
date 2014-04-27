agbeServices.factory('soundService', ['$log',function ($log) {

    var soundService = {

        init : function() {
            $log.log("soundService.init");
            if (!createjs.Sound.initializeDefaultPlugins()) {
                alert("soundService : impossible to initialize sound system");
                return;
            }
            var audioPath = "media/";
            var manifest = [
                {id:"sword", src:"sword.ogg"}
            ];

            createjs.Sound.alternateExtensions = ["mp3"];
            createjs.Sound.addEventListener("fileload", function(event){
                $log.log("soundService : sound "+event.src+" loaded.");
            });
            createjs.Sound.registerManifest(manifest, audioPath);
        },

        play : function(id) {
            createjs.Sound.play(id);
        }

    }
    return soundService;
}]);
