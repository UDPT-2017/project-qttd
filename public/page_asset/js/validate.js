function validateform() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;
    if(username =='')
    {
    	alert('ban chua nhap ten')
    }
    else if(password =='')
    {
 		alert('ban chua nhap mat khau')
    }
    else if (password.length < 8) {
    	alert('độ dài của mật khẩu lớn hơn 8 kí tự')
    }
    else if (repassword != password) {
    	alert('mat khau khong khop')
    }
    return false;

}
