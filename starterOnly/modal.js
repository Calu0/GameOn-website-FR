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
  setTimeout(hideConfirmationMessage, 2500);
}

// hide confirmation message after 5 secondes
function hideConfirmationMessage() {
  confirmationMessage.style.display = "none";
}

// submit form event
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showConfirmationMessage();
  closeModal();
});

// // check if the input is valid
// function isValidInput(input) {
//   return input.value.length >= input.minLength;
// }

// // check if the input is valid
// function isEmailValid(input) {
//   const regex = /\S+@\S+\.\S+/;
//   return regex.test(input.value);
// }

// // check if the input is valid
// function isBirthdateValid(input) {
//   const regex = /^\d{4}-\d{2}-\d{2}$/;
//   return regex.test(input.value);
// }

// // check if the input is valid
// function isQuantityValid(input) {
//   return input.value > 0;
// }

// // check if the input is valid
// function isLocationValid(input) {
//   return input.checked;
// }

// // check if the input is valid
// function isTosValid(input) {
//   return input.checked;
// }

// // check if the input is valid
// function isFormValid() {
//   return isValidInput(firstname) &&
//     isValidInput(lastname) &&
//     isEmailValid(email) &&
//     isBirthdateValid(birthdate) &&
//     isQuantityValid(quantity) &&
//     isLocationValid(location1) &&
//     isLocationValid(location2) &&
//     isLocationValid(location3) &&
//     isLocationValid(location4) &&
//     isLocationValid(location5) &&
//     isLocationValid(location6) &&
//     isTosValid(tos);
// }






