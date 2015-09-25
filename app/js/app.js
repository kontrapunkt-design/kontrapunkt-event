'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function () {
                $(document).foundation('joyride', 'start');
            });
			_userAgentInit();
		};
	return {
		init: _init
	};


})(document, jQuery);


(function( $ ) {
    $( window ).scroll(function() {
		clearTimeout( $.data( this, 'scrollCheck' ) );
		var windowPostion = $(window).scrollTop();
		var targetPostionTop = $('.lab-collection').offset().top + $('.lab-collection').height();
		$.data( this, 'scrollCheck', setTimeout(function() {
			if(windowPostion>targetPostionTop){
				$('.book-container').addClass('fixed-booking');
			}
			if(windowPostion<targetPostionTop || windowPostion===targetPostionTop){
				$('.book-container').removeClass('fixed-booking');
			}
		}, 10) );
	});
    $( window ).scroll(function() {
    	var targetHeight = $('.top').outerHeight() / 100;
    	var targetScroll = $(window).scrollTop() / targetHeight*1.2;
    	var targetOpacity = 1 - ((targetScroll - targetHeight) / 100);
    	var targetOpacity01 = 0.45 + ((targetScroll - targetHeight) / 100);
    	$('.top>.row').css('opacity', targetOpacity);
    	$('.top>.underlay').css('opacity', targetOpacity01);
    	console.log(targetOpacity01);
	});
})( jQuery );

$(' #scrollToPorgram ').click(function() {
	$('html, body').animate({
		scrollTop: $('.main-intro').offset().top - $('.book-container').height()
	}, 600);
});

(function() {
	app.init();
})();
