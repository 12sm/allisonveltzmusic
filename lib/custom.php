<?php

add_shortcode('video-embed', 'get_Embed');
function get_Embed($atts){
	$defaults_array = array('url' => null);
	  shortcode_atts( $defaults_array, $atts );
	  $url = $atts['url'];
	  preg_match("#(?<=v=)[a-zA-Z0-9-]+(?=&)|(?<=v\/)[^&\n]+(?=\?)|(?<=v=)[^&\n]+|(?<=youtu.be/)[^&\n]+#", $link, $matches);

	$id = $matches[0];
	echo $id;
	return  "http://www.youtube.com/embed/" . $id;
}

define( 'UPLOADS', ''.'assets' );

?>
