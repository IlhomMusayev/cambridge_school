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

// EDIT Branch
const editBranchEditElements = document.querySelectorAll(".edit_btn");
editBranchEditElements.forEach((editBranchEdit) => {
  editBranchEdit.addEventListener("click", async (e) => {
    e.preventDefault();
    const branchItem = JSON.parse(editBranchEdit.dataset.branchs);

    const editBranchsFormElement = document.querySelector(
      ".edit__branch__form"
    );

    editBranchsFormElement.branch_name.value = branchItem.branch_name;
    editBranchsFormElement.branch_grades.value =
      branchItem.branch_grades.join(",");
    editBranchsFormElement.branch_phone.value = branchItem.branch_phone;
    editBranchsFormElement.branch_location_link.value =
      branchItem.branch_location_link;

    editBranchsFormElement.addEventListener("submit", async (e) => {
      e.preventDefault();

      const alert = editBranchsFormElement.querySelector(".alert");
      const dangerAlertElement =
        editBranchsFormElement.querySelector(".alert__danger");
      const successAlertElement =
        editBranchsFormElement.querySelector(".alert__success");

      const option = await {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: branchItem.branch_id,
          branch_name: editBranchsFormElement.branch_name.value,
          branch_grades: editBranchsFormElement.branch_grades.value,
          branch_phone: editBranchsFormElement.branch_phone.value,
          branch_location_link:
            editBranchsFormElement.branch_location_link.value,
        }),
      };
      let response = await fetch("/admin/branchs", option);
      response = await response.json();
      if (response.ok) {
        successAlertElement.style.display = "block";
        successAlertElement.innerHTML = `
          <strong>Success!</strong> ${response.message}
        `;
        setTimeout(() => {
          successAlertElement.style.display = "none";
        }, 3000);
      } else {
        dangerAlertElement.style.display = "block";
        dangerAlertElement.innerHTML = `
          <strong>Success!</strong> ${response.message}
        `;
        setTimeout(() => {
          dangerAlertElement.style.display = "none";
        }, 3000);
      }
    });
  });
});

// DELETE EVENT
const deleteeventDelete = document.querySelectorAll(".delete_btn");
deleteeventDelete.forEach((deleteeventDelete) => {
  deleteeventDelete.addEventListener("click", (e) => {
    const deleteModelBtnElement = document.querySelector(".delete__btn__modal");
    deleteModelBtnElement.addEventListener("click", async (e) => {
      const branch_id = deleteeventDelete.dataset.branch_id;
      const option = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id: branch_id,
        }),
      };
      fetch("/admin/branchs", option)
        .then((response) => response.json())
        .then((response) => {
          if (response.ok) {
            deleteeventDelete.parentNode.parentNode.parentNode.remove();
            alert("Delete Success");
          }
        });
    });
  });
});
