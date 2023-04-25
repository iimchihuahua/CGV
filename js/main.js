// ==================nav=======================

$(document).ready(function () {

    const $window = $(window)
    const firstMenu = $('.nav .contents > ul > li > h2 a')
    const subMenu = $('nav .nav_menu .nav_overMenu')
    const header = $('.nav .contents')
    // console.log(header)
    firstMenu.mouseenter(function () {
        header.stop().animate({
            height: '400px'
        }, 400)
        // subMenu.show();
    })
    header.mouseleave(function () {
        header.stop().animate({
            height: '50px'
        }, 400)
        // subMenu.hide();
    })
    const headerNav = $('.nav'),
        headerClone = headerNav.contents().clone(), //header요소 전체를 복사하는 것이고 안에 내용들을 복사한다. 
        headerCloneContainer = $('<div class="nav-clone"></div>');
    headerCloneContainer.append(headerClone)







    let threshold = headerNav.offset().top + headerNav.outerHeight()
    // $window.on('scroll', $.throttle(1000 / 15, function () {
    $window.on('scroll', function () {
        if ($(this).scrollTop() >= threshold) {
            headerCloneContainer.addClass('visible')
        } else {
            headerCloneContainer.removeClass('visible')
        }



        var secondMenu = $('.nav-clone.visible .contents > ul > li > h2 >a ')
        var secondHeader = $('.nav-clone.visible .contents')
        var second2 = $('.nav-clone.visible')
        headerCloneContainer.appendTo('body')
        secondMenu.mouseenter(function () {
            secondHeader.stop().animate({
                height: '400px'

            }, 400)

            // subMenu.show();
        })
        secondHeader.mouseleave(function () {
            secondHeader.stop().animate({
                height: '60px'
            }, 400)
            // subMenu.hide();
        })
        secondMenu.mouseenter(function () {
            second2.stop().animate({
                height: '400px'

            }, 400)

            // subMenu.show();
        })
        secondHeader.mouseleave(function () {
            second2.stop().animate({
                height: '60px'
            }, 400)
            // subMenu.hide();
        })
    })


    //동영상배너재생
    const play_stop = $('.play-stop')

    play_stop.click(function () {
        play_stop.toggleClass("play-stop-start");
        let temp = play_stop.hasClass("play-stop-start")
        if (temp) {
            $('#video_obj').trigger('pause');
        } else {
            $('#video_obj').trigger('play');
        }
    })
    //동영상배너음소거
    const sound_on = $('.sound-on')

    sound_on.click(function () {
        sound_on.toggleClass("sound-on-play");
        let temp = sound_on.hasClass("sound-on-play")
        if (temp) {
            $('#video_obj').prop('muted', true)
        } else {
            $('#viceo_obj').prop('muted', false)
        }
    })



    // ====================무비차트/상영예정작 슬라이드================
    let tabSlide = $('.tab_slide').bxSlider()

    $('.slide_tab').tabs({
        activate: function (event, ui) {
            tabSlide.reloadSlider();
        }
    })

 //===============무비차트 상영예정작 active===============

        
            const tabAnchor = $('.movietab h3'), // console log해보면 배열들 나옴
                tabPanel = $('.tab_slide')
                //링크를 클릭했을때 할 일
                 tabAnchor.click(function(e){
                    e.preventDefault();
            
                    tabAnchor.removeClass('active'); //전체를 클리어해놓고
                    $(e.currentTarget).addClass("active")//내가 선택한거 active된다 this로 적어줘도된다 
            
                    tabPanel.hide(); //display:none;
                    let target =$(this).attr('href')
                    $(target).show();
            
                 })
                 tabAnchor.eq(0).trigger("click")
        


 // -------------------------무비차트/상영예정작 swiperSlide--------------------- 
            new Swiper(".sw-basic", {

                navigation: {
                    nextEl: ".m-btn-next ",
                    prevEl: ".m-btn-prev ",
                },
                autoplay: true,
                // loop: true,
                spaceBetween: 30,
                slidesPerView: 5,
                slidesPerGroup: 5,
                watchOverflow: true // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정


            });


 // =====================이벤트 swiperSlide======================
            let sw_event = new Swiper(".sw-event", {
                // pagination: {
                //     el: ".swiper-pagination",
                //     clickable: true,
                // },
                navigation: {
                    nextEl: ".btn-next2",
                    prevEl: ".btn-prev2",
                },
                autoplay: true,
                // loop: true,
                spaceBetween: 25,
                slidesPerView: 3,



            });
            const event_control_btn = $('.event-control-btn')

            event_control_btn.click(function () {
                $(this).toggleClass("event-control-btn-start");
                let temp = $(this).hasClass('event-control-btn-start')
                if (temp) {
                    //슬라이드작동안함
                    //위에 설정해놓은new swiper .swbanner 를 변수로선언해준다
                    sw_event.autoplay.stop();
                } else {
                    //슬라이드 작동
                    sw_event.autoplay.start();
                }
            })



            // =======공지사항 배너 슬라이드=====
            let banner_slide = new Swiper(".banner-slide", {
                autoplay: true,
                loop: true,
            });
            const btn_noticecontrol = $('.btn-noticecontrol')
        
            btn_noticecontrol.click(function () {
                $(this).toggleClass("btn-noticecontrol-start");
                let temp = $(this).hasClass('btn-noticecontrol-start')
                if (temp) {
                    //슬라이드작동안함
                    //위에 설정해놓은new swiper .swbanner 를 변수로선언해준다
                    banner_slide.autoplay.stop();
                } else {
                    //슬라이드 작동
                    banner_slide.autoplay.start();
                }
            })
            



        // --------------------특별관 탭메뉴--------------
    $(function () {
        const tabAnchor = $('.specialHall-list li a'), // console log해보면 배열들 나옴
            tabPanel = $('.tabs-panel')
            //링크를 클릭했을때 할 일
             tabAnchor.mouseenter(function(e){
                e.preventDefault();
        
                tabAnchor.removeClass('active'); //전체를 클리어해놓고
                $(e.currentTarget).addClass("active")//내가 선택한거 active된다 this로 적어줘도된다 
        
                tabPanel.hide(); //display:none;
                let target =$(this).attr('href')
                $(target).show();
        
             })
             tabAnchor.eq(0).trigger("click")
        });
    

  







 // ===================================gotop=====================================

    //윈도우에 스크롤이 300px이상 생기면 go_top이 나타난다.
    $(window).scroll(function(){
        if($(this).scrollTop()!=0){
            
            $('.fixedBtn-wrap').addClass('show'),
            $('.fixedBtn-wrap').fadeIn(500)
        }else{
            //go_top(화살표버튼)이 숨는다.
            $('.fixedBtn-wrap').removeClass('show')
            $('.fixedBtn-wrap').fadeOut(500)
        }
     
    })

    $('.gotop').click(function (e) {
        e.preventDeFault()
    $('html, body').stop().animate({
        scrollTop: 0
    }, 500)

})
})
// $(window).scroll(function(){
//     if($(this).scrollTop()>=300){
        
//         $('.fixedticketing').fadeIn(300)
//         /* $('.go_top').show() or $('.go_top').fadeIn() */
//         //go_top(화살표버튼)이 나타난다.
//     }else{
//         //go_top(화살표버튼)이 숨는다.
//         $('.fixedticketing').fadeOut(300)
//     }
 
// })

// $('.fixedticketing').click(function (e) {
//     e.preventDeFault()
// $('html, body').stop().animate({
//     scrollTop: 0
// }, 500)
// });





// const go_top = $('.gotop')
// go_top.click(function () {
//     $('html, body').animate({
//         scrollTop: 0
//     }, 500)
// })

// $(window).scroll(function(){
//     if($(this).scrollTop()>=300){
        
//         $('.gotop').fadeIn(300)
//         /* $('.go_top').show() or $('.go_top').fadeIn() */
//         //go_top(화살표버튼)이 나타난다.
//     }else{
//         //go_top(화살표버튼)이 숨는다.
//         $('.gotop').fadeOut(300)
//     }
// })

// $('.gotop').click(function (e) {
//     e.preventDeFault()
// $('html, body').stop().animate({
//     scrollTop: 0
// }, 500)
// })

