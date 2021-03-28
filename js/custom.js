$(document).ready(function () {
  if ($(window).width() > 992) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 84) {
        $(".navbar").addClass("fixed-top");
      } else {
        $(".navbar").removeClass("fixed-top");
      }
    });
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $(".scroll-to-top").addClass("visible");
    } else {
      $(".scroll-to-top").removeClass("visible");
    }
  });

  $('.scroll-to-top').on("click", function () {
    $(window).scrollTop(0);
  });


  $('.testimonials').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    autoplay: true
  });

});