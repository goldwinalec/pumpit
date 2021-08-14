"use strict";

const toggleNav = document.querySelector(".header__nav-toggle");
const header = document.querySelector(".header");
const headerNav = document.querySelector(".header__nav");
const html = document.querySelector("html");
const navLinks = document.querySelectorAll("header__nav-link");
const footerCopyright = document.querySelector(".footer__copyright");

toggleNav.addEventListener("click", function () {
  toggleNav.classList.toggle("header__nav-toggle--active");
  header.classList.toggle("header--active");
  headerNav.classList.toggle("header__nav--active");
  footerCopyright.classList.toggle("footer__copyright--active");
  html.classList.toggle("html--disabled");
});

$(document).on("click", ".header__nav-link", function () {
  var linkID = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(linkID).offset().top,
    },
    "slow"
  );
  toggleNav.classList.remove("header__nav-toggle--active");
  header.classList.remove("header--active");
  headerNav.classList.remove("header__nav--active");
  footerCopyright.classList.remove("footer__copyright--active");
  html.classList.remove("html--disabled");
});
$(document).on("click", ".hero__link", function () {
  var linkID = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(linkID).offset().top,
    },
    "slow"
  );
});
$(document).on("click", ".footer__link", function () {
  var linkID = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(linkID).offset().top,
    },
    "slow"
  );
});
