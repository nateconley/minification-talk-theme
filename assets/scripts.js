( function() {

var pressed = [];
var secretCode = 'ocwp';

window.addEventListener( 'keyup', function( event ) {

	pressed.push( event.key );
	pressed.splice( - secretCode.length - 1, pressed.length - secretCode.length );

	if ( pressed.join( '' ).includes( secretCode ) ) {
		cornify_add();
		document.body.classList.add( 'cornify' );
	}

} );

} )();
