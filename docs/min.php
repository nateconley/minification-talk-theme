<?php

$min = WP_DEBUG ? '' : '.min';

wp_enqueue_style(
	'my-styles',
	get_stylesheet_directory_uri() . "/assets/style{$min}.css",
	array(),
	'100911542017',
	'all'
);
