console.log(document.cookie.language);
const languageSelection = document.querySelector("#lan");
languageSelection.addEventListener("change", (e) => {
  document.cookie = `language=${e.target.value}`;
  console.log(e.target.selected);
  location.reload();
});
