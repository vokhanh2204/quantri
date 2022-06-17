var username = document.forms['form']['username'];
var taikhoan = document.forms['form']['taikhoan'];
var password = document.forms['form']['password'];
var re_password = document.forms['form']['re_password'];

var username_error = document.getElementById('username_error');
var taikhoan_error = document.getElementById('taikhoan_error');
var password_error = document.getElementById('password_error');
var re_password_error = document.getElementById('re_password_error');

username.addEventListener('textInput', username_Verify);
taikhoan.addEventListener('textInput', taikhoan_Verify);
password.addEventListener('textInput', password_Verify);
re_password.addEventListener('textInput', re_password_Verify);

function validated(){
    if (username.value.length < 5) {
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }
    if (taikhoan.value.length < 7) {
        taikhoan.style.border = "1px solid red";
        taikhoan_error.style.display = "block";
        taikhoan.focus();
        return false;
    }
    if (password.value.length < 7) {
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }
    if (re_password.value.length < 7) {
        re_password.style.border = "1px solid red";
        re_password_error.style.display = "block";
        re_password.focus();
        return false;
    }
}

function username_Verify(){
    if (username.value.length >= 8) {
        username.style.border = "1px solid silver";
        username_error.style.display = "none";
        return true;
    }
}
function email_Verify(){
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function password_Verify(){
    if (password.value.length > 5) {
        password.style.border = "1px solid silver";
        password_error.style.display = "none";
        return true;
    }
}
function re_password_Verify(){
    if (re_password.value.length > 5) {
        re_password.style.border = "1px solid silver";
        re_password_error.style.display = "none";
        return true;
    }
}
