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
// const onScroll = () => setOffset(window.pageYOffset);
// useEffect(() => {
//   // clean up code
//   window.removeEventListener("scroll", onScroll);
//   window.addEventListener("scroll", onScroll, { passive: true });
//   return () => window.removeEventListener("scroll", onScroll);
// }, []);

// loader animation
window.onload = function () {
  document.querySelector(".loader_wrapper").style.display = "none";
};



