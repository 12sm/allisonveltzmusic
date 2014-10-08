<?php while (have_posts()) : the_post(); ?>
  <article <?php post_class(); ?>>
    <div class="entry-content">
      <?php wp_link_pages(array('before' => '<nav class="page-nav"><p>' . __('Pages:', 'roots'), 'after' => '</p></nav>')); ?>
      <?php the_content(); ?>
    </div>
    <footer>
    </footer>
	<div class="col black-bg">
    <?php comments_template('/templates/comments.php'); ?>
  </article>
  </div>
<?php endwhile; ?>
