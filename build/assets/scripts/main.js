// var a = new Typewriter('.kv__typewriter', {
//   delay: 75
// });

// a.typeString("我是打字機看的出來嗎")
// .pauseFor(300)
// .start()





$(".header__hamburger").on('click', function(event) {
    $(".nav").toggleClass("nav--active");
    $(".header__hamburger").toggleClass("header__hamburger--close");
    if( $(".nav").hasClass("nav--active") ) {
        TweenMax.killTweensOf($(".nav__item"));
        TweenMax.staggerFromTo($(".nav__item"), 0.5, {x:-50, opacity:0}, {x:0, opacity:1, ease:Power3.easeOut}, 0.05);
    }
    
});