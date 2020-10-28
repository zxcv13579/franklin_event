(function(){
	new WOW().init();



	$(".header__hamburger").on('click', function(event) {
	    $(".nav").toggleClass("nav--active");
	    $(".header__hamburger").toggleClass("header__hamburger--close");
	    if( $(".nav").hasClass("nav--active") ) {
	        TweenMax.killTweensOf($(".nav__item"));
	        TweenMax.staggerFromTo($(".nav__item"), 0.5, {x:-50, opacity:0}, {x:0, opacity:1, ease:Power3.easeOut}, 0.05);
	    }
	    
	});


	$('.nav__item a').on('click', function(e) {
		$(".nav").toggleClass("nav--active");
	    $(".header__hamburger").toggleClass("header__hamburger--close");
		e.preventDefault();
		var el = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(el).offset().top - $('header').innerHeight() + 4
		})
	})



	var tl = new TimelineMax({paused: true});

	tl.set($('.human'), {y: $('.intro__a').offset().top})





	tl.fromTo($('.intro__a img').eq(0), 0.5, {alpha: 0, scale: 0}, {alpha:1, scale: 1.1})
		.staggerTo($('.intro__a .intro__sprite'), 0.1, {alpha: 1}, 0.8)
		.staggerTo($('.intro__a .intro__sprite'), 0.1, {alpha: 0}, 0.8, "-=0.6")
		.staggerTo($('.intro__a .intro__sprite'), 0.1, {alpha: 1}, 0.8, "+=0.2")
		.staggerTo($('.intro__a .intro__sprite'), 0.1, {alpha: 0}, 0.8, "-=0.6")
		.fromTo($('.intro__a'), 0.2, {scale: 1, alpha: 1}, {scale: 0, alpha: 0})

		.fromTo($('.intro__b img').eq(0), 0.5, {alpha: 0, scale: 0}, {alpha:1, scale: 1.1}, "-=0.2")

		.fromTo($('.intro__b .intro__sprite').eq(0), 0.1, {alpha: 0}, {alpha: 1})
		.fromTo($('.intro__b .intro__sprite').eq(1), 0.1, {alpha: 0}, {alpha: 1, delay: 0.6})
		.fromTo($('.intro__b .intro__sprite').eq(1), 0.1, {alpha: 1}, {alpha: 0, delay: 0.6})
		.fromTo($('.intro__b .intro__sprite').eq(1), 0.1, {alpha: 0}, {alpha: 1, delay: 0.6})
		.fromTo($('.intro__b'), 0.2, {scale: 1, alpha: 1}, {scale: 0, alpha: 0})
		.fromTo($('.human'), 0.5, {scale: 0, alpha: 0}, {scale: 1.3, alpha: 1})
		.to($('.human'), 0.5, {scale: 1, y: 120, delay: 2})
		.add([
			TweenMax.fromTo($('main'), 0.2, {alpha: 0, y: 120}, {alpha: 1, y: 0}),
			TweenMax.fromTo($('header'), 0.2, {top: "-70px"}, { top: "0px"})
		], "-=0.2")
		.fromTo($('.fixed'), 0.5, {alpha: 0}, {alpha: 1})
		.set($('body'), {overflow: "auto"})


	$(window).on('load', function() {
		setTimeout(function() {
			$('.load').fadeOut();
			tl.play();
		}, 3000)
	})




	var controller = new ScrollMagic.Controller();
	var wp = new TimelineMax()
		.add([
			TweenMax.to($('#regular .coin').eq(0).find('div'), 0.5, {y: 300}),
			TweenMax.to($('#regular .coin').eq(1).find('div'), 0.8, {y: 200}),
			TweenMax.to($('#regular .coin').eq(2).find('div'), 0.4, {y: -120})
		])

	var scene = new ScrollMagic.Scene({
		triggerElement: '#regular',
		duration: $('#regular').height() - 50

	})
	.setTween(wp
		)
	// .addIndicators('container')
	.addTo(controller)






})()