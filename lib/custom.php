<?php

add_shortcode('video-embed', 'get_Embed');
function get_Embed($atts){
	$defaults_array = array('url' => null);
	  shortcode_atts( $defaults_array, $atts );
	  $url = $atts['url'];
	preg_match(
	        '/[\\?\\&]v=([^\\?\\&]+)/',
	        $url,
	        $matches
	    );
	$id = $matches[1];
	echo  "http://www.youtube.com/embed/" . $id;
}

define( 'UPLOADS', ''.'assets' );

?>
