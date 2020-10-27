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



var t2 = new TimelineMax({paused: true});
t2.set($('.human'), {y: 150})
t2.fromTo($('.human'), 0.5, {scale: 0, alpha: 0}, {scale: 1.3, alpha: 1})
t2.to($('.human'), 0.5, {scale: 1, y: 120, delay: 3})
// t2.to($('body'), 0.5, {backgroundSize: "100% auto", backgroundPosition: "center 0px"})

var tl = new TimelineMax({repeat: 3, onRepeat: function() {
	tl.stop();
	t2.play()
}});






tl.fromTo($('.intro__a img').eq(0), 0.5, {alpha: 0, scale: 0}, {alpha:1, scale:1.2})
	.fromTo($('.intro__a .intro__sprite'), 0.1, {alpha: 0}, {alpha: 1, delay: 0.4})
	.fromTo($('.intro__a'), 0.2, {scale: 1, alpha: 1}, {scale: 0, alpha: 0, delay: 3})

	.fromTo($('.intro__b img').eq(0), 0.5, {alpha: 0, scale: 0}, {alpha:1, scale:1.2}, "-=0.2")
	.fromTo($('.intro__b .intro__sprite'), 0.1, {alpha: 0}, {alpha: 1, delay: 0.4})
	.fromTo($('.intro__b'), 0.2, {scale: 1, alpha: 1}, {scale: 0, alpha: 0, delay: 3});

