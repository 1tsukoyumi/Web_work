const ipn = document.querySelector(".input-pass");
const btn = document.querySelector(".show-btn");

// ẩn hiện pass
btn.addEventListener("click", function () {
  const currentType = ipn.getAttribute("type");
  ipn.setAttribute("type", currentType === "password" ? "text" : "password");
});

//bắt lỗi đăng nhập
$("#btn_login").click(function (event) {
  var dataUserLogin = {};
  dataUserLogin.mail = $("#login_mail").val(); //ô nhập mail login - id = login_mail
  dataUserLogin.pass = $("#login_pass").val(); //ô nhập pass login - id = login_pass

  if (dataUserLogin.mail.trim() == '' || dataUserLogin.pass.trim() == '') {
    $(".login_continue").show();
  } else {
    $.ajax({
      url: "https://gamenation-vn.onrender.com/auth/login/1",
      type: "POST",
      data: dataUserLogin,
      success: function (result, status, xhr) {
        if (xhr.status == 200) {
          window.location.replace("#");
        }
      },
      error: function (xhr, status) {
        if (xhr.status == 403) {
          $(".er").show();
          $(".login_continue").css('display', 'none');
        }
      },
    });
  }
});