 var slideimg_id = setInterval("slideImg()",3000);

 $(document).ready(function(){

  $('.js-tab-menu').click(function(){
    var index = $(this).data('tab-index');
    $('.js-tab-menu-active').removeClass('js-tab-menu-active');
    $(this).addClass('js-tab-menu-active');

    $('.js-tab').removeClass('js-tab-active');
    $('#idx-'+index).addClass('js-tab-active');
  });

  $('.js-go-book').click(function(){
    $('.js-tab-menu-active').removeClass('js-tab-menu-active');
    $($('.js-tab-menu')[2]).addClass('js-tab-menu-active');
    $('.js-tab').removeClass('js-tab-active');
    $('#idx-3').addClass('js-tab-active');
  });

  var map;

  function initialize() {
    var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);



});




 function slideImg(){
  var $active = $('.slide-imgs .active');

  if($active.next('.slide-img').length === 0){
    $next = $('.slide-img:first');
  }else{
    $next = $active.next();
  }
  $active.addClass('last-active');
  $next.css('opacity', '0').addClass('active').animate(
    {'opacity':'1'},
    1000,
    function(){
      $active.removeClass('active last-active');
    });
}

$(function(){
    var biggestHeight = "0";
    $(".slide-imgs *").each(function(){
        if ($(this).height() > biggestHeight ) {
            biggestHeight = $(this).height()
        }
    });
    $(".slide-imgs").height(biggestHeight);
})

$(window).resize(function(){
    var biggestHeight = "0";
    $(".slide-imgs *").each(function(){
        if ($(this).height() > biggestHeight ) {
            biggestHeight = $(this).height()
        }
    });
    $(".slide-imgs").height(biggestHeight);
})