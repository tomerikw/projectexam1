const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const firsteNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const textArea = document.querySelector("#textArea");
const noSubjectError = document.querySelector("#noSubjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const button = document.querySelector("#submitButton");
const forms = document.getElementById("form");
const validButton = document.querySelector("#submitButton");
const hideValid = document.getElementById("reset");

function validateform(event) {
  event.preventDefault();

  if (firstName.value.trim().length > 0) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
  if (lastName.value.trim().length > 0) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }
  if (textArea.value.trim().length > 5) {
    noSubjectError.style.display = "none";
  } else {
    noSubjectError.style.display = "block";
  }
  if (email.value.trim().length > 0) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}
form.addEventListener("submit", validateform);

function validemail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

hideValid.onclick = function () {
  document.getElementById("validForm").style.display = "none";
  firstNameError.style.display = "none";
  lastNameError.style.display = "none";
  emailError.style.display = "none";
  noSubjectError.style.display = "none";
};

validButton.onclick = function () {
  if (!forms.checkValidity()) {
    document.getElementById("validForm").style.display = "block";
    document.getElementById(
      "validForm"
    ).innerHTML = `Form not sent, please check your information`;
    document.getElementById("validForm").style.color = "red";
  } else {
    document.getElementById("validForm").style.display = "block";
    document.getElementById("validForm").style.color = "azure";
    document.getElementById(
      "validForm"
    ).innerHTML = `Thank you! You will soon hear from us`;
  }
};
