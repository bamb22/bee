var swiper = new Swiper(".mySwiper", {
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});

$('.slik').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    });



    const navi=document.querySelector('.gnb');
    const menuBtn=document.querySelector('.goust-btn');

    menuBtn.addEventListener('click',()=>{
        navi.classList.toggle('gnb-btn');
    });

$(function(){
$(".slide-btn").click(function(){
            $(".box2").slideToggle("700");
        });
})



$('.r-box02').click(function(){
    $('.radio-box02').css('display','flex');
    $('.radio-box01').css('display','none');
    $('.radio-box03').css('display','none');
    $('.radio-box04').css('display','none');
    $('.radio-box05').css('display','none');
    $('.radio-box').css('display','none');
});

$('.r-box01').click(function(){
    $('.radio-box02').css('display','none');
    $('.radio-box01').css('display','flex');
    $('.radio-box03').css('display','none');
    $('.radio-box04').css('display','none');
    $('.radio-box05').css('display','none');
    $('.radio-box').css('display','none');
});
$('.r-box03').click(function(){
    $('.radio-box02').css('display','none');
    $('.radio-box01').css('display','none');
    $('.radio-box03').css('display','flex');
    $('.radio-box04').css('display','none');
    $('.radio-box05').css('display','none');
    $('.radio-box').css('display','none');
});
$('.r-box04').click(function(){
    $('.radio-box02').css('display','none');
    $('.radio-box01').css('display','none');
    $('.radio-box03').css('display','none');
    $('.radio-box04').css('display','flex');
    $('.radio-box05').css('display','none');
    $('.radio-box').css('display','none');
});
$('.r-box05').click(function(){
    $('.radio-box02').css('display','none');
    $('.radio-box01').css('display','none');
    $('.radio-box03').css('display','none');
    $('.radio-box04').css('display','none');
    $('.radio-box05').css('display','flex');
    $('.radio-box').css('display','none');
});

$(document).ready(function(){
$('#btn1').click(function(){
  var offset = $('.section01').offset(); 
      $('html').animate({scrollTop : offset.top}, 400);
});
});

$(document).ready(function(){
$('#btn2').click(function(){
  var offset = $('.section02').offset(); 
      $('html').animate({scrollTop : offset.top}, 400);
});
});

$(document).ready(function(){
$('#btn3').click(function(){
  var offset = $('.section03').offset(); 
      $('html').animate({scrollTop : offset.top}, 400);
});
});

$(document).ready(function(){
$('#btn4').click(function(){
  var offset = $('.section04').offset(); 
      $('html').animate({scrollTop : offset.top}, 400);
});
});

$(document).ready(function(){
$('#btn5').click(function(){
  var offset = $('.section05').offset(); 
      $('html').animate({scrollTop : offset.top}, 400);
});
});

$(document).ready(function(){
    $('.intro-box').click(function(){
      var offset = $('.section03').offset(); 
          $('html').animate({scrollTop : offset.top}, 400);
    });
    });


   $('.a').click(function(){
        $('.img01').css('display','flex');
        $('.img02').css('display','none');
        $('.img03').css('display','none');
    });

    $('.b').click(function(){
        $('.img03').css('display','none');
        $('.img02').css('display','flex');
        $('.img01').css('display','none');
    });

    $('.c').click(function(){
        $('.img03').css('display','flex');
        $('.img02').css('display','none');
        $('.img01').css('display','none');
    });

    $('.d').click(function(){
        $('.img01-pt').fadeIn('slow').css('display','flex')
        $('.img01-pt02').css('display','none');
        $('.img01-pt03').css('display','none');
    });

    $('.e').click(function(){
        $('.img01-pt').css('display','none');
        $('.img01-pt02').fadeIn('slow').css('display','flex');
        $('.img01-pt03').css('display','none');
    });

    $('.f').click(function(){
        $('.img01-pt').css('display','none');
        $('.img01-pt02').css('display','none');
        $('.img01-pt03').fadeIn('slow').css('display','flex');
    });

    $('.g').click(function(){
        $('.img01-pt').fadeIn('slow').css('display','flex');
        $('.img01-pt02').css('display','none');
        $('.img01-pt03').css('display','none');
    });

    $('.h').click(function(){
        $('.img01-pt').css('display','none');
        $('.img01-pt02').fadeIn('slow').css('display','flex');
        $('.img01-pt03').css('display','none');
    });

    $('.i').click(function(){
        $('.img01-pt').css('display','none');
        $('.img01-pt02').css('display','none');
        $('.img01-pt03').fadeIn('slow').css('display','flex');
    });



    $('.j').click(function(){
        $('.img01-pt').fadeIn('slow').css('display','flex');
        $('.img01-pt02').css('display','none');
        $('.img01-pt03').css('display','none');
    });

    $('.k').click(function(){
        $('.img01-pt').css('display','none');
        $('.img01-pt02').fadeIn('slow').css('display','flex');
        $('.img01-pt03').css('display','none');
    });

    $('.l').click(function(){
        $('.img01-pt').css('display','none');
        $('.img01-pt02').css('display','none');
        $('.img01-pt03').fadeIn('slow').css('display','flex');
    });


 


    var tabBtn = $(".tab-btn > ul > li");     //각각의 버튼을 변수에 저장
    var tabCont = $("#tab-cont > div");       //각각의 콘텐츠를 변수에 저장
    
    //컨텐츠 내용을 숨겨주세요!
    tabCont.hide().eq(0).show();
    
    tabBtn.click(function(){
      var target = $(this);         //버튼의 타겟(순서)을 변수에 저장
      var index = target.index();   //버튼의 순서를 변수에 저장
      tabBtn.removeClass("active");    //버튼의 클래스를 삭제
      target.addClass("active");       //타겟의 클래스를 추가
      tabCont.css("display","none");
      tabCont.eq(index).css("display","block");
    });


    $(document).ready(function(){
        var docWidth = $('body').width(),
            $wrap = $('#slide'),
            $images = $('#slide .hb'),
            slidesWidth = $wrap.width();
        
        $(window).on('resize', function(){
          docWidth = $('body').width();
          slidesWidth = $wrap.width();
        })
        
        $(document).mousemove(function(e) {
          var mouseX = e.pageX,
              offset = mouseX / docWidth * slidesWidth - mouseX / 2;
          
          $images.css({
            '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
                    'transform': 'translate3d(' + -offset + 'px,0,0)'
          });
        });
      })


AOS.init();