var username = document.forms['form']['username'];
var sodienthoai = document.forms['form']['sodienthoai'];
var email = document.forms['form']['email'];

var username_error = document.getElementById('username_error');
var sodienthoai_error = document.getElementById('sodienthoai_error');
var email_error = document.getElementById('email_error');

username.addEventListener('textInput', username_Verify);
sodienthoai.addEventListener('textInput', sodienthoai_Verify);
email.addEventListener('textInput', email_Verify);

function validated(){
    if (username.value.length < 5) {
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }
    if (sodienthoai.value.length < 8) {
        sodienthoai.style.border = "1px solid red";
        sodienthoai_error.style.display = "block";
        sodienthoai.focus();
        return false;
    }
    if (email.value.length < 7) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
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
function sodienthoai_Verify(){
    if (sodienthoai.value.length > 8) {
        sodienthoai.style.border = "1px solid silver";
        sodienthoai_error.style.display = "none";
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