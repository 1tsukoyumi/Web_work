// ẩn hiện pass
function checkpass() {
  var mk = document.getElementById("change_pass1");
  mk.type = mk.type === "password" ? "text" : "password";
}
function checkpass1() {
  var mk = document.getElementById("change_pass2");
  mk.type = mk.type === "password" ? "text" : "password";
}
function cleardata() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
  }
  sessionStorage.clear();
}
//check lỗi
function checkValues() {
  // Lấy giá trị của 2 ô input
  var value1 = document.getElementById("change_pass1").value;
  var value2 = document.getElementById("change_pass2").value;

  // Kiểm tra xem giá trị của 2 ô input có giống nhau hay không
  if (value1 == value2) {
    $(".change_continue1").hide();
    $(".input-otp").removeAttr("disabled");
    $("#btn_submit").click(function () {
      var data_update = {};
      data_update.newpass = $("#change_pass1").val(); //ô nhập mat khau moi - id = update_pass
      data_update.otp = $("#input_otp").val(); //ô nhập otp - id = check_otp
      $.ajax({
        url: "https://gamenation-vn.onrender.com/auth/forgetpass/2",
        type: "POST",
        data: data_update,
        success: function (result, status, xhr) {
          if (xhr.status == 200) {
            $(".er").hide();
            $(".change_continue2").css({ display: "block", color: "#7CFC04",  });
            setTimeout(function () {
              window.location.replace("../../pages/login&register_pages/login.html");
            }, 2500);
            cleardata();
          }
        },
        error: function (xhr, status) {
          if (xhr.status == 403) {
            $(".er").show();
          }
        },
      });
    });
  } else {
    $(".change_continue1").show();
    $(".input-otp").attr("disabled", true);
  }
}
$("#btn_back").click(function () {
  cleardata();
  window.location.replace("../login/login.html");
});
