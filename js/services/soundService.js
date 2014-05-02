agbeServices.factory('soundService', ['$log',function ($log) {

    var soundService = {

        init : function() {
            $log.log("soundService.init");
        },

        play : function(name) {
            var auOgg = new Audio('./media/'+name+".ogg");
            auOgg.load();
            auOgg.play();
            var auMp3 = new Audio('./media/'+name+".mp3");
            auMp3.load();
            auMp3.play();
        }

    }
    return soundService;
}]);
