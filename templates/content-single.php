<?php while (have_posts()) : the_post(); ?>
  <article <?php post_class(); ?>>
    <div class="entry-content">
      <?php wp_link_pages(array('before' => '<nav class="page-nav"><p>' . __('Pages:', 'roots'), 'after' => '</p></nav>')); ?>
      <?php the_content(); ?>
      	<div class="row">
		<div class="black-bg post-comments-wrapper col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
			<?php comments_template('/templates/comments.php'); ?>
		</div>
	</div>
    </div>
  </article>
  
<?php endwhile; ?>
