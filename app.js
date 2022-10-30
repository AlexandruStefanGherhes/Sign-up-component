const form = document.querySelector(".form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

console.log(email);

function showError(input, message) {
  input.classList.add("is-invalid");
  const small = input.parentElement.querySelector("small");
  small.textContent = message;
}

function showSucces(input) {
  input.classList.add("is-valid");
}

function clearInputs(inputArr) {
  inputArr.forEach((input) => {
    input.value = "";
  });
}

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input, "Email is not invalid");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucces(input);
    }
  });
}

//check input Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be les than ${max} characters`
    );
  } else {
    showSucces(input);
  }
}

//get FieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([firstName, lastName, email, password]);
  checkLength(firstName, 3, 15);
  checkLength(lastName, 3, 15);
  checkLength(password, 6, 15);
  checkEmail(email);
});
