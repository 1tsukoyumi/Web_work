//vô hiệu hoá tính năng bôi đen và copy paste
document.getElementById("input_capcha").addEventListener('paste',e=>e.preventDefault()); //vô hiệu hoá paste 
document.getElementById("input_mail").addEventListener('paste',e=>e.preventDefault()); //vô hiệu hoá paste 
document.addEventListener("copy",function(evt){
  evt.clipboardData.setData('text/plain','Copying is not allowed');
  evt.preventDefault();
})
//captcha
function generateCaptcha() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Tạo chuỗi ngẫu nhiên với 5 ký tự và số
  let captcha = "";
  for (let i = 0; i < 5; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById("render_capcha").value = captcha;   // Gán chuỗi ngẫu nhiên cho ô trống

}
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let captcha = "";
for (let i = 0; i < 5; i++) {
  captcha += characters.charAt(Math.floor(Math.random() * characters.length));
}
document.getElementById("render_capcha").value = captcha; // Gán chuỗi ngẫu nhiên cho ô trống

//call api
$("#btn_submit").click(function () {
  var data_sendmail = {};
  data_sendmail.mail = $("#input_mail").val();
  dataInput_OTP = $("#input_capcha").val();
  if (data_sendmail.mail.trim() == "") {
    $(".check_continue_mail").show();
  } else {
    $(".check_continue_mail").hide();
    if(dataInput_OTP != captcha){
      $(".check_continue_otp").show();
    }else{
      $(".check_continue_otp").hide();
      $.ajax({
        url: "https://gamenation-vn.onrender.com/auth/forgetpass/1",
        type: "POST",
        data: data_sendmail,
        success: function (result, status, xhr) {
          if (xhr.status == 200) {
            window.location.replace("https://www.google.com.vn/?hl=vi");
          }
        },
        error: function (xhr, status) {
          if (xhr.status == 403) {
            $(".er").show();
          }
        },
      });
    }
  }
});
//ẩn thông báo khi nhập mail
$("#input_mail").on("input", function () {
  var user = $(this).val();
  if (user.trim() !== "") {
    $(".check_continue").hide();
  }
});

