(function($) {
    $(document).ready(function() {
	
	$('#test2_png').scianimator({
	    'images': ['images/test2.png1.png'],
	    'width': 480,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#test2_png').scianimator('play');
    });
})(jQuery);
