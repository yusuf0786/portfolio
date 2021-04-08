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

	$("#texttocopy").hover(function(){
		$(".text a .message").show();
		$(".text a .email").hide();
	},
	function(){
		$(".text a .message").hide();
		$(".text a .email").show();
	});
});


function myFunction(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();

	alert('Copeied to clipboard yusssuf0786@gmail.com');
}