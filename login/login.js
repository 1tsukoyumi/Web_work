const ipn = document.querySelector(".input-pass");
const btn = document.querySelector(".show-btn");

// ẩn hiện pass
btn.addEventListener("click", function () {
  const currentType = ipn.getAttribute("type");
  ipn.setAttribute("type", currentType === "password" ? "text" : "password");
});

//bắt lỗi đăng nhập
$("#btn-login").click(function () {
  //lấy thông tin user
  var data_login = {}
  data_login.user = $("#input-user").val()
  data_login.pass = $("#input-pass").val()

  //gửi yêu cầu đến api
  $.ajax({
    URL: "https://gamenation-vn.onrender.com/auth/login/1",
    type: "POST",
    data: data_login,
    success: function(result) {
        //đăng nhập thành công
        if (result == true) {
            console.log('Đăng nhập thành công!');
        } 
        //đăng nhập thất bại
        else {
            console.error('Sai tài khoản hoặc mật khẩu');
        }
    },
  });
});