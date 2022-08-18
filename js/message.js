$("#x1").hide();
$('#c').click(function() {
	$("#x").show();
	$("#x1").hide();
	$(".msg-3").show();
	$(".xbk").show();
	$(".xbk1").hide();
	$(".tab").hide();
})
$('#c1').click(function() {
	$("#x1").show();
	$("#x").hide();
	$(".msg-3").hide();
	$(".tab").show();
	$(".xbk").hide();
	$(".xbk1").show();
})

function loginMethod() {
	window.location.href = 'personal.html'
}
