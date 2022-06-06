const menuToggleBtnElement = document.querySelector(".menu_btn");
const wrapMenuElement = document.querySelector(".wrapper-menu");
const menuElement = document.querySelector(".menu__section");
const navbarElement = document.querySelector("nav");
menuToggleBtnElement.addEventListener("click", (e) => {
  menuElement.classList.toggle("active");
  navbarElement.classList.toggle("active");
  wrapMenuElement.classList.toggle("open");
});

window.addEventListener("scroll", (e) => {
  height = window.pageYOffset;
  if (height > 50) {
    navbarElement.classList.add("active-nav");
  } else {
    navbarElement.classList.remove("active-nav");
  }
});

// loader animation
window.onload = function () {
  document.querySelector(".loader_wrapper").style.display = "none";
};

// about play video
const aboutPlayBtnsElements = document.querySelector(
  ".about-header__content__bottom__btn"
);

aboutPlayBtnsElements.addEventListener("click", (e) => {
  const header = document.querySelector(".about-header");
  const videoElement = document.querySelector("#myVideo");
  const closeBtnElement = document.querySelector(".close__video__btn");
  const navbar = document.querySelector("nav");

  header.style.opacity = "0";

  videoElement.style.filter = "brightness(90%)";
  videoElement.muted = false;
  closeBtnElement.style.display = "flex";
  navbar.style.opacity = "0";
});
const closeVideBtnsElements = document.querySelector(".close__video__btn");
closeVideBtnsElements.addEventListener("click", (e) => {
  const partElement = closeVideBtnsElements.parentNode;
  const header = partElement.querySelector(".about-header");
  const videoElement = partElement.querySelector("#myVideo");
  const navbar = document.querySelector("nav");

  header.style.opacity = "1";
  videoElement.style.filter = "brightness(30%)";
  videoElement.muted = true;
  closeVideBtnsElements.style.display = "none";
  navbar.style.opacity = "1";
});
