$(function(){
    $(".banner_main").slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:false,
        arrows:true,
        nextArrow: '.banear_next',
        prevArrow: '.banear_prev',
        

    })
    $(".Service_slide").slick({
        slidesToShow:3,
        slidesToScroll:1,
        dots:false,
        vertical:true,
         nextArrow: '.next',
        prevArrow: '.prev',
        centerMode:true,
        centerPadding:"opx",

    })
  

    $('.extra_item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.extra_img'
    });
    $('.extra_img').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.extra_item',
      dots: false,
      arrows:true,
      nextArrow: '.next_one',
      prevArrow: '.prev_two',
      centerMode: true,
      focusOnSelect: true,
      centerPadding:"0px",
      vertical:true,
    });


    $('.brand_extra_main').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode:true,
      centerPadding:"0px",
      dots:false,
      nextArrow: '.brand_next',
      prevArrow: '.brand_prev',
      autoplay: true,
      vertical:false,
  });



  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

new WOW().init();
})

