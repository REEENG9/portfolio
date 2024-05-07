// 메인슬라이드 스와이퍼
var swiper1 = new Swiper('#slide_banner .swiper-container', {
	autoplay: {
		delay: 5000,	// 자동으로 화면 전환 5초
		disableOnInteraction: false	// 손님이 넘길 때는 오토플레이 정지
	},
	slidesPerView: 1,	// 화면에 보여주는 이미지 개수
	loop: true,	// 무한 루프 적용
	pagination: {	// 하단에 점 표시 적용
		el: '#slide_banner .swiper-pagination',
		clickable: true,
	},
	navigation: {	// 좌우 화살표 적용
		nextEl: '#slide_banner .swiper-button-next',
		prevEl: '#slide_banner .swiper-button-prev',
	},
	effect: 'slide', // slide, fade, cube, coverflow, flip
	speed: 1000
});

// event, best 영역 슬라이드 ---------------------------------------
var idx = 0; // 현재 위치
var click_S = true; // 클릭 연사 방지

function eventMove(e, num, distance) {
	arrow(e, num, distance, $('.event_menu'));
}

function bestMove(e, num, distance) {
	arrow(e, num, distance, $('.best_menu'));
}

function menuMove(e, num, distance) {
	arrow(e, num, distance, $('.menu_slide>ul'));
}

/*
* function arrow - 양쪽 화살표를 누르면 슬라이드 이동
* e : 현재 누른 화살표의 위치 (-1 : 왼쪽 / 1 : 오른쪽)
* num : 현재 슬라이드에서 보여지는 리스트 개수
* distance : 슬라이드가 움직일 때 이동해야 하는 거리
* slideSeletor : 슬라이드 영역 종류
*/
function arrow(e, num, distance, slideSeletor) { 
	var len = slideSeletor.children('li').length;
	if(click_S == true){	// 클릭 연사 방지
		click_S = false; // 바로 false로 돌린 후
		setTimeout(function(){ // setTimeout으로 시간 간격을 준 후 다시 true로 전환
			click_S = true;
		}, 500); // 0.5초간 false 상태를 유지하여 0.5초 동안은 클릭할 수 없도록 연사방지
	}
	
	idx += e; // 왼쪽 화살표, 오른쪽 화살표에 따라 idx 증감
	
	if(idx <= 0) {
		// 첫 번째 리스트에 도달하면 왼쪽 화살표 클릭 방지
		idx = 0;
		slideSeletor.parent('div').siblings('.arrow_btn').children('.left_arrow').addClass('dis');
	}
	else if(idx >= len - num) {
		// 마지막 리스트에 도달하면 오른쪽 화살표 클릭 방지 (이때 마지막에 도달하는 기준은 해당 슬라이드의 마지막 요소가 맨 오른쪽에 보일 때 이므로 보여지는 영역 만큼 차감)
		idx = len - num;
		slideSeletor.parent('div').siblings('.arrow_btn').children('.right_arrow').addClass('dis');
	}
	else {
		slideSeletor.parent('div').siblings('.arrow_btn').children('button').removeClass('dis');
	}
	
	$(slideSeletor).css('left', `${distance * idx}px`);
}
		
// youtube 영역 스와이퍼 ------------------------------------------------
var swiper2 = new Swiper('.youtube .swiper-container', {
	slidesPerView: 1,	// 화면에 보여주는 이미지 개수
	loop: true,	// 무한 루프 적용
	pagination: {	// 하단에 점 표시 적용
		el: '.youtube .swiper-pagination',
		clickable: true,
	},
	navigation: {	// 좌우 화살표 적용
		nextEl: '.youtube .swiper-button-next',
		prevEl: '.youtube .swiper-button-prev',
	},
	effect: 'slide', // slide, fade, cube, coverflow, flip
	speed: 500
});