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
            $('.play-pause>.play').click(function(){
              debugger;
            window.inlinePlayer.stopSound(inlinePlayer.lastSound);
            });
          });
      soundManager.stop();