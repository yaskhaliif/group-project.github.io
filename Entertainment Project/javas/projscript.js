$(document).ready(function(){
	$(".menu").hide();
	$(".actitve").hide();
	$("#fade").hide();
	$(".menu-button").click(function(){
		$(".menu").animate({width: "toggle"});
		$(".menul").toggleClass("active");
		$("#fade").fadeToggle();
	});
	$("#fade").click(function(){
		$("#fade").fadeOut();
		$(".menu").animate({width:"hide"});
		$(".menul").removeClass("active")
	});
	$("#box").click(function(){
		$(".menu").animate({width: "toggle"});
		$(".menul").toggleClass("active");
		$("#fade").fadeToggle();
	});
	
});
