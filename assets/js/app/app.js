$(document).ready(function () {

	// mobile nav
    $("#mobile-nav").height($(window).height());

    $(".icon-menu").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $("#mobile-nav").toggleClass("open");
    });

    $("#container").click(function () {
        $("#mobile-nav").removeClass("open");
        $(".icon-menu").removeClass("open");
    });

    $(window).resize(function () {
        if($(window).width() > 480){
        	if($("#mobile-nav").hasClass("open")){
        		$("#mobile-nav").removeClass("open");
        		$(".icon-menu").removeClass("open");
        	}
        }
    });

	// modals
    $(".modal-link").click(function (e) {
        e.preventDefault();
        var modal = "#" + $(this).attr("id") + "-content";
        $("html, body").animate({scrollTop: 0}, 500);
        $(modal).fadeIn(500);
    });

    $(".icon-close-modal").click(function (e) {
        e.preventDefault();
        $(".modal").fadeOut(500);
    });

    // cookies
    $(".cookie-message").cookieBar({
        closeButton: ".icon-close-modal"
    });

});

$(window).load(function () {

	// flexslider
    $(".flexslider").flexslider();

});

// resize header
$(function () {
    $("header").data("size", "big");
});

$(window).scroll(function(){
  if($(document).scrollTop() > 0){
    if($('header').data('size') == 'big'){
        $('header').data('size','small');
        $('header').addClass('shrink');
    }
} else {
    if($('header').data('size') == 'small'){
        $('header').data('size','big');
        $('header').removeClass('shrink');
      }  
  }
});