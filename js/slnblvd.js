(function(doc, slnblvd) {
	// 
	slnblvd.reveal = function () {
		var el = doc.getElementById('email');

		if (el && el.rel){
			var adr = el.rel.replace('//', '@').replace(/\//g, '.');
			el.href = 'mailto:' + adr;
			el.innerText = adr;
		}
	};

	if (doc.readyState == 'complete') {
		// just in case DOMContentLoaded has already been fired
		slnblvd.reveal();
	}
	else if (doc.addEventListener) {
		// < ie9 dont have addEventListener (and don't get to see adr)
		document.addEventListener('DOMContentLoaded', slnblvd.reveal, false);
	}
})(document, {});