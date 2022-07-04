const programmElement = document.querySelector("#programm");
const grandElement = document.querySelector("#scholarships");
const applyRequrimensElement = document.querySelector("#apply_requrimens");
const tabListItemLinks = document.querySelectorAll(".tab_bar_item_link");
const applyInstructionElement = document.querySelector("#apply_instruction");
const admissionFormElement = document.querySelector("#admission");
const tabMenuElement = document.querySelector(".tab_bar");
const videoBackgroundElement = document.querySelector(".imgHeader");

window.addEventListener(
  "scroll",
  (e) => {
    height = window.pageYOffset;
    if (height > grandElement.offsetTop && programmElement.offsetTop > height) {
      videoBackgroundElement.style.display = "block";
      applyInstructionElement.style.color = "white";
      tabListItemLinks.forEach((el, index) => {
        el.style.color = "white";
        if (index === 0) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    }
    if (
      height > programmElement.offsetTop &&
      applyRequrimensElement.offsetTop > height
    ) {
      videoBackgroundElement.style.display = "block";
      applyInstructionElement.style.color = "white";
      tabMenuElement.style.display = "block";

      tabListItemLinks.forEach((el, index) => {
        el.style.color = "white";

        if (index === 1) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    }
    if (
      height > applyRequrimensElement.offsetTop &&
      applyInstructionElement.offsetTop > height
    ) {
      videoBackgroundElement.style.display = "block";
      applyInstructionElement.style.color = "white";
      tabMenuElement.style.display = "block";

      tabListItemLinks.forEach((el, index) => {
        el.style.color = "white";

        if (index === 2) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    }
    if (
      height > applyInstructionElement.offsetTop &&
      admissionFormElement.offsetTop > height
    ) {
      videoBackgroundElement.style.display = "none";
      applyInstructionElement.style.color = "black";
      tabMenuElement.style.display = "block";
      applyInstructionElement.style.transition = "0.5s";
      tabListItemLinks.forEach((el, index) => {
        if (screen.width > 768) {
          el.style.color = "black";
        } else {
          el.style.color = "none";
        }
        if (index === 3) {
          el.style.borderLeft = "4px solid #000";
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    } else {
      // tabListItemLinks[0].classList.add("active");
      // videoBackgroundElement.style.display = "block";
    }
    if (admissionFormElement.offsetTop - height < 400) {
      tabMenuElement.style.display = "none";
      tabMenuElement.style.transition = "0.5s";
    }
  },
  { passive: true }
);

if (screen.width < 768) {
  const programmElement = document.querySelector("#programm");
  const grandElement = document.querySelector("#scholarships");
  const applyRequrimensElement = document.querySelector("#apply_requrimens");
  const tabListItemLinks = document.querySelectorAll(".tab_bat_item_link");
  const applyInstructionElement = document.querySelector("#apply_instruction");
  const admissionFormElement = document.querySelector(".form__applications");
  const tabMenuElement = document.querySelector(".tab_bar");
  const videoBackgroundElement = document.querySelector(".imgHeader");

  window.addEventListener(
    "scroll",
    (e) => {
      height = window.pageYOffset;
      if (
        height > grandElement.offsetTop &&
        programmElement.offsetTop > height
      ) {
        videoBackgroundElement.style.display = "block";
        applyInstructionElement.style.color = "white";
        tabListItemLinks.forEach((el, index) => {
          el.style.color = "white";
          if (index === 0) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        });
      }
      if (
        height > programmElement.offsetTop &&
        applyRequrimensElement.offsetTop > height
      ) {
        videoBackgroundElement.style.display = "block";
        applyInstructionElement.style.color = "white";
        tabMenuElement.style.display = "block";

        tabListItemLinks.forEach((el, index) => {
          el.style.color = "white";

          if (index === 1) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        });
      }
      if (
        height > applyRequrimensElement.offsetTop &&
        applyInstructionElement.offsetTop > height
      ) {
        videoBackgroundElement.style.display = "block";
        applyInstructionElement.style.color = "white";
        tabMenuElement.style.display = "block";

        tabListItemLinks.forEach((el, index) => {
          el.style.color = "white";

          if (index === 2) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        });
      }
      if (
        height > applyInstructionElement.offsetTop &&
        admissionFormElement.offsetTop > height
      ) {
        videoBackgroundElement.style.display = "none";
        applyInstructionElement.style.color = "black";
        tabMenuElement.style.display = "block";
        applyInstructionElement.style.transition = "0.5s";
        tabListItemLinks.forEach((el, index) => {
          if (screen.width > 768) {
            el.style.color = "black";
          } else {
            el.style.color = "none";
          }
          if (index === 3) {
            el.style.borderLeft = "4px solid #000";
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        });
      } else {
        tabListItemLinks[0].classList.add("active");
        videoBackgroundElement.style.display = "block";
      }
      if (admissionFormElement.offsetTop - height < 400) {
        tabMenuElement.style.display = "none";
        tabMenuElement.style.transition = "0.5s";
      }
    },
    { passive: true }
  );
}

const admissionFileInputElements = document.querySelectorAll(
  ".admission_file_input"
);

admissionFileInputElements.forEach((item) => {
  item.addEventListener("change", (e) => {
    const fileElement = item.parentNode;
    const fileName = fileElement.querySelector(".file_admission_text");
    fileName.textContent = item.files[0].name;
    fileElement.style.border = "2px dashed #ff9838";
  });
});

const selectElements = document.querySelectorAll("section");
selectElements.forEach((item) => {
  item.addEventListener("change", (e) => {
    e.target.style.borderBottomColor = "#ff9838";
  });
});
