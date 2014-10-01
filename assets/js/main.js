/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {
     $('.entry-content').find('iframe').wrap("<div class='vid-container'></div>");
      $('.entry-content-asset').fitVids();
      $('.vid-container').fitVids();
       $('.flexslider>ul').addClass('slides');
        $('#slider>ul>li').imgLiquid({verticalAlign: '15%'});
        var gallery = $('#slider').find('.slides').clone();
        $('#carousel').html(gallery);
        // The slider being synced must be initialized first
        $('#carousel').flexslider({
          animation: "slide",
          controlNav: false,
          animationLoop: false,
          slideshow: false,
          itemWidth: 210,
          itemMargin: 5,
          asNavFor: '#slider'
        });

        $('#slider').flexslider({
          animation: "fade",
          controlNav: false,
          animationLoop: false,
          slideshow: false,
          sync: "#carousel"
        });

      $('#carousel>div>ul>li').imgLiquid({verticalAlign: 'top'});

      $('.fancyvid').fancybox({
            'autoSize'      : false,
            'width'         : "80%",
            'height'        : "80%",
            'type'          : 'iframe',
            'aspectRatio'   : true
      });
      // JavaScript to be fired on all pages
      $('.navbar-nav>li>a').click(function(){
        $('.navbar-collapse').collapse('hide');
      });
      $('.archive-image').imgLiquid();
      //body class update
      function bodyClassChange(){
        link = $(this).attr('href').split('/');
        $('body').removeAttr('class');

        if ( link.length < 3){
          $('body').addClass('home');
        } else{
        $('body').addClass(link[1]);
        $('body').addClass(link[3]);
        }
      };

      $('a').click(function(){
        bodyClassChange();
      });

      $.backstretch('/wp-content/themes/allisonveltzmusic/assets/img/bg2.jpg', {centeredY:false});
    }
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page
      $(".owl-carousel").owlCarousel({

      autoPlay: false, //Set AutoPlay to 3 seconds
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
      itemsMobile: [479, 1]

  });
    }
  },
  // About us page, note the change from about-us to about_us.
  about_us: {
    init: function() {
      // JavaScript to be fired on the about us page
    }
  },
photos: {
  init: function(){
/*
    $('.gal-hover').mouseenter(function(){
      $('#slider.flexslider .slides > li').animate({height : '66vh'}, 500);
    });
    $('.hover-zone').mouseleave(function(){
      $('#slider.flexslider .slides > li').animate({height : '92vh'}, 500);
    });
*/
  }
},

 single_music: {
    init: function(){


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
  });
      /** Lyrics display **/
      /** Load first lyric **/
        var lyrics = $(".songs-list:first-child").find('.lyric-output').clone();
        $("#lyrics-base").html(lyrics[0]);

        $('.play').on('click', function(e){
            var lyrics = $(this).find('.lyric-output').clone();

            if (lyrics.length) {
                $("#lyrics-base").html(lyrics).parent().removeClass("closed");
                $("#lyrics-base").children().removeClass("hide");
                $("#lyrics-base").scrollTop(0,0);
            }else{
                $("#lyrics-base").parent().addClass("closed");
            }

            if (inlinePlayer) {
                inlinePlayer.events.finish = function() {

                    // Remove Playing Class
                    $('a.sm2_playing').removeClass('sm2_playing');

                    // Blow away the last played track
                    inlinePlayer.stopSound(inlinePlayer.lastSound);
                };
            }
        });


    }
  },
  music: {
    init: function(){


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
  });
      /** Lyrics display **/
      /** Load first lyric **/
        var lyrics = $(".songs-list:first-child").find('.lyric-output').clone();
        $("#lyrics-base").html(lyrics[0]);

        $('.play').on('click', function(e){
            var lyrics = $(this).find('.lyric-output').clone();

            if (lyrics.length) {
                $("#lyrics-base").html(lyrics).parent().removeClass("closed");
                $("#lyrics-base").children().removeClass("hide");
                $("#lyrics-base").scrollTop(0,0);
            }else{
                $("#lyrics-base").parent().addClass("closed");
            }

            if (inlinePlayer) {
                inlinePlayer.events.finish = function() {

                    // Remove Playing Class
                    $('a.sm2_playing').removeClass('sm2_playing');

                    // Blow away the last played track
                    inlinePlayer.stopSound(inlinePlayer.lastSound);
                };
            }
        });


    }
  },
  post_type_archive_music : {
    init: function(){


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
  });
      /** Lyrics display **/
      /** Load first lyric **/
        var lyrics = $(".songs-list:first-child").find('.lyric-output').clone();
        $("#lyrics-base").html(lyrics[0]);

        $('.play').on('click', function(e){
            var lyrics = $(this).find('.lyric-output').clone();

            if (lyrics.length) {
                $("#lyrics-base").html(lyrics).parent().removeClass("closed");
                $("#lyrics-base").children().removeClass("hide");
                $("#lyrics-base").scrollTop(0,0);
            }else{
                $("#lyrics-base").parent().addClass("closed");
            }

            if (inlinePlayer) {
                inlinePlayer.events.finish = function() {

                    // Remove Playing Class
                    $('a.sm2_playing').removeClass('sm2_playing');

                    // Blow away the last played track
                    inlinePlayer.stopSound(inlinePlayer.lastSound);
                };
            }
        });


    }
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.

