const programmElement = document.querySelector(".programm");
const footerElement = document.querySelector(".footer");
const locationHeader = document.querySelector(".location_header");
const sidebarList = document.querySelector(".sidebar__list");
const sidebatListLinkElement = document.querySelectorAll(
  ".sidebar__list__item__link"
);

window.addEventListener(
  "scroll",
  (e) => {
    height = window.pageYOffset;
    if (programmElement.offsetTop < height + 250) {
      sidebarList.style.display = "block";

      sidebarList.style.color = "black";
      sidebatListLinkElement.forEach((item) => {
        item.style.color = "black";
      });
    } else {
      sidebarList.style.display = "block";
      sidebarList.style.color = "white";
      sidebatListLinkElement.forEach((item) => {
        item.style.color = "white";
      });
    }
    if (footerElement.offsetTop < height + 600) {
      sidebarList.style.display = "none";
      sidebatListLinkElement.forEach((item) => {
        item.style.color = "black";
      });
    }
  },
  { passive: true }
);
