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
// validation first name
function validateFirstName() {
  // ON RECUPERE L'ELEMENT DU DOM QUI A POUR ID FIRST ET ON LE STOCK DANS LA CONST firstNameElt
  const firstNameElt = document.querySelector("#first");
  // ON RECUPERE L'ATTRIBUT VALUE DE L'ELEMENT INPUT CONTENU DANS LA CONST firstNameElt
  const firstName = firstNameElt.value;
  if (firstName.length >= 2 ) {
    return true;
  } else {
    document.querySelector("#error-firstName") .innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    return false;
  }
}

// validation last name
function validateLastName() {
  const lastNameElt = document.querySelector("#last");
  const lastName = lastNameElt.value;
  if (lastName.length >= 2) {
    return true;
  } else {
    document.querySelector("#error-lastName") .innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom."
    return false;
  }
}

// validation email
function validateEmail() {
  const mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/;
  const mail = document.querySelector("#email");
  if (mail.value.match(mailFormat)) {
    return true;
  } else {
    document.querySelector("#error-email") .innerHTML="Veuillez vérifier l'adresse mail."
    return false;
  }
}

// validation birthdate
function validateBirthdate() {
  const date = document.querySelector("#birthdate");
  if (date.value === "") {
    document.querySelector("#error-birthdate") .innerHTML="Vous devez entrer votre date de naissance."
    return false;
  } else {
    return true;
  }
}

// validation tournament
function validateTournament() {
  const tournament = document.querySelector("#quantity");
  const parsed = parseInt(tournament.value, 10);
  if (isNaN(parsed)) {
    document.querySelector("#error-number") .innerHTML="Vous devez donner un nombre."
    return false;
  } else {
    return true;
  }
}

// validation location
function validateLocation() {
  let isChecked = false;
  const locations = document.querySelectorAll(".location-checkbox");
  // POUR CHAQUE ELEMENT DU TABLEAU LOCATIONS ON EXECUTE UNE FONCTION
  locations.forEach((locationInput) => {
    if (locationInput.checked) {
      isChecked = true;
    }
  })
  if (isChecked === false) {
    document.querySelector("#error-location") .innerHTML="Vous devez choisir une option."
  }
  return isChecked;
}

// validation terms
function validateTerms() {
  const termsCheckBox = document.querySelector("#checkbox1");
  if (termsCheckBox.checked) {
    return true;
  } else {
    document.querySelector("#error-terms") .innerHTML="Vous devez vérifier que vous acceptez les termes et conditions."
    return false;
  }
}

// validation methods
function validate() {
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isDateValid = validateBirthdate();
  const isTournamentValid = validateTournament();
  const isLocationChecked = validateLocation();
  const isTermsChecked = validateTerms();
  if (isFirstNameValid === true && isLastNameValid === true && isEmailValid === true && isDateValid === true && isTournamentValid === true && isLocationChecked === true && isTermsChecked === true) {
    alert("Merci! Votre réservation a été reçue.")
    return true;
  }
  return false;
}