// 헤더 스크롤 이벤트
const top_header = document.querySelector("#header #header_bg");
document.addEventListener("scroll", () => {
	if (window.pageYOffset > 20) top_header.classList.add("active");
	else top_header.classList.remove("active");	
})

// #eco 탭 메뉴 클릭 이벤트
function ecoBtn(e){
	$('#eco .story-box .eco_tab_wrap>ul>li').removeClass('on');
	$('#eco .story-box .eco_tab_wrap>ul>li').eq(e).addClass('on');
	
	$('#eco .story-box ul.eco_tabs li button').removeClass('on');
	$('#eco .story-box ul.eco_tabs li').eq(e).children('button').addClass('on');
}

// 메인슬라이드 스와이퍼
var swiper1 = new Swiper('#slide_banner .swiper-container', {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: '#slide_banner .swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '#slide_banner .swiper-button-next',
		prevEl: '#slide_banner .swiper-button-prev',
	},
	effect: 'fade',
	speed: 1000
});

// 섹션 tab4 스와이퍼
var swiper2 = new Swiper('.venture_tea .swiper-container', {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: '.venture_tea .swiper-pagination',
		clickable: true,
	},
	effect: 'fade',
	speed: 1000
});

// 디저트 섹션 스와이퍼
var swiper3 = new Swiper('#dessert .swiper-container', {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	slidesPerView: 4,
	loop: true,
	pagination: {
		el: '#dessert .swiper-pagination',
		type: 'progressbar',
	},
	navigation: {
		nextEl: '#dessert .swiper-button-next',
		prevEl: '#dessert .swiper-button-prev',
	},
	effect: 'slide',
	speed: 500
});

// 음료 섹션 스와이퍼
var swiper4 = new Swiper('#beverage .swiper-container', {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	slidesPerView: 4,
	loop: true,
	pagination: {
		el: '#beverage .swiper-pagination',
		type: 'progressbar',
	},
	navigation: {
		nextEl: '#beverage .swiper-button-next',
		prevEl: '#beverage .swiper-button-prev',
	},
	effect: 'slide',
	speed: 500
});



//$("#eco .story-box ul.eco_tabs li:nth-of-type(1) button").click(function() {
//	$("#eco .story-box .eco_tab1").css("display", "flex");
//	$("#eco .story-box .eco_tab2").css("display", "none");
//	$("#eco .story-box .eco_tab3").css("display", "none");
//	$("#eco .story-box .eco_tab4").css("display", "none");
//	$(this).css("background", "var(--color-main)");
//	$(this).css("color", "#fff");
//	$("#eco .story-box ul.eco_tabs li:not(:nth-of-type(1)) button").css("background", "#fff");
//	$("#eco .story-box ul.eco_tabs li:not(:nth-of-type(1)) button").css("color", "inherit");
//	$("#eco .story-box ul.eco_tabs li:not(:nth-of-type(1)) button").css("color", "inherit");
//	
//})
//$("#eco .story-box ul.eco_tabs li:nth-of-type(2) button").click(function() {
//	$("#eco .story-box .eco_tab1").css("display", "none");
//	$("#eco .story-box .eco_tab2").css("display", "flex");
//	$("#eco .story-box .eco_tab3").css("display", "none");
//	$("#eco .story-box .eco_tab4").css("display", "none");
//	$(this).css("background", "var(--color-main)");
//	$(this).css("color", "#fff");
//	$("#eco .story-box ul.eco_tabs li:not(:nth-of-type(2)) button").css("background", "#fff");
//	$("#eco .story-box ul.eco_tabs li:not(:nth-of-type(2)) button").css("color", "inherit");
//})
//$("#eco .story-box ul.eco_tabs li:nth-of-type(3) button").click(function() {
//	$("#eco .story-box .eco_tab1").css("display", "none");
//	$("#eco .story-box .eco_tab2").css("display", "none");
//	$("#eco .story-box .eco_tab3").css("display", "flex");
//	$("#eco .story-box .eco_tab4").css("display", "none");
//	$(this).css("background", "var(--color-main)");
//	$(this).css("color", "#fff");
//	$("#eco .story-box ul.eco_tabs li:not(:nth-of-type(3)) button").css("background", "#fff");
//	$("#eco .story-box ul.eco_tabs li:not(:nth-of-type(3)) button").css("color", "inherit");
//})
//$("#eco .story-box ul.eco_tabs li:nth-of-type(4) button").click(function() {
//	$("#eco .story-box .eco_tab1").css("display", "none");
//	$("#eco .story-box .eco_tab2").css("display", "none");
//	$("#eco .story-box .eco_tab3").css("display", "none");
//	$("#eco .story-box .eco_tab4").css("display", "flex");
//	$(this).css("background", "var(--color-main)");
//	$(this).css("color", "#fff");
//	$("#eco .story-box ul.eco_tabs li:not(:nth-of-type(4)) button").css("background", "#fff");
//	$("#eco .story-box ul.eco_tabs li:not(:nth-of-type(4)) button").css("color", "inherit");
//})