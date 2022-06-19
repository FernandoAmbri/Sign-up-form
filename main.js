let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone-number");

const showErrorMessage = document.querySelector(".validar-password");
const showErrorEmail = document.querySelector(".validar-email");
const showErrorNumber = document.querySelector(".validar-numero");

function passwordMatch() {
  if (password.value !== confirmPassword.value) {
    inputMessage(showErrorMessage, password, "*Password do not match");
  } else {
    inputMessage(showErrorMessage, password, "");
  }
}

function validarCorreo(correo) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(correo);
}

function validarTelefono(numero) {
  const regex = /^\d{10}$/;
  return regex.test(numero);
}

function validarPassword(password) {
  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/;
  return regex.test(password);
}

function inputMessage(element, input, message) {
  if (message !== "") {
    element.classList.add("error-message");
    element.textContent = message;
    element.style.display = "block";
    input.classList.add("input-error");
  } else {
    element.style.display = "none";
    input.classList.remove("input-error");
  }
}

password.addEventListener("blur", (input) => {
  if (input.target.value === "") {
    inputMessage(showErrorMessage, password, "");
  } else if (!validarPassword(input.target.value)) {
    inputMessage(showErrorMessage, password, "*Password is not correct");
  } else {
    password.onchange = confirmPassword.onkeyup = passwordMatch;
  }
});

email.addEventListener("blur", (input) => {
  if (input.target.value === "") {
    inputMessage(showErrorEmail, email, "");
  } else if (!validarCorreo(input.target.value)) {
    inputMessage(showErrorEmail, email, "*Email is not correct");
  } else {
    inputMessage(showErrorEmail, "");
  }
});

phoneNumber.addEventListener("blur", (input) => {
  if (input.target.value === "") {
    inputMessage(showErrorNumber, phoneNumber, "");
  } else if (!validarTelefono(input.target.value)) {
    inputMessage(showErrorNumber, phoneNumber, "*Phone number is not correct");
  } else {
    inputMessage(showErrorNumber, phoneNumber, "");
  }
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});
