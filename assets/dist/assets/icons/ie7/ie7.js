/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'junkaway\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-slider-right': '&#xe602;',
		'icon-slider-left': '&#xe603;',
		'icon-search': '&#xe604;',
		'icon-menu': '&#xe607;',
		'icon-mail': '&#xe609;',
		'icon-exclamation': '&#xe60a;',
		'icon-exclamation-round': '&#xe60b;',
		'icon-download': '&#xe60c;',
		'icon-close-modal': '&#xe60f;',
		'icon-arrow-down': '&#xe610;',
		'icon-phone': '&#xe617;',
		'icon-copy': '&#xe618;',
		'icon-angle-up': '&#xe619;',
		'icon-twitter': '&#xe61a;',
		'icon-link': '&#xe61b;',
		'icon-facebook': '&#xe600;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
