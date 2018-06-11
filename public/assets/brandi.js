$( document ).ready(function() {
    console.log( "ready!" );

    // Change nav bg color on scroll

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
});