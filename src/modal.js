function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeModalBtn.forEach((elt) => elt.addEventListener("click", closeModal));

// close modal form on x clic
function closeModal() {
  modalbg.style.display = "none";
}

// validation email
function validateEmail() {
  const mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/;
  const mail = document.querySelector("#email");
  if (mail.value.match(mailFormat)) {
    console.log("Valid email address!");
    return true;
  }
  else {
    console.log("You have entered an invalid email address!");
    return false;
  }
}

// validation tournament
function validateTournament() {
  const tournament = document.querySelector("#quantity");
  const parsed = parseInt(tournament.value, 10);
  if (isNaN(parsed)) {
    console.log("C'est pas bon gros naze !");
  } else {
    console.log("Bravo !");
  }
}

// validation location
function validateLocation() {
  let isChecked = false;
  const locations = document.querySelectorAll(".location-checkbox");
  locations.forEach((locationInput) => {
    if (locationInput.checked) {
      isChecked = true;
    }
  })
  console.log(isChecked);
  return isChecked;
}

// validation terms
function validateTerms() {
  const termsCheckBox = document.querySelector("#checkbox1");
  console.log(termsCheckBox.checked);
  return termsCheckBox.checked;
}

// validation methods
function validate() {
  // ON RECUPERE L'ELEMENT DU DOM QUI A POUR ID FIRST ET ON LE STOCK DANS LA CONST firstNameElt
  const firstNameElt = document.querySelector("#first");
  const lastNameElt = document.querySelector("#last");
  // ON RECUPERE L'ATTRIBUT VALUE DE L'ELEMENT INPUT CONTENU DANS LA CONST firstNameElt
  const firstName = firstNameElt.value;
  const lastName = lastNameElt.value;
  if (firstName.length >= 2 && lastName.length >= 2) {
    console.log('Bravo !');
  } else {
    console.log('C\'est pas bon du tout !');
  }
  const isEmailValid = validateEmail();
  const isTournamentValid = validateTournament();
  const isLocationChecked = validateLocation();
  const isTermsChecked = validateTerms();
  // KEEP DATA FORM
  return false;
}