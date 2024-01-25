"use strict";

/**
 * add event on multiple elements
 */

const addEventOnElement = (elements, eventType, callback) => {
  elements.forEach((el) => {
    el.addEventListener(eventType, callback);
  });
};

/**
 * Main nav toggle for mobile
 */

const navBar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = () => {
  navBar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);

/**
 * Parallex effect
 */

const parallaxElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", (event) => {
  parallaxElements.forEach((parallaxElement) => {
    const movementX =
      (event.clientX / window.innerWidth) *
      Number(parallaxElement.dataset.parallaxSpeed);
    const movpmentY =
      (event.clientY / window.innerHeight) *
      Number(parallaxElement.dataset.parallaxSpeed);

    parallaxElement.animate(
      {
        transform: `translate(${movementX}px, ${movpmentY}px)`,
      },
      { duration: 500, fill: "forwards" }
    );
  });
});

// Add Smoothing For Safari
const allLinks = document.querySelectorAll("a:link"),
  headerEl = document.querySelector(".header");
allLinks.forEach((e) => {
  e.addEventListener("click", (t) => {
    t.preventDefault();
    let l = e.getAttribute("href");
    if (
      ("#" === l && window.scrollTo({ top: 0, behavior: "smooth" }),
      "#" !== l && l.startsWith("#"))
    ) {
      let o = document.querySelector(l);
      o.scrollIntoView({ behavior: "smooth" });
    }
    e.classList.contains("main-nav-link") &&
      headerEl.classList.toggle("active");
  });
});
