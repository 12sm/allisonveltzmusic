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
      $('.fancyvid').fancybox({
            'width'     : 720,
            'height'        : 480,
            'type'          : 'iframe'
      });
      // JavaScript to be fired on all pages
      $('.navbar-nav>li>a').click(function(){
        $('.navbar-collapse').collapse('hide');
      });
      $('.archive-image').imgLiquid();
      //body class update
      $('a').click(function(){
        link = $(this).attr('href').split('/');
        $('body').removeAttr('class');

        if ( link.length < 3){
          $('body').addClass('home');
        } else{
        $('body').addClass(link[1]);
        $('body').addClass(link[3]);
        }
      });
      $.backstretch('/wp-content/themes/allisonveltzmusic/assets/img/bg.jpg', {centeredY:false});
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

 single_music: {
    init: function(){

      /** Lyrics display **/
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

        /** Load first lyric **/
        var lyrics = $(".songs-list:first-child").find('.lyric-output').clone();
        $("#lyrics-base").html(lyrics);
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

