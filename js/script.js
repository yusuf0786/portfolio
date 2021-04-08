$(function(){
	
	$("nav .button1").click(function(){
		$("#navigation .button2").show();
		$("#navigation .button1").hide();
		$("#navigation .respul").show(0500);
	});
	
	$("nav .button2").click(function(){
		$("#navigation .button1").show();
		$("#navigation .button2").hide();
		$("#navigation .respul").hide();
	});
});