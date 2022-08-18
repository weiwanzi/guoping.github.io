$("#msg1").click(function(){
	console.log(111)
	$("#msg1").addClass("msg2");
	$("#msg2").removeClass("msg2");
})
$("#msg2").click(function(){
	$("#msg2").addClass("msg2");
	$("#msg1").removeClass("msg2");
})
var flag = 0
$(".edit1").click(function(){
	
	
	console.log(22222)
	if($(this).hasClass('edit2')){
		
		if(flag<=0){
			
			alert("不能再减了")
			return false;
		}else{
			$(this).removeClass('edit2')
			$(this).addClass('edit3')
			flag = flag - 1;
		}
		console.log(flag)
	}else{
		
		if(flag>=6){
			alert("只能选择七个")
			return false;
		}else{
			$(this).removeClass('edit3')
			$(this).addClass('edit2')
			flag = flag + 1;
		}
		console.log(flag)
	}
})