// makes sure the whole site is loaded
$(document).ready(function() {
// will first fade out the loading animation
	$("#status").fadeOut();
// will fade out the whole DIV that covers the website.
	$("#preloader").delay(1000).fadeOut("slow");
});