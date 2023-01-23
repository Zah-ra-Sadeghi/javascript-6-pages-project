function sendEmail(){
  Email.send({
Host : "smtp.gmail.com",
Username : "za.sadeghi1379@gmail.com",
Password : "password",
To : 'za.sadeghi1379@gmail.com',
From : document.getElementById("email").value,
Subject : "New contact form",
Body : "Name: " + document.getElementById("name").value
+ "<br> Email: " + document.getElementById("email").value
+ "<br> Email: " + document.getElementById("phone").value
+ "<br> Email: " + document.getElementById("message").value
}).then(
message => alert("message sent successfuly")
);
}