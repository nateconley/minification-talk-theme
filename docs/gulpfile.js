const gulp        = require( 'gulp' );
const cleanCSS    = require( 'gulp-clean-css' );
const uglify      = require( 'gulp-uglify' );
const browserSync = require( 'browser-sync' );
const rename      = require( 'gulp-rename' );

gulp.task( 'browser-sync', () => {
	const files = [
		'**/*.php',
		'**/*.css',
		'**/*.js',
	];

	browserSync.init( files, {
		proxy: 'minification.dev',
	} );
} );

gulp.task( 'styles', () => {
	return gulp.src( './assets/styles.css' )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( cleanCSS() )
		.pipe( gulp.dest( './assets' ) );
} );

gulp.task( 'scripts', () => {
	return gulp.src( './assets/scripts.js' )
		.pipe( uglify() )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( gulp.dest( './assets' ) );
} );

gulp.task( 'watch', () => {
	gulp.watch( '**/*.js' );
	gulp.watch( '**/*.css' );
	gulp.watch( '**/*.php' );
} );

gulp.task( 'default', [ 'styles', 'scripts', 'browser-sync', 'watch' ] );
