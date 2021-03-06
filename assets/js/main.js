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

  function YTclick() {
    $(window).on('blur',function(e) {
      if($(this).data('mouseIn') != 'yes')return;
      $('iframe').filter(function(){
        return $(this).data('mouseIn') == 'yes';
      }).trigger('iframeclick');
    });

    $(window).mouseenter(function(){
      $(this).data('mouseIn', 'yes');
    }).mouseleave(function(){
      $(this).data('mouseIn', 'no');
    });

    $('iframe').mouseenter(function(){
      $(this).data('mouseIn', 'yes');
      $(window).data('mouseIn', 'yes');
    }).mouseleave(function(){
      $(this).data('mouseIn', null);
    });

    $('iframe').on('iframeclick', function(){
       $('audio').trigger("pause");
       $('.audiojs').removeClass('playing');
    });
    $(window).on('click', function(){
      console.log('Clicked inside window');
    }).blur(function(){
      console.log('window blur');
    });
    $('<input type="text" style="position:absolute;opacity:0;height:0px;width:0px;"/>').appendTo(document.body).blur(function(){
      $(window).trigger('blur');
    }).focus();
  }
  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Roots = {
    // All pages
    common: {
      init: function() {

        $('#e2ma_signup').submit(function(){
          setTimeout(function(){
            $('#e2ma_signup')[0].reset();
          }, 1500);
        });

        $('.sm2_link').click(function(){
          if ($(this).hasClass('sm2_playing')) {
            $(this).removeClass('sm2_playing');
          }
          else {
            $('.sm2_playing').removeClass('sm2_playing');
            $(this).addClass('sm2_playing');
          }
        });

        //Audio auto pause scripts
        soundManager.stopAll();
        $('.entry-content').find('iframe').wrap("<div class='vid-container'></div>");
        $('.entry-content-asset').fitVids();
        $('.vid-container').fitVids();

        if ($(window).width() > 767){
          $('.flexslider>ul').addClass('slides');
          $('#slider>ul>li').imgLiquid({verticalAlign: '15%'});
          var gallery = $('#slider').find('.slides').clone();
          $('#carousel').html(gallery);
          // The slider being synced must be initialized first
          $('#carousel').flexslider({
            animation     : "slide",
            controlNav    : false,
            animationLoop : false,
            slideshow     : false,
            itemWidth     : 210,
            itemMargin    : 5,
            asNavFor      : '#slider'
          });

          $('#slider').flexslider({
            animation     : "fade",
            controlNav    : false,
            animationLoop : false,
            slideshow     : false,
            sync          : "#carousel"
          });

          $('#carousel>div>ul>li').imgLiquid({verticalAlign: 'top'});
        }
        // JavaScript to be fired on all pages
        $('.navbar-nav>li>a').click(function(){
          $('.navbar-collapse').collapse('hide');
        });
        $('.archive-image').imgLiquid();
        //body class update

        $("a:not([href$='mp3'], [href='#'], [target='_blank'])").click(function(){
          link = $(this).attr('href').split('/');
          $('body').removeAttr('class');
          if ( link.length < 3){
            $('body').addClass('home');
          } else{
            $('body').addClass(link[1]);
            $('body').addClass(link[3]);
            $('body').addClass(link[4]);
          }
        });

        $.backstretch('/wp-content/themes/allisonveltzmusic/assets/img/bg2.jpg', {centeredY:false});
      }
    },
    // Home page
    home: {
      init: function() {
        // JavaScript to be fired on the home page
        $(".owl-carousel").owlCarousel({
          autoPlay          : false, //Set AutoPlay to 3 seconds
          items             : 2,
          itemsDesktop      : [1199,2],
          itemsDesktopSmall : [979,2],
          itemsMobile       : [479, 1]
        });
      }
    },
    video: {
      init: function() {
        YTclick();
        
        $('.menu-news').removeClass('active');
        $('.menu-video').addClass('active');
      }
    },
    post_type_archive_video: {
      init: function() {
        YTclick();
        
       $('.menu-news').removeClass('active');
      $('.menu-video').addClass('active');
        
      }
    },
    single_video: {
      init: function() {
        YTclick();
        
        $('.menu-news').removeClass('active');
        $('.menu-video').addClass('active');
        
      }
    },
    instagram: {
      init: function(){
      
      	$('.menu-photos').addClass('active');
      	
        function liquidWrap(){
          $('.insta-photo').addClass('col-sm-6 col-md-4 col-lg-3');
          $('.insta-photo > a').wrap('<div class="img-pad"></div>');
          $('.img-pad').imgLiquid();
        };

        $('.instagram-grid').embedagram({
          instagram_id : 189755470,
          thumb_width  : 306,
          limit        : 20,
          wrap_tag     : 'div class=insta-photo',
          success      : liquidWrap
        });
      }
    },
    photos: {
      init: function(){
        function liquidWrap(){
          $('.insta-photo').addClass('col-sm-6 col-md-4 col-lg-3');
          $('.insta-photo > a').wrap('<div class="img-pad"></div>');
          $('.img-pad').imgLiquid();
        };
        $('.instagram-grid').embedagram({
          instagram_id : 189755470,
          thumb_width  : 306,
          limit        : 20,
          wrap_tag     : 'div class=insta-photo',
          success      : liquidWrap
        });
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
    single_photo_galleries: {
      init: function(){
	      $('.menu-news').removeClass('active');
	      $('.menu-photos').addClass('active');
     }
    },
    live: {
      init: function(){
	      $('.menu-live').addClass('active');
     }
    },
    single_live: {
      init: function(){
	      $('.menu-news').removeClass('active');
	      $('.menu-live').addClass('active');
     }
    },
    single_music: {
      init: function(){
      
      $('.menu-news').removeClass('active');
      $('.menu-music').addClass('active');
      
      $('.owl-carousel').owlCarousel({
                itemsCustom : [
       [0, 2],
       [480, 3],
       [768, 4],
       [1200, 4],
       [1600, 4]
       ],
       navigation : true,
       navigationText: ['<i class="fa fa-arrow-circle-left fa-3x"></i>','<i class="fa fa-arrow-circle-right fa-3x"></i>'],
       pagination: false,
       scrollPerPage : true
      });
      
      /** Lyrics display **/
        /** Load first lyric **/
        var lyrics = $(".songs-list:first-child").find('.lyric-output').clone();
        $("#lyrics-base").html(lyrics[0]);
        $('.play').on('click', function(e){
          var lyrics = $(this).find('.lyric-output').clone();
          //stop Audiojs
          $('audio').trigger("pause");
          $('.audiojs').removeClass('playing');
          if (lyrics.length) {
            $("#lyrics-base").html(lyrics).parent().removeClass("closed");
            $("#lyrics-base").children().removeClass("hide");
            $("#lyrics-base").scrollTop(0,0);
          }else{
            $("#lyrics-base").parent().addClass("closed");
          }
        });  
     
      }
    },
    music: {
      init: function(){
      
      $('.menu-news').removeClass('active');
      $('.menu-music').addClass('active');
      
      $('.owl-carousel').owlCarousel({
                itemsCustom : [
       [0, 2],
       [480, 3],
       [768, 4],
       [1200, 4],
       [1600, 4]
       ],
       navigation : true,
       navigationText: ['<i class="fa fa-arrow-circle-left fa-3x"></i>','<i class="fa fa-arrow-circle-right fa-3x"></i>'],
       pagination: false,
       scrollPerPage : true
      });
      
      /** Lyrics display **/
        /** Load first lyric **/
        var lyrics = $(".songs-list:first-child").find('.lyric-output').clone();
        $("#lyrics-base").html(lyrics[0]);
        $('.play').on('click', function(e){
          var lyrics = $(this).find('.lyric-output').clone();
          //stop Audiojs
          $('audio').trigger("pause");
          $('.audiojs').removeClass('playing');
          if (lyrics.length) {
            $("#lyrics-base").html(lyrics).parent().removeClass("closed");
            $("#lyrics-base").children().removeClass("hide");
            $("#lyrics-base").scrollTop(0,0);
          }else{
            $("#lyrics-base").parent().addClass("closed");
          }
        });  

      }
    },
    post_type_archive_music: {
      init: function(){
      
      $('.menu-news').removeClass('active');
      $('.menu-music').addClass('active');
      
      $('.owl-carousel').owlCarousel({
                itemsCustom : [
       [0, 2],
       [480, 3],
       [768, 4],
       [1200, 4],
       [1600, 4]
       ],
       navigation : true,
       navigationText: ['<i class="fa fa-arrow-circle-left fa-3x"></i>','<i class="fa fa-arrow-circle-right fa-3x"></i>'],
       pagination: false,
       scrollPerPage : true
      });
      
      /** Lyrics display **/
        /** Load first lyric **/
        var lyrics = $(".songs-list:first-child").find('.lyric-output').clone();
        $("#lyrics-base").html(lyrics[0]);
        $('.play').on('click', function(e){
          var lyrics = $(this).find('.lyric-output').clone();
          //stop Audiojs
          $('audio').trigger("pause");
          $('.audiojs').removeClass('playing');
          if (lyrics.length) {
            $("#lyrics-base").html(lyrics).parent().removeClass("closed");
            $("#lyrics-base").children().removeClass("hide");
            $("#lyrics-base").scrollTop(0,0);
          }else{
            $("#lyrics-base").parent().addClass("closed");
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
