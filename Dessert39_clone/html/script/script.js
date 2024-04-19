// 헤더 스크롤 이벤트
const top_header = document.querySelector("#header #header_bg");
document.addEventListener("scroll", () => {
	if (window.pageYOffset > 20) top_header.classList.add("active");
	else top_header.classList.remove("active");	
})

// 고정 메뉴 스크롤 이벤트
const fixed_menu = document.querySelector("#fixed_menu");

function getScrollPer() { // 현재 스크롤 위치 퍼센트 값 구하기
	// (현재 스크롤 된 값 + 현재 보여지는 viewport 높이) / 현재 문서의 전체 높이 * 100
	return (window.scrollY + window.innerHeight) / document.body.clientHeight * 100;
}
document.addEventListener("scroll", () => {
	const currentPer = getScrollPer();
	if (currentPer > 20 && currentPer < 95) fixed_menu.classList.add("active");
	else fixed_menu.classList.remove("active");	
})

// 고정 메뉴 top 버튼
$("#fixed_menu ul li button").click(function() {
	$('html, body').animate({scrollTop:0}, 300);
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
		el: '#slide_banner .pagination-circle',
		clickable: true,
	},
	navigation: {
		nextEl: '#slide_banner .swiper-button-next',
		prevEl: '#slide_banner .swiper-button-prev',
	},
	effect: 'fade',
	speed: 1000
});
// 메인 슬라이드 fraction 스와이퍼 연동
var swiper_slide_num = new Swiper('#slide_banner .swiper-container', {
	loop: true,
	effect: "fade",
	pagination: {
		el: '#slide_banner .pagination-num',
		type: "fraction"
	},
})
swiper1.controller.control = swiper_slide_num;


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

// 인트로 섹션 mouseover 이벤트
$("#intro .intro_wrap .txt_box a").hover(function() {
	$(this).parent().siblings().find("img").addClass("active");
}, function() {
	$(this).parent().siblings().find("img").removeClass("active");
})

// 인테리어 섹션 스와이퍼
var swiper5 = new Swiper('#interior .swiper-container', {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: '#interior .swiper-pagination',
		type: 'fraction',
		formatFractionCurrent: function (number) {
    return '0' + number;
		},
		formatFractionTotal: function (number) {
    return '0' + number;
		}
		
	},
	
	navigation: {
		nextEl: '#interior .swiper-button-next',
		prevEl: '#interior .swiper-button-prev',
	},
	effect: 'fade',
	speed: 500
});

// 이벤트 뉴스 스와이퍼
var swiper6 = new Swiper('#event .swiper-container', {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	slidesPerView: 'auto',
	spaceBetween: 35,
	loop: true,
	centeredSlides: true,
	
	navigation: {
		nextEl: '#event .swiper-button-next',
		prevEl: '#event .swiper-button-prev',
	},
	effect: 'slide',
	speed: 500
});

// 신규 오픈 매장 스와이퍼
var swiper7 = new Swiper('#new_store .swiper-container', {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	slidesPerView: 'auto',
	spaceBetween: 20,
	loop: true,
	effect: 'slide',
	speed: 500
});

// 인스타그램 스와이퍼
var swiper8 = new Swiper('#insta .swiper-container', {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	slidesPerView: 'auto',
	spaceBetween: 30,
	loop: true,
	
	pagination: {
		el: '#insta .swiper-pagination',
		type: 'progressbar',
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