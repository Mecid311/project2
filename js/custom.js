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

// video
$(".js-modal-btn").modalVideo({channel:'vimeo'});

// -----------------------
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
//owl carusel comment

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
siteCarousel();


var sitePlusMinus = function() {
  $('.js-btn-minus').on('click', function(e){
   var val=$(this).closest('.input-group').find('.form-control').val();
   if(val>1)
   val--;

   $(this).closest('.input-group').find('.form-control').val(val);
    // if ( $(this).closest('.input-group').find('.form-control').val() != 0 ) {
    //   $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
    // } else {
    //   $(this).closest('.input-group').find('.form-control').val(parseInt(0));
    // }
  });
  $('.js-btn-plus').on('click', function(e){
    
    var val=$(this).closest('.input-group').find('.form-control').val();
   if(val<9)
    val++;
    console.log(val);
    $(this).closest('.input-group').find('.form-control').val(val);
    // if($(this).closest('.input-group').find('.form-control').val()<10){
    //   $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
    // }
    // else{
    //   $(this).closest('.input-group').find('.form-control').val(parseInt(0));
    // }
  });
};
sitePlusMinus();


// -------------------
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}





var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display == "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var colll = document.getElementsByClassName("collapsible1");
var i;

for (i = 0; i < colll.length; i++) {
  colll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display == "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
  