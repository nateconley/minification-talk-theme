var CleanCSS = require('clean-css');
var fs       = require( 'fs' );

var input    = '@import url(./assets/styles.css);';
var output   = new CleanCSS().minify( input );

fs.writeFile( './assets/styles.min.css', output.styles );
