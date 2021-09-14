$(function() {
    var header = $(".navbar");
    var burger = $(".navbar-toggler")
    var headerResponsive = $("#header")
    var testimonialSlider = $('.testimonial-slider')

    $(burger).click(function(){
        $(this).toggleClass('active');
        return false;
      });


      $(burger).click(function() {
          $(headerResponsive).toggleClass('header-responsive-bg')
          console.log("Header Changed")
      })
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("header-bg");
        } else {
            header.removeClass("header-bg");
        }
    });
    $(document).ready(function(){
        $(testimonialSlider).slick({
            prevArrow: `<i class="fas fa-chevron-left"></i>`,
            nextArrow: `<i class="fas fa-chevron-right"></i>`,
        });
      });
});
