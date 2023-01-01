const form = document.getElementById('form');
const password = document.getElementById('psw');
const password2 = document.getElementById('repasswd');
const email = document.getElementById('Email');
const _username = document.getElementById('Username');
    form.addEventListener('submit', e=>{
  e.preventDefault();
  checkInputs();
})

function checkInputs(){
  const pswvalue = password.value.trim();
  if(pswvalue === ' ') {
    setErrorFor(password ,'Error');
  }
  else{
    setSuccessFor(password);
  }
  if(password2.value === ' ') {
    setErrorFor(password2 ,'Error');
  } else if(password.value!== password2.value) {
    setErrorFor(password2 ,'NO Matching ');
  }
  else{
    setSuccessFor(password2);
  }
}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('p');
	formControl.className = 'passError';
	small.innerText;
}
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if(email.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.text1.focus();
  return (true);
}
  else
{
    alert("You have entered an invalid email address!");
    return (false);
}
}
    function verifyPassword() {  
  var password2 = document.getElementById("repasswd").value;   
  if(pw == " ") {  
    document.getElementById("message").innerText = "Fill the password please!";
    return false;    
  }   
  if(password2.value == password.value ) {  
    document.getElementById("message").innerText = "Not the Same !";
    return false;    
  }  
 }
function Password(){
  var pw = document.getElementById("psw");
   if(pw.value ==" "){
   document.innerText("small")= "Fill your Password";
   return( false );  }
  if(pw.length < 8){
  document.innerText("small")= "Fill your Password";
return(false);
}
}
function Register(){
 a.href= "file:///C:/Users/hp/Desktop/Le%20Projet/index.html";
}
  