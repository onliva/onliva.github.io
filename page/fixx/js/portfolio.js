$(function(){

	// scroll to #start
	var pos = $("#start").offset().top;
	// console.log("pos:"+pos);

	$(".toStart").click(function(){
		$("body,html").animate({scrollTop: pos},800);
	})
	//scroll to top
	if($(".btn-top").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$(".btn-top").show()
			} else {
				$(".btn-top").hide()
			}
		});
		$(".btn-top").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}

	// hide intro
	$(window).scroll(function(){
		if ($(window).scrollTop() > pos/3) {
			$(".intro").fadeOut();
		}
		else {
			$(".intro").fadeIn();
		}
	})
	// debounce
	function debounce(func, wait) {
		var timeout;
		return function() {
			var context = this,
			args = arguments;
			// console.log("this:"+this+"\narguments:"+arguments);
			var executeFunction = function() {
				func.apply(context, args);
			};
			clearTimeout(timeout);
			timeout = setTimeout(executeFunction, wait);
		};
	};
	
	// fix nav pos correct even resize every 0.5s resize
	var handleResize = debounce(function () {
		$('#start').removeClass('nav-fixed').next().css('padding-top','0'); // fix bug resize when nav already fixed 
		pos = $("#start").offset().top;
		// console.log("newpos:"+pos);
	}, 500);
	
	//  fix nav 
	$(window).on('resize', handleResize);
	$(window).scroll(function(){
		if ($(window).scrollTop() == pos){
			$(".social").css({'border':'none','padding-top':'5px'})
		}
		else if($(window).scrollTop() > pos) {
			$('#start').addClass('nav-fixed').css('top','0').next().css('padding-top','50px');
			$(".social").css({'border':'none','padding-top':'5px'})
		}
		else {
			$('#start').removeClass('nav-fixed').next().css('padding-top','0');
			$(".social").css({'border-left':'1px solid rgba(128, 128, 128, 0.6','padding-top':'4px'})
		}
	});

	//bars -show nav-mobile
	$(".bars").click(function() {
		$(".nav-mobile").toggleClass("nav-mb-show");
		$(".overlay").toggle();
	});
	$(".overlay").click(function(){
		$(".nav-mobile").toggleClass("nav-mb-show");
		$(".overlay").hide();
	});

})