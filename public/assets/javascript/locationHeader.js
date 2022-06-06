const headerContentsElement = document.querySelectorAll(
  ".location_header__data"
);
const thumbsSwiperElement = document.querySelector(".thumbsSwiper");
const paginationBtnELement = document.querySelector(".pagination__btns");
const playVideoBtnElements = document.querySelectorAll(".full_btn");
const sidebarElement = document.querySelector(".sidebar");

playVideoBtnElements.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const parentElement = btn.parentNode.parentNode;
    const video = parentElement.querySelector("#myVideo");
    const image = parentElement.querySelector(".slide_img");

    const headerContent = parentElement.querySelector(".location_header__data");
    const navbarElement = document.querySelector("nav");
    const closeBtnElement = document.querySelector(".close__header__btn");
    headerContent.style.display = "none";
    sidebarElement.style.display = "none";
    if (video) {
      video.style.filter = "brightness(90%)";
      video.muted = false;
    }
    if (image) {
      image.style.filter = "brightness(90%)";
    }
    closeBtnElement.style.display = "flex";
    navbarElement.style.opacity = "0";
    thumbsSwiperElement.style.display = "none";
    paginationBtnELement.classList.add("active");
  });
});

const closeBtnsElements = document.querySelectorAll(".close__header__btn");
console.log(closeBtnsElements);
closeBtnsElements.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const parentElement = btn.parentNode;
    const video = parentElement.querySelector("#myVideo");
    const image = parentElement.querySelector(".slide_img");
    sidebarElement.style.display = "block";

    const headerContent = parentElement.querySelector(".location_header__data");
    const navbarElement = document.querySelector("nav");
    btn.style.display = "none";
    headerContent.style.display = "block";
    if (video) {
      video.style.filter = "brightness(50%)";
      video.muted = true;
    }
    if (image) {
      image.style.filter = "brightness(50%)";
    }
    navbarElement.style.opacity = "1";
    thumbsSwiperElement.style.display = "block";
    paginationBtnELement.classList.remove("active");
  });
});

const paginationNextBtnElement = document.querySelector(".swiper-button-next");
const paginationPrevBtnElement = document.querySelector(".swiper-button-prev");
const videoElements = document.querySelectorAll("#myVideo");

paginationNextBtnElement.addEventListener("click", (e) => {
  headerContentsElement.forEach((el) => {
    el.style.display = "block";
  });
  videoElements.forEach((el) => {
    el.muted = true;
    el.style.filter = "brightness(50%)";
  });
  sidebarElement.style.display = "block";

  paginationBtnELement.classList.remove("active");
  closeBtnsElements.forEach((el) => {
    el.style.display = "none";
  });
  thumbsSwiperElement.style.display = "block";
  const navbarElement = document.querySelector("nav");
  navbarElement.style.opacity = "1";
});
paginationPrevBtnElement.addEventListener("click", (e) => {
  headerContentsElement.forEach((el) => {
    el.style.display = "block";
  });
  sidebarElement.style.display = "block";

  videoElements.forEach((el) => {
    el.style.filter = "brightness(50%)";
    el.muted = true;
  });
  paginationBtnELement.classList.remove("active");
  closeBtnsElements.forEach((el) => {
    el.style.display = "none";
  });
  thumbsSwiperElement.style.display = "block";
  const navbarElement = document.querySelector("nav");
  navbarElement.style.opacity = "1";
});
