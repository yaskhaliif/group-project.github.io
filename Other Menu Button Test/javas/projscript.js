$(document).ready(function(){
	$(".menu").hide();
	$(".actitve").hide();
	$("#fade").hide();
	$(".menu-button").click(function(){
		$(".menu").animate({width: "toggle"});
		$(".menul").toggleClass("active");
		$("#fade").fadeToggle();
	});
});
