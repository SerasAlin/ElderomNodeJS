(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 150)
        }, 1000, "easeInOutExpo");
        //history.pushState('', '', this.hash.slice(1));
        // if(this.hash.slice(1) == "page-top"){
        //   $('title').html('Elderom Cluj-Napoca');
        // }
        // else{
        //   $('title').html('Elderom' + '-' + this.hash.slice(1));
        // }
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 300
  });

  $("#mainNavGallery").addClass("navbar-shrink");

  // Collapse Navbar
  var navbarCollapse = function() {
    if($("#mainNav").length){
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
        $("#mainNav").show("navbar-shrink");
        $(".nav-img").show(700);
      } else {
        $("#mainNav").removeClass("navbar-shrink");
        $(".nav-img").hide(700);
      }
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
