agbeServices.factory('soundService', ['$log',function ($log) {

    var soundService = {

        init : function() {
            $log.log("soundService.init");
        },

        play : function(name,ext) {
            /*var auOgg = new Audio('./media/'+name+".ogg");
            auOgg.load();
            auOgg.play();
            var auMp3 = new Audio('./media/'+name+".mp3");
            auMp3.load();
            auMp3.play();
            */
            var pluga = window.plugins.LowLatencyAudio;
            pluga.preloadFX(name, 'media/'+name+'.'+ext);
            pluga.play(name);
            //var dodo = new Media('/android_asset/www/media/sword.mp3', function(e) {}, function(e) {alert('erreur media : '+e)});
            //dodo.play();
            //var dodo2 = new Media('/android_asset/www/media/sword.ogg', function(e) {}, function(e) {alert('erreur media : '+e)});
            //dodo2.play();
        }


    }
    return soundService;
}]);
