"use strict";

const toggleNav = document.querySelector(".header__nav-toggle");
const header = document.querySelector(".header");
const headerNav = document.querySelector(".header__nav");
const html = document.querySelector("html");
const navLink = document.querySelectorAll(".header__nav-link");
const footerCopyright = document.querySelector(".footer__copyright");

toggleNav.addEventListener("click", function () {
  toggleNav.classList.toggle("header__nav-toggle--active");
  header.classList.toggle("header--active");
  headerNav.classList.toggle("header__nav--active");
  footerCopyright.classList.toggle("footer__copyright--active");
  html.classList.toggle("html--disabled");
});

navLink.forEach((link) => {
  link.addEventListener("click", function () {
    toggleNav.classList.remove("header__nav-toggle--active");
    header.classList.remove("header--active");
    headerNav.classList.remove("header__nav--active");
    footerCopyright.classList.remove("footer__copyright--active");
    html.classList.remove("html--disabled");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (evt) {
    evt.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const swiper = new Swiper(".feedback__wrapper", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".feedback__next",
    prevEl: ".feedback__prev",
  },
});

const projectButtons = document.querySelectorAll(".portfolio-page__item");

for (let projectButton of projectButtons) {
  projectButton.addEventListener("click", function (evt) {
    let modalName = this.getAttribute("data-modal");
    let modal = document.querySelector(
      `.modal[data-modal="` + modalName + `"]`
    );
    evt.preventDefault();
    modal.classList.add("modal--active");
    document.body.addEventListener("click", (event) => {
      if (modal.classList.contains("modal--active")) {
        if (
          event.target.closest(".modal__btn-img") ||
          (!event.target.closest(".modal") &&
            !event.target.closest(".portfolio-page__item"))
        ) {
          modal.classList.remove("modal--active");
        }
      }
    });
  });
}
