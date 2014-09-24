<footer class="content-info container" role="contentinfo">
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="row sidebar-footer">
      	<?php dynamic_sidebar('sidebar-footer'); ?>
      </div>
	  <div class="row footer-nav"> 
			<div class="col-sm-4 col-md-4 col-lg-4">
			  Email Sign Up
			</div>
			<div class="col-sm-4 col-md-4 col-lg-4">TEST 
				<?php
			 if (has_nav_menu('footer_navigation')) :
			   wp_nav_menu(array('theme_location' => 'footer_navigation', 'menu_class' => ''));
			 endif;
		  ?>
			</div>
			<div class="col-sm-4 col-md-4 col-lg-4">
				<p class="credits">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>  |  <a href="http://12southmusic.com/" target="_blank">built by 12SM</a></p>
			</div>
	  </div>
         
	<div id="social" class="row social-nav">
			<div class="col-sm-6 col-md-6 col-lg-6">
			  Email Sign Up
			</div>
			<div class="col-sm-6 col-md-6 col-lg-6">
				  <?php
					 if (has_nav_menu('social_navigation')) :
					   wp_nav_menu(array('theme_location' => 'social_navigation', 'menu_class' => ''));
					 endif;
				  ?>
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