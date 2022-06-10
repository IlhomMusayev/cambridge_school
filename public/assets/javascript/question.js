const questionFormElement = document.querySelector(".question_form");

questionFormElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  let res = await fetch("/question", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });
  let data = await res.json();
  if (data.ok) {
    alert("Your question has been sent");
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.message.value = "";
  } else {
    alert("Something went wrong");
  }
});
