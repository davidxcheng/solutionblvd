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
})();