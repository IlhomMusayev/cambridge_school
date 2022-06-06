const branchFormElement = document.querySelector(".create__branch__form");

branchFormElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { branch_name, branch_grades, branch_phone, branch_location_link } =
    e.target;

  const dangerAlertElement = branchFormElement.querySelector(".alert__danger");
  const successAlertElement =
    branchFormElement.querySelector(".alert__success");

  const branch = {
    branch_name: branch_name.value,
    branch_grades: branch_grades.value,
    branch_phone: branch_phone.value,
    branch_location_link: branch_location_link.value,
  };

  const response = await fetch("/admin/branchs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(branch),
  });

  const data = await response.json();

  if (data.ok) {
    successAlertElement.style.display = "block";
    successAlertElement.innerHTML = `
          <strong>Success!</strong> ${data.message}
        `;
    setTimeout(() => {
      successAlertElement.style.display = "none";
    }, 3000);
  } else {
    dangerAlertElement.style.display = "block";
    dangerAlertElement.innerHTML = `
          <strong>Success!</strong> ${data.message}
        `;
    setTimeout(() => {
      dangerAlertElement.style.display = "none";
    }, 3000);
  }
});
