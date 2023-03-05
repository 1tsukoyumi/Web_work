//call api
//ô nhập mail trong forget pass - id = forget_mail
$("#btn_submit").click(function () {
  var data_sendmail = {};
  data_sendmail.mail = $("#input_mail").val();
  if (data_sendmail.mail.trim() == "") {
    $(".check_continue").show();
  } else {
    $(".check_continue").hide();
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
});
//ẩn thông báo khi nhập mail
$("#input_mail").on("input", function () {
  var user = $(this).val();
  if (user.trim() !== "") {
    $(".check_continue").hide();
  }
});
//captcha
function generateCaptcha() {
  // Tạo chuỗi ngẫu nhiên với 5 ký tự và số
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 5; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  // Gán chuỗi ngẫu nhiên cho ô trống
  document.getElementById("render_capcha").value = captcha;
}
var characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let captcha = "";
for (let i = 0; i < 5; i++) {
  captcha += characters.charAt(Math.floor(Math.random() * characters.length));
}
// Gán chuỗi ngẫu nhiên cho ô trống
document.getElementById("render_capcha").value = captcha;
