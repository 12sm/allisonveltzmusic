<footer class="content-info container" role="contentinfo">
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="row sidebar-footer">
      	<?php dynamic_sidebar('sidebar-footer'); ?>
      </div>
	  <div class="row footer-nav"> 
			<div class="col-xs-12 col-sm-4 col-md-4 col-lg-7 email-signup">
			  <h5 class='list-title'>Join Allison's Exclusive Email List</h5><link href="https://app.e2ma.net/css/signup.sml.css" rel="stylesheet" type="text/css"><script type="text/javascript" src="https://app.e2ma.net/app2/audience/tts_signup/1763819/55ccffe82334411b90c492e32a9982ae/1738434/?v=a"></script><div id="load_check" class="signup_form_message" >This form needs Javascript to display, which your browser doesn't support. <a href="https://app.e2ma.net/app2/audience/signup/1763819/1738434/?v=a"> Sign up here</a> instead </div><script type="text/javascript">signupFormObj.drawForm();</script>
			</div>
			<div class="col-xs-12 col-sm-5 col-md-5 col-lg-2"> 
				<?php
			 if (has_nav_menu('footer_navigation')) :
			   wp_nav_menu(array('theme_location' => 'footer_navigation', 'menu_class' => ''));
			 endif;
		  ?>
			</div>
			<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
				<p class="credits">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>  |  <a href="http://12southmusic.com/" target="_blank">built by 12SM</a></p>
			</div>
	  </div>

      
    </div>
  </div>
</footer>

<?php wp_footer(); ?>

<!-- Begin 12SM Network Analytics <!-->   
  <script type="text/javascript">
	var _gaq = _gaq || [];
  	_gaq.push(['_setAccount', 'UA-27814560-1']);
  	_gaq.push(['_setDomainName', '12southmusic.com']);
  	_gaq.push(['_setAllowLinker', true]);
  	_gaq.push(['_trackPageview']);
 	(function() {
	  	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	  	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	  	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  	})();
	</script>
  <!-- End 12SM Network Analytics <!--> 