const ipn = document.querySelector(".input-pass");
const btn = document.querySelector(".show-btn");

// ẩn hiện pass
btn.addEventListener("click", function () {
  const currentType = ipn.getAttribute("type");
  ipn.setAttribute("type", currentType === "password" ? "text" : "password");
});

//bắt lỗi đăng nhập
$("#btn_login").click(function () {
  var dataUserLogin = {};
  dataUserLogin.mail = $("#login_mail").val(); //ô nhập mail login - id = login_mail
  dataUserLogin.pass = $("#login_pass").val(); //ô nhập pass login - id = login_pass
  $.ajax({
    url: "https://gamenation-vn.onrender.com/auth/login/1",
    type: "POST",
    data: dataUserLogin,
    success: function (result) {
      console.log(result);
      if (result == "massage:true") {
        window.location.href = "text.html";
      } else if (result == "massage:fasle") {
        $(".er").css('display', 'block');
      } else {
        $(".er").css('display', 'none');
      }
    },
  });
});