/*
	Created:	2010-09-24
	Author:		David Cheng, Solution Blvd AB
*/

$(document).ready(function() {
	// Link to startpage.
	$('.logo').live('click', function(e){
			e.preventDefault();
			document.location = '/index.html';
		});

	$('a.email').nospam({ replaceText: true, filterLevel: 'low' });
});