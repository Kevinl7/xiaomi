//购物车特效//
$('nav .pc').mouseenter(function(){
    $(this).css('background','white');
    $('nav .pc .rb').show();
    $('nav .pc span').css('color','#FF6700');
    $('nav .gwc').slideDown(500);

})
$('nav .pc').mouseleave(function(){
    $(this).css('background','#424242');
    $('nav .pc .rb').hide();
    $('nav .pc span').css('color','#acb0b0');
    $('nav .gwc').slideUp(500);



})


//栏目特效//
$('.column .cTitle li').mouseenter(function(){
    $('.cContent .ul').show();
    $('.cContent .cL').eq($(this).index()).stop().slideDown(500)    //stop事件停止
 }).mouseleave(function(){
    $('.cContent .ul').hide();
    $('.cContent .cL').eq($(this).index()).stop().slideUp(500)
})
$('.column .cTitle .cTLi').hover(function(){
    $('.cContent .ul').hide();
})

//search 特效//
$('.column .cRight').hover(
    function(){
        if($('.column .cRight input:focus').length==0){

            $(this).css('borderColor','#B0B0B0');$('.column button').css('borderColor','#B0B0B0')
        }

        },
    function(){
            if($('.column .cRight input:focus').length==0){
                $(this).css('borderColor','#E0E0E0');$('.column button').css('borderColor','#E0E0E0')
            }

    })
$('.column .cRight input').focus(function(){
    $('.column .cRight').css('borderColor','#FF6801');
    $('.column .cRight .cRa').css('display','none');
    $('.column button').css('borderColor','#FF6801');
    $('.column .cRight .tie').css('display','block')
}).blur(function(){
    $('.column .cRight').css('borderColor','#E0E0E0');
    $('.column .cRight .cRa').css('display','block');
    $('.column button').css('borderColor','#E0E0E0');
    $('.column .cRight .tie').css('display','none')
})


//sidebar侧边栏//
var num =0;
var clock;
//定时器//
clock=setInterval(run,3000);
//鼠标滑过//
$('.sidebar .sBkd').mouseenter(function(){
    clearInterval(clock);
})
//鼠标移出//
$('.sidebar .sBkd').mouseleave(function(){
    clock=setInterval(run,3000);
})

//右点击//
$('.sidebar .sRight').click(function(){
    run();
})
//左点击//
$('.sidebar .sLeft').click(function(){
    if(num<=0){
        num=5;
    }
    num--;
    $('.sidebar .sBkd li').eq(num).addClass('show').siblings('li').removeClass('show');
})


//通用函数//
function run () {
    if(num>=$('.sidebar .sBkd li').length-1){
        num=-1;
    }
    num++;
    $('.sidebar .sBkd li').eq(num).addClass('show').siblings('li').removeClass('show');
}


$('.sSidebar li').mouseenter(function(){
    $('.sTab .sTabUl').show();
   $('.sTab .sLi').eq($(this).index()).stop().show();
}).mouseleave(function(){
    $('.sTab .sTabUl').hide();
    $('.sTab .sLi').eq($(this).index()).stop().hide();
})


//starItem  明星单品//

$('.sckR').hover(function(){
    $(this).css('color','#FF6700');
    clearInterval(dd);
},
function(){
    $(this).css('color','#BBB1B0');
})
$('.sckR').click(function(){
    $(this).off('hover');
    $('.StarItem .StarBox').animate({'left':'-1226px'},500);
    $(this).css('color','#E2E0E0');
    $('.sckL').css('color','#BBB1B0');
    $(this).mouseleave(function(){
        $(this).css('color','#E2E0E0');
    });
    $('.sckL').hover(function(){
        $(this).css('color','#FF6700');
    },
    function(){
        $(this).css('color','#BBB1B0');
    })
});
$('.sckL').click(function(){
    $('.StarItem .StarBox').animate({'left':'0'},500);
    $(this).css('color','#E2E0E0');
    $('.sckR').css('color','#BBB1B0');
    $(this).mouseleave(function(){
        $(this).css('color','#E2E0E0');
    });
    $('.sckR').hover(function(){
        $(this).css('color','#FF6700');
    },
    function(){
        $(this).css('color','#BBB1B0');
    })
});
    var cc =0;


function ss(){
    if(cc==1){
    $('.StarItem .StarBox').animate({'left':'0'},2000);
    cc=0;
}
    else if( cc==0){
       $('.StarItem .StarBox').animate({'left':'-1226px'},2000);
       cc=1;
   }


}








//SmartHardware智能硬件//

$('.collocation #cnTabUl1 .coLi').mouseenter(function(){
    $(this).addClass('jqCollocation').siblings('li').removeClass('jqCollocation');
    $('#cnTabUl1 .coLi ul').hide();
    $(this).find('ul').show();
})

//accessories 搭配//

$('.accessories #cnTabUl2 .jqcoLi').mouseenter(function(){
    $(this).addClass('jqCollocation').siblings('li').removeClass('jqCollocation');
    $('#cnTabUl2 .jqcoLi ul').hide();
    $(this).find('ul').show();
})

// theSurrounding 周边//

$('.theSurrounding #cnTabUl3 .jqcoLi').mouseenter(function(){
    $(this).addClass('jqCollocation').siblings('li').removeClass('jqCollocation');
    $('#cnTabUl3 .jqcoLi ul').hide();
    $(this).find('ul').show();
})

var zx =0;
$('.sckTR').click(function(){
    if(zx>=$('.edg ul').length-1){
        return $(this).css('color','#E0E0E0');
    }
    zx++;
    $('.edg ul').hide();
    $('.edg ul').eq(zx).show();
})
$('.sckTL').click(function(){
    if(zx==0){
        return $(this).css('color','#E0E0E0');
    }
    zx--;
    $('.edg ul').hide();
    $('.edg ul').eq(zx).show();
})