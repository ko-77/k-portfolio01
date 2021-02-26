$(function(){
  //ハンバーガーメニュー
  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('open');
    $('.header-nav').toggleClass('open');
    $('.burger-musk').toggleClass('open');
  });
  $('.burger-musk').on('click',function(){
      $('.burger-btn').toggleClass('open');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').toggleClass('open');
    });
  //ハンバーガーメニュー

  //link-btn
  $('.link-btn').click(function(){
    var id=$(this).attr('href');
    var position=$(id).offset().top;
    $('html, body').animate({
      'scrollTop':position-91
    },500);
    if($('.burger-btn').hasClass('open')){
      $('.burger-btn').toggleClass('open');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').toggleClass('open')
    }
  });
  //link-btn

  //アコーディオン
  $('.faq-item').on('click',function(){
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp(500);
    }else {
      $answer.addClass('open');
      $answer.slideDown(500);
    }
  });
  //アコーディオン


//スライダー
var mySwiper = new Swiper ('.swiper-container', {
// ここからオプション
autoplay: {
  delay: 5000,
  disableOnInteraction: true
},
pagination: {
 el: '.swiper-pagination',
},
navigation: {
 nextEl: '.swiper-button-next',
 prevEl: '.swiper-button-prev',
},
scrollbar: {
 el: '.swiper-scrollbar',
 },
  slidesPerView: 1,
  centeredSlides:true,
  slideToClickedSlide:true,
  spaceBetween: 10,
  initialSlide: 3,
  loop: true,
  breakpoints: {
  890: {
      slidesPerView: 4,
      centeredSlides:true,
      spaceBetween: 56,
      },
  730: {
      slidesPerView: 4,
      centeredSlides:true,
      initialSlide: 3,
      spaceBetween: 20,
    },
    // 980px以上の場合
  350: {
      slidesPerView: 2,
      centeredSlides:true,
      initialSlide: 3,
      spaceBetween: 20,
    },
  }  // 1200px以上の場合
});
//スライダー

AOS.init({
});
});
