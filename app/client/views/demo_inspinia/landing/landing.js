
Template.landing.events({
    'click #showAlternationProductDetail':function(){
        $(".first-page").hide()
        $(".product-alternation-detail-page").show()
        if (navigator.userAgent.indexOf('Firefox') >= 0){
            document.documentElement.scrollTop=0;
        } else {
            $("body").scrollTop(0);
        }
        //console.log($(this).parent().addClass("active"))
        /*$(".landing-page .contact").css({
            'background-position':'50% 100%'
        })*/
        //$("#navbarDefiend").css({
        //        //'background':"gray"
        //        'background-color':'#cacaca',
        //        'opacity': 0.3,
        //        'font-color':'black'
        //    })
        //$("#navbarDefiend").addClass("navbar-scroll")
        //clearTimeout()
    },
    'click #showDirectProductDetail':function(){
        $(".first-page").hide()
        $(".product-direct-detail-page").show()

        if (navigator.userAgent.indexOf('Firefox') >= 0){
            document.documentElement.scrollTop=0;
        } else {
            $("body").scrollTop(0);
        }
        /*$(".landing-page .contact").css({
            'background-position':'50% 100%'
        })*/
        //$("#navbarDefiend").addClass("navbar-scroll")
        //clearTimeout()
    },
    'click #news1More':function(){
        $(".first-page").hide()
        $(".news1-detail-page").show()
        if (navigator.userAgent.indexOf('Firefox') >= 0){
            document.documentElement.scrollTop=0;
        } else {
            $("body").scrollTop(0);
        }
        /*$(".landing-page .contact").css({
            'background-position':'50% 100%'
        })*/
        //$("#navbarDefiend").addClass("navbar-scroll")
        //clearTimeout()
    },
    'click #news2More':function(){
        $(".first-page").hide()
        $(".news2-detail-page").show()
        if (navigator.userAgent.indexOf('Firefox') >= 0){
            document.documentElement.scrollTop=0;
        } else {
            $("body").scrollTop(0);
        }
        /*$(".landing-page .contact").css({
            'background-position':'50% 100%'
        })*/
        //$("#navbarDefiend").addClass("navbar-scroll")
        //clearTimeout()
    },
    'click .ul-nav li a':function(event){
        $(".second-page").hide()

        //console.log(event.currentTarget)
        if($(".first-page").is(":hidden")){
            $(".landing-page .contact").css({
                'background-position':'50% 50%'
            })
            $(".first-page").show()
            event.currentTarget.click()
            setTimeout( scrollPage, 250 );
        }
        //$(event.currentTarget).find("a").click()

    }
})
Template.landing.rendered = function(){

    new WOW().init()

    $('body').addClass('landing-page');
    $('body').attr('id', 'page-top');

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    });

    //var w = $("#features p").width()
    //console.log(w)
    //$("#features image").width(w)
    //console.log($("#features image").width())
    var download_url = ""
    $('#qrcode').qrcode({
        size: 200,
        //text: "http://www.chargeclouds.cn/download/ElectrocarSteward.apk"
        text:"http://mp.weixin.qq.com/mp/redirect?url=http://www.chargeclouds.cn/download/ElectrocarSteward.apk#weixin.qq.com#wechat_redirect"
        //text:"http://192.168.1.250:3000/loading_page"
    });



    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
    });



};
 /*$(function() {
    var docElem = document.documentElement,
        header = document.querySelector( '.navbar-default' ),
        didScroll = false,
        changeHeaderOn = 200;
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            $(header).addClass('navbar-scroll')
        }
        else {
            $(header).removeClass('navbar-scroll')
        }
        didScroll = false;
    }
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
    init();

});*/
Template.landing.destroyed = function() {
    $('body').removeClass('landing-page');
};
