// 헤더 스크롤 이벤트
// (https://tlsdnjs12.tistory.com/63)
const top_header = document.querySelector("#header");
document.addEventListener("scroll", () => {
	if (window.pageYOffset > 20) top_header.classList.add("active");
	else top_header.classList.remove("active");	
})

// 모바일 헤더 메뉴
$("#header button").click(function() {
	$("#header .menu").addClass("on");
	$("#header .gnb_bg").addClass("on");
	$("body").css("overflow", "hidden");

})
$("#header .menu button").click(function() {
	$("#header .menu").removeClass("on");
	$("#header .gnb_bg").removeClass("on");
	$("body").css("overflow", "auto");
})


// 메인 슬라이드 스와이퍼
var swiper1 = new Swiper('#slide .swiper-container', {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	slidesPerView:1,
	loop:true,
	pagination: {
		el: '#slide .swiper-pagination',
		clickable: true,
	},
	effect: 'slide',
	speed: 500
});

// 뉴스 목록 스와이퍼
var swiper2 = new Swiper('#news .swiper-container', {
	slidesPerView: 'auto',
	spaceBetween: 10,
	centeredSlides: true,

	loop: true,	// 무한 루프 적용
	effect: 'slide', // slide, fade, cube, coverflow, flip
	speed: 500
});

// in story 스와이퍼
var swiper3 = new Swiper('#story .swiper-container', {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	slidesPerView:1,
	loop:true,
	pagination: {
		el: '#story .swiper-pagination',
		clickable: true,
	},
	effect: 'slide',
	speed: 500
});

// Contact 탭 메뉴
$("#contact .cont_btn button:nth-of-type(1)").click(function() {
	$("#contact").removeClass("active");
	$(this).siblings().removeClass("on");
	$(this).addClass("on");
	$("#contact .cont_contents .gwangju").removeClass("on");
	$("#contact .cont_contents .chuncheon").addClass("on");
})
$("#contact .cont_btn button:nth-of-type(2)").click(function() {
	$("#contact").addClass("active");
	$(this).siblings().removeClass("on");
	$(this).addClass("on");
	$("#contact .cont_contents .chuncheon").removeClass("on");
	$("#contact .cont_contents .gwangju").addClass("on");
})