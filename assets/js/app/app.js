$(document).ready(function() {

  //dropdown-nav
  $('.dd-trigger').click(function(e) {
    e.preventDefault();
    $('.dd-nav').slideToggle();
  });

  // mobile nav
  $("#mobile-nav").height($(window).height());

  $(".icon-menu").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("open");
    $("#mobile-nav").toggleClass("open");
    $('.dd-nav').slideUp();
  });

$("#container").click(function() {
  $("#mobile-nav").removeClass("open");
  $(".icon-menu").removeClass("open");
  $('.dd-nav').slideUp();
});

  $(window).resize(function() {
    if ($(window).width() > 480) {
      if ($("#mobile-nav").hasClass("open")) {
        $("#mobile-nav").removeClass("open");
        $(".icon-menu").removeClass("open");
      }
      $('.dd-nav').slideUp();
    }
  });

  // resize header
  $(function() {
    $("header").data("size", "big");
  });

  // modals
  $(".modal-link").click(function(e) {
    e.preventDefault();
    var modal = "#" + $(this).attr("id") + "-content";
    $("html, body").animate({
      scrollTop: 0
    }, 500);
    $(modal).fadeIn(500);
  });

  $(".icon-close-modal").click(function(e) {
    e.preventDefault();
    $(".modal").fadeOut(500);
  });

  // cookies
  $(".cookie-message").cookieBar({
    closeButton: ".icon-close-modal"
  });

  // Datepicker
  $('#datepicker').focus(function() {
    $('#calendar').fadeIn(300);
  });
  $('#calendar').on('click', '.pika-day', function() {
    var day = $(this).attr('data-pika-day'),
      month = $(this).attr('data-pika-month'),
      year = $(this).attr('data-pika-year'),
      prefDate = day + '-' + month + '-' + year;
    $('#datepicker').val(prefDate);
    $('#calendar').fadeOut(300);
  });

  // File upload
  $('#file-upload').click(function() {
    $('.upload').click();
  });

  // Thank You page
  if ($(window).width() > 480){
    var containerHeight = ($(window).height() - 220);
    $('#container.thanks').height(containerHeight);
  }
});


$(window).load(function() {

  // flexslider
  $(".flexslider").flexslider();

});

(function() {
 
  // tiny helper function to add breakpoints
  function getGridSize() {
    return ($(window).innerWidth < 600) ? 2 :
           ($(window).innerWidth < 900) ? 3 : 4;
  }
 
  $(window).load(function() {
    $('.flexslider-clients').flexslider({
      animation: "slide",
      animationLoop: true,
      itemWidth: 150,
      itemMargin: 0,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });
  });
 
  // check grid size on resize event
  // $(window).resize(function() {
  //   var gridSize = getGridSize();
 
  //   $('.flexslider-clients').vars.minItems = gridSize;
  //   $('.flexslider-clients').vars.maxItems = gridSize;
  // });
}());

$(window).scroll(function() {
  if ($(document).scrollTop() > 0) {
    if ($('header').data('size') == 'big') {
      $('header').data('size', 'small');
      $('header').addClass('shrink');
      $('#faq-link').addClass('scroll');
      $('.dd-nav').addClass('scroll');
    }
  } else {
    if ($('header').data('size') == 'small') {
      $('header').data('size', 'big');
      $('header').removeClass('shrink');
      $('#faq-link').removeClass('scroll');
      $('.dd-nav').removeClass('scroll');
    }
  }
});
