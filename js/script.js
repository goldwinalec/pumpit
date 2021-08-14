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
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
