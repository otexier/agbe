agbeServices.factory('soundService', ['$log',function ($log) {

    var soundService = {

        init : function() {
            $log.log("soundService.init");
            var pluga = window.plugins.LowLatencyAudio;
            alert("Plug = "+pluga);
            pluga.preloadFX('gun', 'media/gun.mp3');
        },

        play : function(name) {
            /*var auOgg = new Audio('./media/'+name+".ogg");
            auOgg.load();
            auOgg.play();
            var auMp3 = new Audio('./media/'+name+".mp3");
            auMp3.load();
            auMp3.play();
            */
            /*
            var dodo = new Media('/android_asset/www/media/sword.mp3', function(e) {alert('succes : '+e)}, function(e) {alert('erreur : '+e)});
            dodo.play();
            var dodo2 = new Media('/android_asset/www/media/sword.ogg', function(e) {alert('succes : '+e)}, function(e) {alert('erreur : '+e)});
            dodo2.play();
            */
            var pluga = window.plugins.LowLatencyAudio;
            pluga.play('gun');
        }

    }
    return soundService;
}]);
