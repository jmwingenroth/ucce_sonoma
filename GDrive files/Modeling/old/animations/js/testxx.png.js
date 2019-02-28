(function($) {
    $(document).ready(function() {
	
	$('#testxx_png').scianimator({
	    'images': ['images/testxx.png1.png'],
	    'width': 480,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#testxx_png').scianimator('play');
    });
})(jQuery);
