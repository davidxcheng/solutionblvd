(function() {
	var layers = {
		application: {
			displayName: 'Application',
			protocols: ['HTTP', 'DNS', 'SMTP'],
			'unit of data': 'Message'
		},
		transport: {
			displayName: 'Transport',
			protocols: ['TCP', 'UDP'],
			'unit of data': 'Segment'
		},
		network: {
			displayName: 'Network',
			protocols: ['IP'],
			'unit of data': 'Packet'
		},
		link: {
			displayName: 'Data Link',
			protocols: ['Ethernet', '802.11'],
			'unit of data': 'Frame'
		},
		physical: {
			displayName: 'Physical',
			protocols: ['?'],
			'unit of data': 'Bit'
		}
	};

	var $ = (function(id) {	return document.getElementById(id);	}),
		infoEl = $('info'),
		titleEl = $('title'),
		protocolsEl = $('protocols'),
		unitEl = $('unit');

	$('layers').addEventListener('mouseover', function(e) {
		if (e.target.classList && e.target.classList[0] == "layer") {
			var layer = layers[e.target.id];
			infoEl.classList.remove("hide");
			titleEl.innerHTML = "The <b>" + layer.displayName + "</b> Layer";
			protocolsEl.innerText = layer.protocols.join(", ");
			unitEl.innerText = layer["unit of data"];
		}
	});
})();