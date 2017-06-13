/*
 * PagePiling Plugin intialization
 */
$('#pagepiling').pagepiling({
	menu: '#menu',
	anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
	sectionsColor: ['#f5c979', '#d1d1d1', 'orange', 'yellow'],
	scrollingSpeed: 1000,
	navigation: {
		'position': 'right',
		'tooltips': ['Team Leader Feedback', 'Staff Feedback', 'Timesheets', 'Photos', 'Publish']
	},
	afterRender: function () {
		$('#pp-nav').addClass('custom');
	},
	afterLoad: function (anchorLink, index) {
		if (index > 1) {
			$('#pp-nav').removeClass('custom');
		} else {
			$('#pp-nav').addClass('custom');
		}
	}
});

/*
 * Trumbo WSIWYFG Plugin intialization
 */

$(document).ready(function () {
	$('textarea').trumbowyg();
});

$('.simple-editor').trumbowyg({
	btns: [
        ['viewHTML'],
        ['formatting'],
        'btnGrp-semantic',
        ['insertImage'],
        'btnGrp-justify',
        'btnGrp-lists',
        ['horizontalRule'],
        ['removeformat']
    ]
});
