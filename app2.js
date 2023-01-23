const form = document.getElementById("sign-up-form");
const userName = document.getElementById("username");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (event) =>{

event.preventDefault();

Validate();
});


const sendData = (userName,sRate,count) => {
    if(sRate === count){
        swal(`Hello ${userName}`,"you are registered","success")
    }
    else{
        swal("","fill the form first!!" , "")
    };
}

const SuccessMsg = (userNameVal) =>{
    let formCtrl = document.getElementsByClassName("form-control");
    var count = formCtrl.length - 1;
    for(var i = 0 ; i < formCtrl.length; i++){
        if(formCtrl[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(userNameVal,sRate,count);
        }
        else{
            return false;
        }
    }
}

const isEmail = (emailVal) =>{
    var atsymbol = emailVal.indexOf("@");
    if(atsymbol<1) return false;
    var dot = emailVal.lastIndexOf(".");
    if (dot<= atsymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}

function Validate(){
    const userNameVal = userName.value.trim();
    const lastNameVal = lastName.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    // username
if(userNameVal === ""){
setErrorMsg(userName, "firstname can not be blanck")
}else if(userNameVal.length <= 2){
setErrorMsg(userName, "min 3 char")
}else{
    setSuccessMsg(userName)
}
//lastname 
if(lastNameVal === ""){
    setErrorMsg(lastName, "lastname can not be blanck")
    }else if(lastNameVal.length <= 2){
    setErrorMsg(lastName, "min 3 char")
    }else{
        setSuccessMsg(lastName)
    }
//email

if(emailVal === ""){
    setErrorMsg(email, "email can not be blanck")
    }else if(!isEmail(emailVal)){
    setErrorMsg(email, "email is not valid!")
    }else{
        setSuccessMsg(email)
    }

// password

if(passwordVal === ""){
    setErrorMsg(password, "password can not be blanck")
    }else if(passwordVal.length <= 7){
    setErrorMsg(password, "min 8 char")
    }else{
        setSuccessMsg(password)
    }

// confirm password

if(cpasswordVal === ""){
    setErrorMsg(cpassword, "confirm password can not be blanck")
    }else if(passwordVal !==  cpasswordVal){
    setErrorMsg(cpassword, "Not Matched!")
    }else{
        setSuccessMsg(cpassword)
    }
    SuccessMsg(userNameVal);


}

function setErrorMsg(input,errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl =  input.parentElement;
    formControl.className = "form-control success";
    
}