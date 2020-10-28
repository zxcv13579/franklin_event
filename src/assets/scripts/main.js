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
	});

	$('#goToMeal').on('click', function() {
		$('html, body').animate({
			scrollTop: $('#meal').offset().top - $('header').innerHeight() + 4
		})
	})



	var tl = new TimelineMax({paused: true});

	tl.set($('.human'), {y: $('.intro__a').offset().top})





	tl.fromTo($('.intro__a img, .intro__a .intro__loop'), 0.5, {alpha: 0, scale: 0}, {alpha:1, scale: 1.1})
		
		.fromTo($('.intro__a'), 0.2, {scale: 1, alpha: 1}, {scale: 0, alpha: 0, delay: 2})

		.fromTo($('.intro__b img, .intro__b .intro__loop'), 0.5, {alpha: 0, scale: 0}, {alpha:1, scale: 1.1}, "-=0.2")

		
		.fromTo($('.intro__b'), 0.2, {scale: 1, alpha: 1}, {scale: 0, alpha: 0, delay: 2})
		.fromTo($('.human'), 0.5, {scale: 0, alpha: 0}, {scale: 1.3, alpha: 1})
		.to($('.human'), 0.5, {scale: 1, y: 120, delay: 2})
		.add([
			TweenMax.fromTo($('main'), 0.2, {alpha: 0, y: 120}, {alpha: 1, y: 0}),
			TweenMax.fromTo($('header'), 0.2, {top: "-70px"}, { top: "0px"})
		], "-=0.2")
		.fromTo($('.fixed'), 0.5, {alpha: 0}, {alpha: 1})
		.set($('body'), {overflowY: "auto"})


	$(window).on('load', function() {
		setTimeout(function() {
			$('.load').fadeOut();
			tl.play();
		}, 1500)
	})





	var controller = new ScrollMagic.Controller();
	var wp1 = new TimelineMax()
		.add([
			TweenMax.to($('#regular .coin').eq(0).find('div'), 0.5, {y: 300}),
			TweenMax.to($('#regular .coin').eq(1).find('div'), 0.8, {y: 200}),
			TweenMax.to($('#regular .coin').eq(2).find('div'), 0.4, {y: -120})
		])

	var scene1 = new ScrollMagic.Scene({
		triggerElement: '#regular',
		duration: $('#regular').height() - 50

	})
	.setTween(wp1)
	// .addIndicators('container')
	.addTo(controller)


	var wp2 = new TimelineMax()
		.add([
			TweenMax.to($('#what .coin').eq(0).find('div'), 0.2, {y: -150}),
			TweenMax.to($('#what .coin').eq(1).find('div'), 0.8, {y: 400}),
			TweenMax.to($('#what .coin').eq(2).find('div'), 0.6, {y: -50})
		])

	var scene2 = new ScrollMagic.Scene({
		triggerElement: '#what',
		duration: $('#what').height() - 50

	})
	.setTween(wp2)
	// .addIndicators('container')
	.addTo(controller)

	var wp3 = new TimelineMax()
		.add([
			TweenMax.to($('#meal .coin').eq(0).find('div'), 0.8, {y: 150}),
			TweenMax.to($('#meal .coin').eq(1).find('div'), 0.2, {y: 200}),
			TweenMax.to($('#meal .coin').eq(2).find('div'), 0.6, {y: -350}),
			TweenMax.to($('#meal .coin').eq(4).find('div'), 0.6, {y: -200}),
			TweenMax.to($('#meal .coin').eq(5).find('div'), 0.2, {y: -550})
		])

	var scene3 = new ScrollMagic.Scene({
		triggerElement: '#meal',
		duration: $('#meal').height() - 50

	})
	.setTween(wp3)
	// .addIndicators('container')
	.addTo(controller)

	var wp4 = new TimelineMax()
		.add([
			TweenMax.to($('#online .coin').eq(0).find('div'), 0.2, {y: 300}),
			TweenMax.to($('#online .coin').eq(1).find('div'), 0.6, {y: -200}),
			TweenMax.to($('#online .coin').eq(2).find('div'), 0.4, {y: -150})
		])

	var scene4 = new ScrollMagic.Scene({
		triggerElement: '#online',
		duration: $('#online').height() - 50

	})
	.setTween(wp4)
	// .addIndicators('container')
	.addTo(controller)

	var scene5 = new ScrollMagic.Scene({
		triggerElement: '#investment',
		duration: $('#investment').height() - 50

	})
	.setTween(new TimelineMax().add([
			TweenMax.to($('#investment .coin').eq(0).find('div'), 0.4, {y: 100}),
			TweenMax.to($('#investment .coin').eq(1).find('div'), 0.6, {y: -150}),
		]))
	// .addIndicators('container')
	.addTo(controller)













})()