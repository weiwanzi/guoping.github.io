var tags_list_array = [];
var max_tags_length = 7;
$(function() {
	//自动获取已存在的标签，组成一个数组
	$(".tags_list span").each(function(index, ele) {
		//console.dir(ele)
		tags_list_array.push(ele.innerHTML); //数组的操作 ，新增元素
	})
	//每个标签单击时选中或者取消
	$(".tags_list span").click(function() {
		//最多只能选中7个
		//只针对选中
		//如果原来没有高亮的样式 那就是选中操作  选中操作要限定最多只能7个
		if (!$(this).hasClass("active")) {
			if ($(".tags_list span.active").length >= max_tags_length) {
				alert("选中个数最多只能" + max_tags_length + "个");
				return false;
			}
		}
		$(this).toggleClass("active"); //存在该类名就移除  不存在就添加类名
	});

	$("#add_new_tag").click(function() {
		//获取输入的标签名称
		var new_tag = $("#new_tag").val();
		
		if (!new_tag.trim()) {
			//把前后的空格都去掉
			alert("请输入标签名称");
			return false;
		}
		
		
		//限制最多只能7个
		if ($(".tags_list span.active").length >= max_tags_length) {
			alert("选中个数最多只能" + max_tags_length + "个");
			return false;
		}//标签名称不能重复 
		//原来已经存在的标签
		if (tags_list_array.includes(new_tag)) {

			alert("标签已存在");
			return false;
		}
		//添加并高亮新的节点
		$(".tags_list").append("<span class='active'>" + new_tag + "</span>");
		//新的元素进入数组当中
		tags_list_array.push(new_tag);
	});

	//单击保存按钮触发事件处理程序
	$("#save_tag").click(function() {

		//验证自我评价的内容不为空


		alert("保存成功")
		//执行页面跳转
		window.location.href = 'userWord.html';
		//或者  history.go(-1);


	});
});
