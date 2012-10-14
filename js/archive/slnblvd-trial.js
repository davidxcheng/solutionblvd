/*
	Created:	2010-09-24
	Author:		David Cheng, Solution Blvd AB
*/

$(document).ready(function() {
	// Set the height of the div that contains the logo.
	$('#logo').height($('#top-layer').height());
	
	$('#lstTt3kApi').treeview({
		animated: "fast",
		persist: "location",
		collapsed: true,
		unique: false
	});
	
	$('#lstTt3kApi li a').draggable().droppable({
		hoverClass: 'drophover',
		drop: function(event, ui){
			$('#output').html('dropp');
		},
		over: function(event, ui){
			$('<li>Move Down</li>').insertAfter($('.drophover').parent());
		}
	});
	
	$(window).bind('resize', function(){
		// Re-set the height of the div that contains the logo.
		$('#logo').height($('#top-layer').height());
	});

	$('#tt3kAdd').live('click', function(){
		$.getJSON(
			"http://www.trashtalk3000.com/service.svc/add?value1=10&value2=8",
			function(data) {
				$('#output').text(data.AddResult);
			}
		);
	});
	
	$('#tt3kBlah').live('click', function(){
		$.getJSON(
			"http://www.trashtalk3000.com/service.svc/blah",
			function(data) {
				$('#output').text(data);
			}
		);
	});
	
	$('#tt3kPut').live('click', function(){
		$.ajax({
			type: 'PUT',
			contentType: 'application/json',
			url: 'http://www.trashtalk3000.com/service.svc/komigenlena/trial',
			data: null,
			success: function(data) {
				$('#output').html(data);
			},
			dataType: 'json'
		});
	});
	
	$('#tt3kDelete').live('click', function(){
		$.ajax({
			type: 'DELETE',
			contentType: 'application/json',
			url: 'http://www.trashtalk3000.com/service.svc/magisktmentragiskt/trial',
			data: null,
			success: function(data) {
				$('#output').html(data);
			},
			dataType: 'json'
		});
	});
	
	$('#get_trial').live('click', function(){
		$.getJSON({
			url: 'http://dc-win7x64:8000/ServiceModelSamples/Service/posttrial',
			data: '{ "Result": "raka", "Hola": "mors" }',
			success: function(data) {
				$('#output').html(data.Hola);
			}
		});
	});
	
	$('#subtract').live('click', function(){
		$.getJSON(
			"http://dc-win7x64:8000/ServiceModelSamples/Service/subtract",
			{ "value1": 100, "value2": 30 },
			function(data, msg) {
				$('#output').html(data.Hola);
			}
		);
	});
	
	$('#tt3kGetCountries').live('click', function(){
		$.getJSON(
			'http://www.trashtalk3000.com/restish-api.svc/countries',
			null,
			function(data){
				$('#output').html(data[0].Name);
			}
		);
	});
	
	$('#txtName').live('keypress', function(e){
		var name = $(this).val();
		var regex = /[a-z|A-Z]/;
		
		if(name.match(regex)){
			mjau(e.charCode, function(msg){alert(msg);});
		}
		else{
			mjau(name, null);
		}
	});
});

function mjau(str, che){
	$('#output').html(str);
	
	che('voyne voyne');
}