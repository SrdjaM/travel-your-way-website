//Tablet and mobile navigation

const btnNav = document.querySelector(".btn__tablet");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Images slider

const images = document.querySelector(".destination__images");
const image = images.children;

const slider = document.querySelector(".destination__slider");
const btnPrev = document.querySelector(".destination__btn--left");
const btnNext = document.querySelector(".destination__btn--right");
const formContainer = document.querySelector(".form__container");

const elementWidth = image[0].getBoundingClientRect().width;

btnNext.addEventListener("click", () => {
  slider.scrollLeft += elementWidth;
});

btnPrev.addEventListener("click", () => {
  slider.scrollLeft -= elementWidth;
});

//Form validation

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const form = document.querySelector(".form");
const nameInput = document.querySelector(".form__full-name");
const emailInput = document.querySelector(".form__email");
const messageInput = document.querySelector(".form__message");
const messageSubmit = document.querySelector(".submit-message");

const inputs = [nameInput, emailInput, messageInput];

let isFormValid = false;
let isValidationOn = false;

const resetEl = (el) => {
  el.classList.remove("invalid");
  el.nextElementSibling.classList.add("hidden");
};

const invalidateEl = (el) => {
  el.classList.add("invalid");
  el.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
  if (!isValidationOn) return;

  resetEl(nameInput);
  resetEl(emailInput);
  resetEl(messageInput);
  isFormValid = true;

  if (!nameInput.value) {
    invalidateEl(nameInput);
    isFormValid = false;
  }

  if (!isValidEmail(emailInput.value)) {
    invalidateEl(emailInput);
    isFormValid = false;
  }

  if (!messageInput.value) {
    invalidateEl(messageInput);
    isFormValid = false;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
  if (isFormValid) {
    form.remove();
    formContainer.remove();
    messageSubmit.classList.remove("hidden");
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});
