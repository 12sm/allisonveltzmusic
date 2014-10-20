soundManager.onready(function() {
	// soundManager.createSound() etc. may now be called
    inlinePlayer = new InlinePlayer();
    //pause functionality
    $('.audiojs').click(function(){
    	window.inlinePlayer.stopSound(inlinePlayer.lastSound);
        $('.sm2_playing').removeClass('sm2_playing');
     });
});
      