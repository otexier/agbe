agbeServices.factory('soundService', ['$log',function ($log) {

    var soundService = {

        init : function() {
            $log.log("soundService.init");
        },

        innerPlay : function(basePath,nameWithExtension) {
            var isPhonegap = (typeof(cordova) !== 'undefined' || typeof(phonegap) !== 'undefined');
            if (isPhonegap) {
                alert('is in pg');
                var lla = window.plugins.LowLatencyAudio;
                var idxLastDot = nameWithExtension.lastIndexOf('.');
                var nameWithNoExtension = nameWithExtension.substr(0,idxLastDot);
                alert('nameWithNoExtension : '+nameWithNoExtension+' basePath+nameWithExtension = '+basePath+nameWithExtension);
                lla.preloadFX(nameWithNoExtension, basePath+nameWithExtension);
                lla.play(name);
            }
            else {
                var auOgg = new Audio(basePath+nameWithExtension);
                auOgg.load();
                auOgg.play();
            }
        },

        playAgbeSound : function(nameWithExtension) {
            soundService.innerPlay('audio/',nameWithExtension);
        },

        playStorySound : function(nameWithExtension) {
            soundService.innerPlay('story/audio/',nameWithExtension);
        }


    }
    return soundService;
}]);
