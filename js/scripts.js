/*
 * PagePiling Plugin intialization
 */
$('#pagepiling').pagepiling({
	menu: '#menu',
	anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
	sectionsColor: ['#f5c979', '#0082c2', 'orange', 'yellow'],
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
        ['formatting'],
        'btnGrp-semantic',
        ['superscript', 'subscript'],
        ['link'],
        ['insertImage'],
        'btnGrp-justify',
        'btnGrp-lists',
        ['horizontalRule'],
        ['removeformat'],
        ['fullscreen']
    ]
});
