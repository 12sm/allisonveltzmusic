<div class='row'>
	<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
		<?php while (have_posts()) : the_post(); ?>
		  <?php the_content(); ?>
		  <?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
		<?php endwhile; ?>
	</div>
</div>
