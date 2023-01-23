// inputs

const email = document.forms["form"]["email"];
const password = document.forms["form"]["password"];

const emailError = document.getElementById("email-error")
const passwordError = document.getElementById("pass-error")


email.addEventListener("textInput",emailVerify);
password.addEventListener("textInput",passwordVerify);




function validated(){
    // email
   if(email.value.length < 9){
    email.style.border = "1px solid red";
    emailError.style.display = "block";
    email.focus();
    return false;
   }
// password
   if(password.value.length < 9){
password.style.border = "1px solid red";
passwordError.style.display = "block";
password.focus();
return false;
   }
}

function emailVerify(){
    if(email.value.length >= 8){
        email.style.border = "1px solid green";
        emailError.style.display = "none";
        return true;
    }
}

function passwordVerify(){
    if(password.value.length >= 8){
        password.style.border = "1px solid green";
        passwordError.style.display = "none";
        return true;
    }
}


