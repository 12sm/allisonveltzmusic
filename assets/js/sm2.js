(function($) {

$(document).ready(function() {

 soundManager.setup({
      	// disable or enable debug output
        debugMode: true,
        // use HTML5 audio for MP3/MP4, if available
        preferFlash: false,
        useFlashBlock: true,
        // path to directory containing SM2 SWF
        url: '/assets/js',
        // optional: enable MPEG-4/AAC support (requires flash 9)
        flashVersion: 9
      });


soundManager.onready(function() {
	// soundManager.createSound() etc. may now be called
    inlinePlayer = new InlinePlayer();
    //pause functionality
    $('.audiojs').click(function(){
    	window.inlinePlayer.stopSound(inlinePlayer.lastSound);
        $('.sm2_playing').removeClass('sm2_playing');
     });
     console.log('sm2.js just got called');
});
});

})(jQuery);