var taikhoan = document.forms['form']['taikhoan'];
var password = document.forms['form']['password'];

var taikhoan_error = document.getElementById('taikhoan_error');
var pass_error = document.getElementById('pass_error');

taikhoan.addEventListener('textInput', taikhoan_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (taikhoan.value.length < 4) {
		taikhoan.style.border = "1px solid red";
		taikhoan_error.style.display = "block";
		taikhoan.focus();
		return false;
	}
	if (password.value.length < 5) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}
}

function taikhoan_Verify(){
	if (taikhoan.value.length >= 4) {
		taikhoan.style.border = "1px solid silver";
		taikhoan_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}


