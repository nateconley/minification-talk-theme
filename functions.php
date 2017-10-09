<?php

/**
 * Enqueue parent style
 */
function twentyseventeen_child_enqueue() {

	// Parent Styles
	wp_enqueue_style(
		'twentyseventeen-parent',
		get_template_directory_uri() . '/style.css',
		array(),
		'100920171118',
		'all'
	);

	// Child Styles
	wp_enqueue_style(
		'twentyseventeen-child',
		get_stylesheet_directory_uri() . '/assets/styles.css',
		array(),
		'100920171136',
		'all'
	);

	// Cornify
	wp_register_script(
		'cornify-js',
		'http://www.cornify.com/js/cornify.js',
		array(),
		'100920171127'
	);

	// Child Scripts
	wp_enqueue_script(
		'twentyseventeen-child',
		get_stylesheet_directory_uri() . '/assets/scripts.js',
		array( 'cornify-js' ),
		'100920171128',
		true
	);

}

add_action( 'wp_enqueue_scripts', 'twentyseventeen_child_enqueue' );
