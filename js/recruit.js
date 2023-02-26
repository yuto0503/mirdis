function fadeAnime(){
  // 下からふわっ
  $('.fadeUpTrigger').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    }else{
    $(this).removeClass('fadeUp');
    }
    });

  // 左からふわっ
  $('.fadeLeftTrigger').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeLeft');
    }else{
    $(this).removeClass('fadeLeft');
    }
    });

  // 右からふわっ
  $('.fadeRightTrigger').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeRight');
    }else{
    $(this).removeClass('fadeRight');
    }
  });
  }

  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();
  });