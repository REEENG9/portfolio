// JavaScript Document

// #eco 탭 메뉴 클릭 이벤트
function ecoBtn(e){
	$('#eco .story-box>div').css("display", "none");
	$('#eco .story-box>div').eq(e).css("display", "flex");
	
	$('#eco .story-box ul.eco_tabs li button').removeClass('on');
	$('#eco .story-box ul.eco_tabs li').eq(e).children('button').addClass('on');
}

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