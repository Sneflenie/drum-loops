"use strict";

const bookmark = document.querySelector(".header__btn");
const bookmarkEmpty = document.querySelector(".header__btn--ribbon");
const bookmarkFull = document.querySelector(".header__btn--ribbon-full.hidden");

const heartFullMusic = document.querySelectorAll(".heart-music-full.hidden");
const heartEmptyMusic = document.querySelectorAll(".heart-music");
const ribbonFullMusic = document.querySelectorAll(".ribbon-music-full.hidden");
const ribbonEmptyMusic = document.querySelectorAll(".ribbon-music");

const heartFull = document.querySelector(".heart-svg-full.hidden");
const heartEmpty = document.querySelector(".heart-svg");
const ribbonFull = document.querySelector(".ribbon-svg-full.hidden");
const ribbonEmpty = document.querySelector(".ribbon-svg");

const scrollTo = document.querySelector(".nav-genre");
const genre = document.querySelector("#genre");

// Bookmark Toggle Icon

bookmark.addEventListener("click", function () {
  bookmarkFull.classList.toggle("hidden");
  bookmarkEmpty.classList.toggle("hidden");
});

// Music Toggle Icons

document.querySelectorAll(".heart-music").forEach(function (i) {
  i.addEventListener("click", function (e) {
    const clicked = [...heartEmptyMusic].indexOf(e.target);
    heartFullMusic[clicked].classList.toggle("hidden");
    heartEmptyMusic[clicked].classList.toggle("hidden");
  });
});

document.querySelectorAll(".heart-music-full.hidden").forEach(function (i) {
  i.addEventListener("click", function (e) {
    const clicked = [...heartFullMusic].indexOf(e.target);
    heartFullMusic[clicked].classList.toggle("hidden");
    heartEmptyMusic[clicked].classList.toggle("hidden");
  });
});

document.querySelectorAll(".ribbon-music").forEach(function (i) {
  i.addEventListener("click", function (e) {
    const clicked = [...ribbonEmptyMusic].indexOf(e.target);
    ribbonFullMusic[clicked].classList.toggle("hidden");
    ribbonEmptyMusic[clicked].classList.toggle("hidden");
  });
});

document.querySelectorAll(".ribbon-music-full.hidden").forEach(function (i) {
  i.addEventListener("click", function (e) {
    const clicked = [...ribbonFullMusic].indexOf(e.target);
    ribbonFullMusic[clicked].classList.toggle("hidden");
    ribbonEmptyMusic[clicked].classList.toggle("hidden");
  });
});

// Footer Toggle Icons

heartEmpty.addEventListener("click", function () {
  heartFull.classList.toggle("hidden");
  heartEmpty.classList.toggle("hidden");
});

heartFull.addEventListener("click", function () {
  heartFull.classList.toggle("hidden");
  heartEmpty.classList.toggle("hidden");
});

ribbonEmpty.addEventListener("click", function () {
  ribbonFull.classList.toggle("hidden");
  ribbonEmpty.classList.toggle("hidden");
});

ribbonFull.addEventListener("click", function () {
  ribbonFull.classList.toggle("hidden");
  ribbonEmpty.classList.toggle("hidden");
});

// Smooth Scroll

document
  .querySelector(".header__nav-item")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });

scrollTo.addEventListener("click", function (e) {
  genre.scrollIntoView({ behavior: "smooth" });
});
