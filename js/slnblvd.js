/*
	Created:	2010-09-24
	Author:		David Cheng, Solution Blvd AB
*/

$(document).ready(function() {
	$('div#offset1-layer').html($('div#top-layer').html());
	$('div#offset2-layer').html($('div#top-layer').html());
	
	// Set the height of the div that contains the logo.
	$('#logo').height($('#top-layer').height());
	
	// Link to startpage.
	$('.logo').live('click', function(e){
			e.preventDefault();
			document.location = 'http://www.solutionblvd.se';
		});
	
	$(window).bind('resize', function(){
		// Re-set the height of the div that contains the logo.
		$('#logo').height($('#top-layer').height());
	});

	$('a.email').nospam({ replaceText: true, filterLevel: 'low' });
	
	$('div#icon-offset1-layer').html($('div#icon-top-layer').html());
	$('div#icon-offset2-layer').html($('div#icon-top-layer').html());
});