// Utilizamos el plugin de Easing JQuery
$(function() {
	// bind(): asigna uno o más event handlers
    $('a.page-scroll').bind('click', function(event) {
    	
    	//$(this): recogemos la información de cada toggle
        var $anchor = $(this);

        //stop.animate(): paramos la animación actual para luego pasarla a animar otra vez [animate()]
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).position().top-50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});