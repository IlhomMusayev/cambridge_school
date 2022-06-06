const readMoreBtnElement = document.querySelector(".btn_read_more");
const backBtnElement = document.querySelector(".btn_back");

const compus__content = document.querySelector(".compus__content");

const compus__content__more = document.querySelector(".compus__content__more");

readMoreBtnElement.addEventListener("click", function () {
  compus__content__more.classList.add("active");
  compus__content.classList.remove("active");
});
backBtnElement.addEventListener("click", function () {
  compus__content.classList.add("active");
  compus__content__more.classList.remove("active");
});
