$(document).scroll(function () {
  if (document.documentElement.scrollTop >= 500) {
    $("#totop").css("display", "block");
  }
  else {
    $("#totop").css("display", "none");
  }
});
$("#totop").click(function () {
  document.documentElement.scrollTop = 0;
});


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

}
siteCarousel();

//Responsive menu toogler

$("#menu_toogler").click(function(){
  if(!$(this).prev().hasClass("active")){
    $(this).prev().addClass("active");
  }
})

$("#menu_closer").click(function(){
  if($(this).parent().hasClass("active")){
    $(this).parent().removeClass("active");
  }
})
