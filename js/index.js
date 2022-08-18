$('.topt').click(function() {
	$('.top').slideUp(2000, function() {});
})
$("#x1").hide();
$("#x2").hide();
$(".tab1").hide();
$(".tab2").hide();
$('#index1').click(function() {
	window.location.href="./index.html"
})
$('#index2').click(function() {
	window.location.href="./index.html"
})
$('#index3').click(function() {
	window.location.href="./index.html"
})
$('#index4').click(function() {
	window.location.href="./loginByCode.html"
})
$('#c').click(function() {
	$("#x").show();
	$("#x1").hide();
	$("#x2").hide();
	$(".tab").show();
	$(".tab1").hide();
	$(".tab2").hide();
})
$('#c1').click(function() {
	$("#x1").show();
	$("#x").hide();
	$("#x2").hide();
	$(".tab1").show();
	$(".tab").hide();
	$(".tab2").hide();
})
$('#c2').click(function() {
	$("#x2").show();
	$("#x1").hide();
	$("#x").hide();
	$(".tab2").show();
	$(".tab1").hide();
	$(".tab").hide();
})


function AutoScroll(obj) {
	$(obj).find("ul:first").animate({
		marginTop: "-100px"
	}, 500, function() {
		$(this).css({
			marginTop: "0px"
		}).find("li:first").appendTo(this);
	});
}
$(document).ready(function() {
	setInterval('AutoScroll("#s1")', 3000);
});
var mySwiper = new Swiper('#case1', {
	autoplay: true, //可选选项，自动滑动
	initialSlide: 1, //默认显示第二张图片索引从0开始
	speed: 2000, //设置过度时间
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
		hide: true,
	},
});
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth >= 360) {
				docEl.style.fontSize = '20px';
			} else {
				docEl.style.fontSize = 20 * (clientWidth / 360) + 'px';
			}
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
