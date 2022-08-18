function loginMethod(){
  var tel = document.getElementById("tel").value;
  var pas = document.getElementById("pas").value;

  if(tel === ''){
      alert("手机号码未填写");
      return;
  }
  if(tel.length != 11){
      alert("请填写正确的手机号码");
      return;
  }
  if(pas === ''){
      alert("密码未填写");
      return;
  }
  if(/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,16}$/.test(pas)){
      is_sengding = true;
      window.location.href='personal.html'
  }else{
      alert("请输入正确的密码,密码，6-16位，含数字，大小写字母中的俩种");
  	  return;
  }
 
  window.location.href='personal.html'
}
new Vue({
  el: '.send_code',
  data:{
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