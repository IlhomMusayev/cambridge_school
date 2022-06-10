const statiscticsElement = document.querySelector(".statistics");

const counters = document.querySelectorAll(".counter");
const speed = 20; // The lower the slower

let height = window.pageYOffset;
let offsetTop = statiscticsElement.offsetTop;
console.log(height);
console.log("saom");
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.trunc(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
