// 메인배너
$(function(){
    var current = 0;
    var setIntervalId;
 
    $("#btnGroup > li").eq(0).addClass("on");
 
    $("#btnGroup > li").click(function(){
        var i = $(this).index();
        //console.log(i);
        $("#btnGroup > li").removeClass("on");
        $(this).addClass("on");
        move(i);
    });

    // $("#wrap").on({
    //     mouseover:function(){
    //         clearInterval(setIntervalId);
    //     },
    //     mouseout:function(){
    //         timer();
    //     }
    // });
  
    //자동실행
    timer();
    function timer(){
       setIntervalId = setInterval(function(){
         var n = current + 1;
 
         if(n == 3){
             n = 0;
         }
 
         $("#btnGroup > li").removeClass("on");
         $("#btnGroup > li").eq(n).addClass("on");
 
         move(n);
       },3000)
      
    }
   
    function move(n){
        if(current == n) return;
 
        var currentEl = $("#viewer ul li").eq(current);
        var nextEl = $("#viewer ul li").eq(n);
 
        currentEl.css({opacity:1}).animate({opacity:0},1500);
        nextEl.css({opacity:0}).animate({opacity:1},1000);
 
         current = n;
    }
 
 });

// 상단메뉴
// $(document).ready(function(){
//     $(".mainMenu").mouseover(function(){
//         $(".subDep").slideDown(1000);
//     });
//     $(".subDep").mouseleave(function(){
//         $(".subDep").slideUp(1000);
//     });
//     
// });

// 휠 이벤트
(function($){
    $.aniPage=function(e,type){
        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
            $("body, html").animate({
                scrollTop:$(window).scrollTop()-$(window).height()
            },1000,function(){
                    $.aniOk = 0;
            });
        }else{
            $("body, html").animate({
                scrollTop:$(window).scrollTop()+$(window).height()
            },1000,function(){
                    $.aniOk = 0;
            });
        }
    };
})(jQuery);
$(function(){
    $(".w_box").height($(window).height());
    $.aniOk=0;
    $(window).scrollTop(0);
});
$(document).on("mousewheel DOMMouseScroll",function(e){
    e.preventDefault();
    if($.aniOk == 0){
        $.aniPage(e,e.type);
        $.aniOk = 1;
    }
});

// 상위이동
$(document).ready(function(){
    $(".Topbtn, .logoTop").click(function(){
        $('html').animate({scrollTop : 0}, 1000)
    });
});