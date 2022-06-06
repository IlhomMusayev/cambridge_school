// play video header
const playBtnsElement = document.querySelectorAll(".header__content__btn");
const slidePaginationElements = document.querySelectorAll(
  ".swiper-pagination-bullet"
);
const headerElements = document.querySelectorAll(".header");
const videoElements = document.querySelectorAll("#myVideo");
const imgHeaderElements = document.querySelectorAll(".headerImg");

slidePaginationElements.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (videoElements) {
      videoElements.forEach((el) => {
        el.muted = true;
        el.style.filter = "brightness(50%)";
      });
    } else {
      imgHeaderElements.forEach((el) => {
        el.style.filter = "brightness(50%)";
      });
    }
    headerElements.forEach((el) => {
      el.style.opacity = "1";
    });
  });
});
playBtnsElement.forEach((btn) => {
  const partElement = btn.parentNode.parentNode.parentNode;
  const videoElement = partElement.querySelector("#myVideo");
  const imgHeaderElements = partElement.querySelector(".headerImg");

  if (videoElement) {
    videoElement.muted = true;
  }
  btn.addEventListener("click", (e) => {
    const header = partElement.querySelector(".header");
    const videoElement = partElement.querySelector("#myVideo");
    const imgHeaderElements = partElement.querySelector(".headerImg");

    const closeBtnElement = partElement.querySelector(".close__video__btn");

    header.style.opacity = "0";
    if (videoElement) {
      videoElement.style.filter = "brightness(90%)";
      videoElement.muted = false;
    } else {
      imgHeaderElements.style.filter = "brightness(90%)";
    }
    navbarElement.classList.add("active-nav");
    closeBtnElement.style.display = "flex";
  });
});

const closeVideBtnsElements = document.querySelectorAll(".close__video__btn");
closeVideBtnsElements.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const partElement = btn.parentNode;
    const header = partElement.querySelector(".header");
    const videoElement = partElement.querySelector("#myVideo");
    const imgHeaderElements = partElement.querySelector(".headerImg");

    if (videoElement) {
      videoElement.style.filter = "brightness(50%)";
      videoElement.muted = true;
    } else {
      imgHeaderElements.style.filter = "brightness(50%)";
    }
    header.style.opacity = "1";
    btn.style.display = "none";
  });
});
