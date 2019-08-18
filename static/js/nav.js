(function($) {
  "use strict"; // Start of use strict

  let pageScrolled = false;
  let navOpened = false;
  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      pageScrolled = true;
    } else {
      if (!navOpened) $("#mainNav").removeClass("navbar-shrink");
      pageScrolled = false;
    }
  };

  // Add color on menu click
  var navbarColor = function() {
    $(".navbar-toggler").click(() => {
      setTimeout(() => {
        if ($(".navbar-toggler").hasClass("collapsed")) {
          if (!pageScrolled) $("#mainNav").removeClass("navbar-shrink");
          navOpened = false;
        } else {
          $("#mainNav").addClass("navbar-shrink");
          navOpened = true;
        }
      }, 50);
    });
  };
  // Collapse now if page is not at top
  navbarCollapse();

  navbarColor();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 116
      },
      500,
      "easeInOutExpo"
    );
  });
})(jQuery); // End of use strict
