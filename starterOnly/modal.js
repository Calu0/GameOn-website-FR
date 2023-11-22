function editNav() {
  if (navBar.className === "topnav") {
    navBar.className += " responsive";
  } else {
    navBar.className = "topnav";
  }
}

// close menu event when click outside
window.onclick = function (event) {
  var x = document.getElementById("myTopnav");
  if (!event.target.closest('#myTopnav') && x.className === "topnav responsive") {
    x.className = "topnav";
  }
};

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const navBar = document.querySelector("#myTopnav");
const form = document.querySelector("form");
const submitBtn = document.querySelector(".btn-submit");
const confirmationMessage = document.querySelector(".confirmation");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const date = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const location1 = document.querySelector("#location1");
const location2 = document.querySelector("#location2");
const location3 = document.querySelector("#location3");
const location4 = document.querySelector("#location4");
const location5 = document.querySelector("#location5");
const location6 = document.querySelector("#location6");
const conditions = document.querySelector("#checkbox1");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// show confirmation message when form is submitted for 2.5 secondes
function showConfirmationMessage() {
  confirmationMessage.style.display = "flex";
  setTimeout(() => { confirmationMessage.style.display = "none"; }, 2500);
}


function checkInputLength(input) {
  console.log(input.value)
  if (input.value.length < 2) {
    input.parentElement.setAttribute("data-error-visible", "true");
    input.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus.");
    return false;
  } else {
    input.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function checkEmail() {
  if (email.value == "" || !validateEmail(email.value)) {
    email.parentElement.setAttribute("data-error-visible", "true");
    email.parentElement.setAttribute("data-error", "Veuillez entrer une adresse email valide.");
    return false;
  } else {
    email.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

function checkDate() {
  if (date.value == "") {
    date.parentElement.setAttribute("data-error-visible", "true");
    date.parentElement.setAttribute("data-error", "Veuillez entrer votre date de naissance.");
    return false;
  } else {
    date.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}


function checkQuantity() {
  if (quantity.value == "") {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    quantity.parentElement.setAttribute("data-error", "Veuillez entrer un nombre.");
    return false;
  } else {
    quantity.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

function checkLocation() {
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    location1.parentElement.setAttribute("data-error-visible", "true");
    location1.parentElement.setAttribute("data-error", "Veuillez choisir une ville.");
    return false;
  } else {
    location1.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

function checkConditions() {
  if (!conditions.checked) {
    conditions.parentElement.setAttribute("data-error-visible", "true");
    conditions.parentElement.setAttribute("data-error", "Veuillez accepter les conditions d'utilisation.");
    return false;
  } else {
    conditions.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

function checkForm() {
  if (checkInputLength(firstName) && checkInputLength(lastName) && checkEmail() && checkDate() && checkQuantity() && checkLocation() && checkConditions()) {
    return true;
  } else {
    return false;
  }
}

// check if the form is valid when submit button is clicked

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (checkForm()) {
    form.reset();
    closeModal();
    showConfirmationMessage();
  }
});











