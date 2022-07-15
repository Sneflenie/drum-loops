"use strict";

const bookmark = document.querySelector(".header__btn");
const bookmarkEmpty = document.querySelector(".header__btn--ribbon");
const bookmarkFull = document.querySelector(".header__btn--ribbon-full.hidden");

const heartFull = document.querySelector(".heart-svg-full.hidden");
const heartEmpty = document.querySelector(".heart-svg");

bookmark.addEventListener("click", function () {
  const full = bookmarkFull.classList.toggle("hidden");
  const empty = bookmarkEmpty.classList.toggle("hidden");
});

heartEmpty.addEventListener("click", function () {
  const full = heartFull.classList.toggle("hidden");
  const empty = heartEmpty.classList.toggle("hidden");
});

heartFull.addEventListener("click", function () {
  const full = heartFull.classList.toggle("hidden");
  const empty = heartEmpty.classList.toggle("hidden");
});
