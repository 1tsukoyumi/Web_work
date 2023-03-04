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
  var data_login = {};
  data_login.user = $("#input-user").val();
  data_login.pass = $("#input-pass").val();

  //gửi yêu cầu đến api
  $.ajax({
    URL: '#',
    type: 'post',
    contenttype: 'application/json',
    data: JSON.stringify(data_login),
    success: function(response) {
        //đăng nhập thành công
        if (response.message === "true") {
            console.log('Đăng nhập thành công!');
        } 
        //đăng nhập thất bại
        else {
            console.error('Sai tài khoản hoặc mật khẩu');
        }
    },
    error: function(error) {
        console.error('Đăng nhập không thành công!', error);
    }
  });
});