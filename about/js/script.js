$(function(){
	
	$("nav .button1").click(function(){
		$("#navigation .button2").toggle();
		$("#navigation .button1").toggle();
		$("#navigation .respul").show(0500);
	});
	
	$("nav .button2").click(function(){
		$("#navigation .button1").toggle();
		$("#navigation .button2").toggle();
		$("#navigation .respul").hide();
	});
	
	
});