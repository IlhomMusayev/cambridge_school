const languageSelection = document.querySelector("#lan");
languageSelection.addEventListener("change", (e) => {
  document.cookie = `language=${e.target.value}`;
  location.reload();
});
