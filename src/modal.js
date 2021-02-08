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
const closeModalBtn = document.querySelectorAll(".close-action");
const reserveForm = document.querySelector("#reserve-form");
const succesModal = document.querySelector("#succes-modal");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  succesModal.style.display = "none";
  reserveForm.style.display = "block";
}

/**
 * close modal event
 */
closeModalBtn.forEach((elt) => elt.addEventListener("click", closeModal));

/**
 * close modal form
 */
function closeModal() {
  modalbg.style.display = "none";
}

/**
 * validate firstName have at least 2 caracters
 * @returns {boolean}
 */
function validateFirstName() {
  const firstNameElt = document.querySelector("#first");
  const firstName = firstNameElt.value;
  const firstNameError = document.querySelector("#error-firstName");
  if (firstName.length >= 2 ) {
    firstNameError.innerHTML=""
    return true;
  } else {
     firstNameError.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    return false;
  }
}

/**
 * validate lastName have at least 2 caracters
 * @returns {boolean}
 */
function validateLastName() {
  const lastNameElt = document.querySelector("#last");
  const lastName = lastNameElt.value;
  const lastNameError = document.querySelector("#error-lastName");
  if (lastName.length >= 2) {
    lastNameError.innerHTML=""
    return true;
  } else {
    lastNameError.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom."
    return false;
  }
}

/**
 * validate email format
 * @returns {boolean}
 */
function validateEmail() {
  const mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/;
  const mail = document.querySelector("#email");
  const mailError = document.querySelector("#error-email");
  if (mail.value.match(mailFormat)) {
    mailError.innerHTML=""
    return true;
  } else {
     mailError.innerHTML="Veuillez vérifier l'adresse mail."
    return false;
  }
}

/**
 * validate date format
 * @returns {boolean}
 */
function validateBirthdate() {
  const date = document.querySelector("#birthdate");
  const dateError = document.querySelector("#error-birthdate");
  if (date.value === "") {
     dateError.innerHTML="Vous devez entrer votre date de naissance."
    return false;
  } else {
    dateError.innerHTML=""
    return true;
  }
}

/**
 * validate is a number
 * @returns {boolean}
 */
function validateTournament() {
  const tournament = document.querySelector("#quantity");
  const parsed = parseInt(tournament.value, 10);
  const tournamentError = document.querySelector("#error-number");
  if (isNaN(parsed)) {
     tournamentError.innerHTML="Vous devez donner un nombre."
    return false;
  } else {
    tournamentError.innerHTML=""
    return true;
  }
}

/**
 * validate location is checked
 * @returns {boolean}
 */
function validateLocation() {
  let isChecked = false;
  const locations = document.querySelectorAll(".location-checkbox");
  const locationsError = document.querySelector("#error-location");
  locations.forEach((locationInput) => {
    if (locationInput.checked) {
      locationsError.innerHTML=""
      isChecked = true;
    }
  })
  if (isChecked === false) {
     locationsError.innerHTML="Vous devez choisir une option."
  }
  return isChecked;
}

/**
 * validate terms is checked
 * @returns {boolean}
 */
function validateTerms() {
  const termsCheckBox = document.querySelector("#checkbox1");
  const termsError = document.querySelector("#error-terms");
  if (termsCheckBox.checked) {
    termsError.innerHTML=""
    return true;
  } else {
     termsError.innerHTML="Vous devez vérifier que vous acceptez les termes et conditions."
    return false;
  }
}

/**
 * validate form inputs
 * @returns {boolean}
 */
function validate() {
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isDateValid = validateBirthdate();
  const isTournamentValid = validateTournament();
  const isLocationChecked = validateLocation();
  const isTermsChecked = validateTerms();
  if (isFirstNameValid === true && isLastNameValid === true && isEmailValid === true && isDateValid === true && isTournamentValid === true && isLocationChecked === true && isTermsChecked === true) {
    reserveForm.style.display = "none";
    succesModal.style.display = "block";
    reserveForm.reset();
  }
  return false;
}