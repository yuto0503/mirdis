  //logoの表示
   $(window).on('load',function(){
     $("#splash").delay(1500).fadeOut('slow');
     $("#splash_logo").delay(1200).fadeOut('slow');
   });


   
// スクロールアクション
  function fadeAnime(){
    // その場でふわっ
    $('.fadeInTrigger').each(function(){ 
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');
      }else{
      $(this).removeClass('fadeIn');
      }
      });

    // 左へふわっ
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

    $('.fadeLeftsTrigger').each(function(){ 
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeLefts');
      }else{
      $(this).removeClass('fadeLefts');
      }
      });

    // 右へふわっ
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

    $('.fadeRightsTrigger').each(function(){ 
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeRights');
      }else{
      $(this).removeClass('fadeRights');
      }
    });

    // 下からふわっ
    $('.fadesUpTrigger').each(function(){
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadesUp');
      }else{
      $(this).removeClass('fadesUp');
      }
      });
    }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();
  });



  // ページ内リンク
  $('#page-link a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top;
    $('body,html').animate({scrollTop: pos}, 500);
    return false;
  });
