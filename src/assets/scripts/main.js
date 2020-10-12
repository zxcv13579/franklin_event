$(function(){
	//slick
	$('.people__slick').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
  		mobilefirst: true,
  		responsive: [{ 
	        breakpoint: 1200,
	        settings: {
	        	arrows: false,
	            dots: true,
	            centerMode: true,
	            centerPadding: '60px',
	            infinite: true,
	            slidesToShow: 1,
	            slidesToScroll: 1,
	        } 
	    }]
	})



	$('.header__hamburger').on('click', function(){
		$(this).toggleClass('header__hamburger--active');
		// if($(window).scrollTop() == 0) 
		// if($(window).scrollTop() > 0){
			$('.header').removeClass('header--scroll');
			$('.logo').fadeOut(300);
		// } 
		if($(this).hasClass('header__hamburger--active')){
			TweenMax.to($('.nav'), 0.5, {className: '+=active',right: '0%'});
			
		} else {
			if($(window).scrollTop() != 0) $('.header').addClass('header--scroll')			
			TweenMax.to($('.nav'), 0.5, {className: '-=active',right: '-100%'})
			$('.logo').fadeIn(300);
		}
	})

	$('.nav__up > .nav__item').on('click', function(){
		var $itemIndex = $(this).index();
		if($itemIndex == 3 || $itemIndex == 4) return;
		TweenMax.to($('.nav'), 0.5, {className: '-=active', right: '-100%', onComplete: function(){
			$('body, html').animate({
				scrollTop: $('section').eq($itemIndex + 1).offset().top
			}, 500);
		}})
		TweenMax.to($('.header__hamburger'), 0.5, {className: '-=header__hamburger--active'}, '-=0.51');

	})

	$(window).on('scroll',function(){
		if($('.nav').hasClass('active')) return;
		// if($(this).scrollTop() > 60 ) {
			$('.header').addClass('header--scroll')
			// $('.logo').fadeIn(300);
		// } else {
			if( $(this).scrollTop() == 0 ) $('.header').removeClass('header--scroll');
		// }
	})
	var colorArr = [
		"linear-gradient(45deg, #47a43a 0%,#419836 33%,#2e6c26 66%,#22492d 100%)",
		"linear-gradient(45deg, #efaa57 0%,#ef9e42 33%,#ea8f23 66%,#d87c14 100%)",
		"linear-gradient(45deg, #2e8fd4 0%,#2780c4 33%,#1767a9 66%,#0e5495 100%)",
		"linear-gradient(45deg, #e75f81 0%,#e2486f 33%,#d52552 66%,#c32049 100%)",
		"linear-gradient(45deg, #a348b8 0%,#9641ab 33%,#7e3690 66%,#692d78 100%)"
	];
	var colorIndex = 0

	function color() {
		TweenMax.set('.kv__item',{'background-image':colorArr[colorIndex], delay:.5, onComplete:color });
		(colorIndex === 4) ? colorIndex = 0 : colorIndex++;
	}

	color();
})

