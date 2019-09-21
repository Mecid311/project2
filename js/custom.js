$(document).scroll(function () {
  if (document.documentElement.scrollTop >= 500) {
    $("#totop").css("display", "block");
  }
  else {
    $("#totop").css("display", "none");
  }

  if(document.documentElement.scrollTop>=64)
  {
    $("#sticky").addClass("fixed");
  }
  else{ 
    $("#sticky").removeClass("fixed");
  }
});

$("#totop").click(function () {
  document.documentElement.scrollTop = 0;
});






function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var siteCarousel = function () {

  if ( $('.hero-slide').length > 0 ) {
    $('.hero-slide').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      nav: true,
      dots: true,
      navText: ['<i class="fas fa-arrow-left"></i>', ' <i class="fas fa-arrow-right"></i>'],
      smartSpeed: 1000
    });
  }

  if ( $('.owl-slide-3').length > 0 ) {
    $('.owl-slide-3').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 30,
      autoplay: true,
      smartSpeed: 500,
      nav: true,
      dots: true,
      navText: ['<i class="fas fa-arrow-left"></i>', ' <i class="fas fa-arrow-right"></i>'],
      responsive:{
        600:{
          items: 2
        },
        1000:{
          items: 2
        },
        1200:{
          items: 3
        }
      }
    });
  }

  if ( $('.owl-slide').length > 0 ) {
    $('.owl-slide').owlCarousel({
      center: false,
      items: 2,
      loop: true,
      stagePadding: 0,
      margin: 30,
      autoplay: true,
      nav: true,
      navText: ['<i class="fas fa-arrow-left"></i>', ' <i class="fas fa-arrow-right"></i>'],
      responsive:{
        600:{
          
          nav: true,
          items: 2
        },
        1000:{
          
          stagePadding: 0,
          nav: true,
          items: 2
        },
        1200:{
          
          stagePadding: 0,
          nav: true,
          items: 2
        }
      }
    });
  }


  if ( $('.nonloop-block-14').length > 0 ) {
    $('.nonloop-block-14').owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      autoplay: true,
      nav: true,
      navText: ['<i class="fas fa-arrow-left"></i>', ' <i class="fas fa-arrow-right"></i>'],
      responsive:{
        600:{
          margin: 20,
          nav: true,
          items: 2
        },
        1000:{
          margin: 30,
          stagePadding: 0,
          nav: true,
          items: 2
        },
        1200:{
          margin: 30,
          stagePadding: 0,
          nav: true,
          items: 3
        }
      }
    });
  }

  $('.slide-one-item').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 0,
    autoplay: true,
    pauseOnHover: false,
    nav: true,
    navText: ['<i class="fas fa-arrow-left"></i>', ' <i class="fas fa-arrow-right"></i>']
  });
};
siteCarousel();