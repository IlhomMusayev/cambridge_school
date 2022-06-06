// CREATE CATALOG
const createNewsFormElement = document.querySelector(".create__news__form");
createNewsFormElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData();

  const alert = createNewsFormElement.querySelector(".alert");
  const dangerAlertElement =
    createNewsFormElement.querySelector(".alert__danger");
  const successAlertElement =
    createNewsFormElement.querySelector(".alert__success");

  formData.append("new_title_uz", createNewsFormElement.new_title_uz.value);
  formData.append("new_title_ru", createNewsFormElement.new_title_ru.value);
  formData.append("new_title_eng", createNewsFormElement.new_title_eng.value);
  formData.append(
    "new_subtitle_uz",
    createNewsFormElement.new_subtitle_uz.value
  );
  formData.append(
    "new_subtitle_ru",
    createNewsFormElement.new_subtitle_ru.value
  );
  formData.append(
    "new_subtitle_eng",
    createNewsFormElement.new_subtitle_eng.value
  );
  formData.append("new_content_uz", createNewsFormElement.new_content_uz.value);
  formData.append("new_content_ru", createNewsFormElement.new_content_ru.value);
  formData.append(
    "new_content_eng",
    createNewsFormElement.new_content_eng.value
  );
  formData.append("new_image", createNewsFormElement.new_image.files[0]);

  const option = await {
    method: "POST",
    body: formData,
  };
  let response = await fetch("/admin/news", option);
  response = await response.json();
  console.log(response);
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

// EDIT Product
const editNewsEditElements = document.querySelectorAll(".edit_btn");
editNewsEditElements.forEach((editNewsEdit) => {
  editNewsEdit.addEventListener("click", async (e) => {
    e.preventDefault();
    const newItem = JSON.parse(editNewsEdit.dataset.news);
    console.log(newItem);

    const editNewsFormElement = document.querySelector(".edit__news__form");

    editNewsFormElement.new_title_uz.value = newItem.new_title_uz;
    editNewsFormElement.new_title_uz.value = newItem.new_title_uz;
    editNewsFormElement.new_title_ru.value = newItem.new_title_ru;
    editNewsFormElement.new_title_eng.value = newItem.new_title_eng;
    editNewsFormElement.new_subtitle_uz.value = newItem.new_subtitle_uz;
    editNewsFormElement.new_subtitle_ru.value = newItem.new_subtitle_ru;
    editNewsFormElement.new_subtitle_eng.value = newItem.new_subtitle_eng;
    editNewsFormElement.new_content_uz.value = newItem.new_content_uz;
    editNewsFormElement.new_content_ru.value = newItem.new_content_ru;
    editNewsFormElement.new_content_eng.value = newItem.new_content_eng;

    editNewsFormElement.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData();

      const alert = editNewsFormElement.querySelector(".alert");
      const dangerAlertElement =
        editNewsFormElement.querySelector(".alert__danger");
      const successAlertElement =
        editNewsFormElement.querySelector(".alert__success");

      formData.append("new_id", newItem.new_id);
      formData.append("new_title_uz", editNewsFormElement.new_title_uz.value);
      formData.append("new_title_ru", editNewsFormElement.new_title_ru.value);
      formData.append("new_title_eng", editNewsFormElement.new_title_eng.value);
      formData.append(
        "new_subtitle_uz",
        editNewsFormElement.new_subtitle_uz.value
      );
      formData.append(
        "new_subtitle_ru",
        editNewsFormElement.new_subtitle_ru.value
      );
      formData.append(
        "new_subtitle_eng",
        editNewsFormElement.new_subtitle_eng.value
      );

      formData.append(
        "new_content_uz",
        editNewsFormElement.new_content_uz.value
      );
      formData.append(
        "new_content_ru",
        editNewsFormElement.new_content_ru.value
      );
      formData.append(
        "new_content_eng",
        editNewsFormElement.new_content_eng.value
      );
      formData.append("new_image", editNewsFormElement.new_image.files[0]);

      const option = await {
        method: "PUT",
        body: formData,
      };
      let response = await fetch("/admin/news", option);
      response = await response.json();
      console.log(response);
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

// DELETE PRODUCT
const deleteNewDelete = document.querySelectorAll(".delete_btn");
deleteNewDelete.forEach((deleteNewDelete) => {
  deleteNewDelete.addEventListener("click", (e) => {
    const deleteModelBtnElement = document.querySelector(".delete__btn__modal");
    deleteModelBtnElement.addEventListener("click", async (e) => {
      const new_id = deleteNewDelete.dataset.new_id;
      const option = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          new_id: new_id,
        }),
      };
      fetch("/admin/news", option)
        .then((response) => response.json())
        .then((response) => {
          if (response.ok) {
            deleteNewDelete.parentNode.parentNode.parentNode.remove();
            alert("Delete Success");
          }
        });
    });
  });
});
