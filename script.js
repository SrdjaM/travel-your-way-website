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

const elementWidth = image[0].getBoundingClientRect().width;

btnNext.addEventListener("click", () => {
  slider.scrollLeft += elementWidth;
});

btnPrev.addEventListener("click", () => {
  slider.scrollLeft -= elementWidth;
});
