var send_wait = 60;//等待60秒
var is_sengding = false;//标志位
$(function () {
  $("#send_code_btn").click(function () {
    //是否发送中  是，直接返回
    if (is_sengding === true) {
      return false;
    }
    //否  判断是否合法手机号码
    var tel = $(".input-phone #tel").val();//获取input的值
    if (/^1[123456789]\d{9}$/.test(tel)) {
      is_sengding = true;
      cutDown();
    } else {
      alert("请输入正确的手机号码");
    }
	
    //发送AJAX
    //倒计时
  });
});

function cutDown() {
  var timer = setInterval(function () {
    $("#send_code_btn").text(send_wait + "秒");
    send_wait--;
    if (send_wait == 0) {
      $("#send_code_btn").text("发送验证码");
      is_sengding = false;
      send_wait = 60;
      clearInterval(timer);
    }
  }, 1000);
}
function loginMethod() {
  var tel = document.getElementById("tel").value;
  var checkCode = document.getElementById("checkCode").value;
  var pas = document.getElementById("pas").value;
  if (tel === '') {
    alert("手机号码未填写");
    return;
  }
  if (checkCode === '') {
    alert("请添加验证码");
    return;
  }
  if (pas === '') {
    alert("密码未填写");
    return;
  }
  if (!document.getElementById("agree").checked) {
    alert("请勾选同意");
    return;
  }
  window.location.href = 'personal.html'
}
new Vue({
  el: '.input-password',
  data: {
    isShow: true,
    seen: "",
    no_seen: "display: none;",
    kind: "password"
  },
  methods: {
    showPsd(mark) {
      this.isShow = mark
    }
  }
});