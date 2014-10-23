<footer class="content-info container" role="contentinfo">
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="row sidebar-footer">
      	<?php dynamic_sidebar('sidebar-footer'); ?>
      </div>
	  <div class="row footer-nav"> 
			<div class="col-sm-6 col-lg-6 email-signup">
				<div class="floatright">
				    <h5 class='list-title'>Join Allison's Email List</h5>
				    <link href="https://app.e2ma.net/css/signup.sml.css" rel="stylesheet" type="text/css">
				    <div class="e2ma_signup_form" id="e2ma_signup_form">
				    <div class="e2ma_signup_form_container" id="e2ma_signup_form_container">
				    <form target="_new" method="post" id="e2ma_signup" action="https://app.e2ma.net/app2/audience/signup/1763819/1738434/?v=a">
				        <input type="hidden" name="prev_member_email" id="id_prev_member_email">    
				        <input type="hidden" name="source" id="id_source">  
				        <input type="hidden" name="group_1236674" value="1236674" id="id_group_1236674">
				        <input type="hidden" name="private_set" value="{num_private}"> 
				            <div class="e2ma_signup_form_row">
				                <div class="e2ma_signup_form_label">
				                    <span class="e2ma_signup_form_required_asterix">*</span>
				                    Email
				                </div>
				                <div class="e2ma_signup_form_element">
				                    <input type="text" name="email" id="id_email">
				                </div>
				            </div> 
				            <div class="e2ma_signup_form_row">
				                <div class="e2ma_signup_form_label">
				                    <span class="e2ma_signup_form_required_asterix">*</span>
				                    Postal code
				                </div>
				                <div class="e2ma_signup_form_element">
				                    <input type="text" field_id="331458" name="member_field_postal_code" id="id_member_field_postal_code">
				                </div>
				            </div>
				            <div class="e2ma_signup_form_required_footnote">
				                <span class="e2ma_signup_form_required_asterix">*</span>
				                required
				            </div>
				            <div class="e2ma_signup_form_button_row" id="e2ma_signup_form_button_row">
				                <input id="e2ma_signup_submit_button" class="e2ma_signup_form_button" type="submit" name="Submit" value="Submit" {disabled}="">
				                &nbsp;
				                <input id="e2ma_signup_reset_button" class="e2ma_signup_form_button" type="reset" value="Clear" {disabled}="">
				            </div>
				    </form>
				    </div>
				    </div>
			  
			  
			  
				</div>
			</div>
			<div class="col-sm-6 col-lg-3"> 
				<?php
			 if (has_nav_menu('footer_navigation')) :
			   wp_nav_menu(array('theme_location' => 'footer_navigation', 'menu_class' => ''));
			 endif;
		  ?>
			</div>
			<div class="col-sm-6 col-lg-3">
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