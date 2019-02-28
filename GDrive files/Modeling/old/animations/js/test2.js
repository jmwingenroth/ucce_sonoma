(function($) {
    $(document).ready(function() {
	
	$('#test2').scianimator({
	    'images': ['images/test21.png'],
	    'width': 480,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#test2').scianimator('play');
    });
})(jQuery);
