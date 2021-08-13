"use strict";

const toggleNav = document.querySelector(".header__nav-toggle");
const header = document.querySelector(".header");
const headerNav = document.querySelector(".header__nav");
const html = document.querySelector("html");

toggleNav.addEventListener("click", function () {
  toggleNav.classList.toggle("header__nav-toggle--active");
  header.classList.toggle("header--active");
  headerNav.classList.toggle("header__nav--active");
  html.classList.toggle("html--disabled");
});
