agbeServices.factory('soundService', ['$log',function ($log) {

    var soundService = {

        init : function(agbeSoundArray,storySoundArray) {
            $log.log("soundService.init");
            var isPhonegap = (typeof(cordova) !== 'undefined' || typeof(phonegap) !== 'undefined');
            if (isPhonegap) {
                soundService.preloadSoundArray('audio/',agbeSoundArray);
                soundService.preloadSoundArray('story/audio/',storySoundArray);
            }
        },

        preloadSoundArray : function(basePath,soundArray) {
            var lla = window.plugins.LowLatencyAudio;
            for (var i=0;i<soundArray.length;i++) {
                var soundWithExtension = soundArray[i];
                var idxLastDot = soundWithExtension.lastIndexOf('.');
                var nameWithNoExtension = soundWithExtension.substr(0, idxLastDot);
                alert('preload pour '+nameWithNoExtension+' et '+basePath+soundWithExtension);
                lla.preloadFX(nameWithNoExtension, basePath + soundWithExtension);
            }
        },

        innerPlay : function(basePath,nameWithExtension) {
            var isPhonegap = (typeof(cordova) !== 'undefined' || typeof(phonegap) !== 'undefined');
            if (isPhonegap) {
                var lla = window.plugins.LowLatencyAudio;
                var idxLastDot = nameWithExtension.lastIndexOf('.');
                var nameWithNoExtension = nameWithExtension.substr(0,idxLastDot);
                lla.play(nameWithNoExtension);
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
