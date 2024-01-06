let emails = [];
let userpassword = [];
let emailInput = document.querySelector(".emailInput");
let subbtn = document.querySelector(".createAC");

// Initialize the button as disabled
subbtn.disabled = true;

if (localStorage.getItem('storedEmails')) {
  emails = JSON.parse(localStorage.getItem('storedEmails'));
}

if (localStorage.getItem('storedPassword')) {
  userpassword = JSON.parse(localStorage.getItem('storedPassword'));
}

subbtn.addEventListener("click", (event) => {
  event.preventDefault();
  let inputVal = emailInput.value;
  emails.push(inputVal);
  pass();
  
  localStorage.setItem('storedEmails', JSON.stringify(emails));
});

let password = document.querySelector(".password");
let confpassword = document.querySelector(".confpassword");
let passValue;


emailInput.addEventListener("input", validateInputs);
password.addEventListener("input", validateInputs);
confpassword.addEventListener("input", validateInputs);

function validateInputs() {

  subbtn.disabled = !(emailInput.value.trim() && password.value.trim() && confpassword.value.trim());
}

function pass() {
  if (password.value === confpassword.value) {
    strpssword();
    // Redirect only if password conditions are met
    window.location.href = './index.html';
  } else {
    alert("Passwords do not match.");
  }
}

function strpssword() {
  userpassword.push(password.value);
  localStorage.setItem('storedPassword', JSON.stringify(userpassword));
}

// Uncomment the following lines if you want to clear the arrays on each load
// emails = [];
// userpassword = [];
console.log(emails)