var storedUserIDs = JSON.parse(localStorage.getItem('storedEmails'));
var storedPasswords = JSON.parse(localStorage.getItem('storedPassword'));

let signIn = document.querySelector(".signIn");
signIn.disabled = true;  
signIn.addEventListener("click", () => {
  login();
});

let inputEmail = document.querySelector(".inputEmail");
let inputPassword = document.querySelector(".inputPassword");

inputEmail.addEventListener("input", updateButtonStatus);
inputPassword.addEventListener("input", updateButtonStatus);

function updateButtonStatus() {
  
  signIn.disabled = !(inputEmail.value.trim() && inputPassword.value.trim());
}

function login() {
  if (signIn.disabled) {
    
    return;
  }

  if (storedUserIDs.indexOf(inputEmail.value) === -1 && storedPasswords.indexOf(inputPassword.value) === -1) {
    alert("You have successfully logged in.");
  } else {
    alert("Invalid email or password.");
  }
}
console.log(storedUserIDs);
console.log(storedPasswords);

