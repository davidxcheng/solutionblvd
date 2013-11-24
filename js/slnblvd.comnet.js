(function() {
	var layers = {
		application: {
			protocols: ['http', 'dns', 'smtp'],
			'unit of data': 'message'
		},
		transport: {
			protocols: ['tcp', 'udp'],
			'unit of data': 'segment'
		},
		network: {
			protocols: ['ip'],
			'unit of data': 'packet'
		},
		link: {
			protocols: ['ethernet', '802.11'],
			'unit of data': 'frame'
		},
		physical: {
			protocols: [],
			'unit of data': 'bit'
		}
	};

	var $ = (function(id) {	return document.getElementById(id);	}),
		protocolsEl = $('protocols'),
		unitEl = $('unit');

	$('layers').addEventListener('mouseover', function(e) {
		if (e.target.classList && e.target.classList[0] == "layer") {
			protocolsEl.innerText = layers[e.target.id].protocols.join(", ");
			unitEl.innerText = layers[e.target.id]["unit of data"];
		}
	});
})();