 var slideimg_flag = false;
 var slideimg_id = setInterval("slideImg()",3000);

 function slideImg(){
  slideimg_flag = true;
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