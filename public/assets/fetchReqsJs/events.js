// CREATE CATALOG
const createeventsFormElement = document.querySelector(".create__events__form");
createeventsFormElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData();

  const alert = createeventsFormElement.querySelector(".alert");
  const dangerAlertElement =
    createeventsFormElement.querySelector(".alert__danger");
  const successAlertElement =
    createeventsFormElement.querySelector(".alert__success");

  formData.append("branch_id", createeventsFormElement.branch_id.value);

  formData.append(
    "event_title_uz",
    createeventsFormElement.event_title_uz.value
  );
  formData.append(
    "event_title_ru",
    createeventsFormElement.event_title_ru.value
  );
  formData.append(
    "event_title_eng",
    createeventsFormElement.event_title_eng.value
  );
  formData.append(
    "event_subtitle_uz",
    createeventsFormElement.event_subtitle_uz.value
  );
  formData.append(
    "event_subtitle_ru",
    createeventsFormElement.event_subtitle_ru.value
  );
  formData.append(
    "event_subtitle_eng",
    createeventsFormElement.event_subtitle_eng.value
  );
  formData.append(
    "event_content_uz",
    createeventsFormElement.event_content_uz.value
  );
  formData.append(
    "event_content_ru",
    createeventsFormElement.event_content_ru.value
  );
  formData.append(
    "event_content_eng",
    createeventsFormElement.event_content_eng.value
  );
  formData.append("event_image", createeventsFormElement.event_image.files[0]);

  const option = await {
    method: "POST",
    body: formData,
  };
  let response = await fetch("/admin/events", option);
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

// EDIT EVENTS
const editeventsEditElements = document.querySelectorAll(".edit_btn");
editeventsEditElements.forEach((editeventsEdit) => {
  editeventsEdit.addEventListener("click", async (e) => {
    e.preventDefault();
    const eventItem = JSON.parse(editeventsEdit.dataset.events);
    console.log(eventItem);

    const editeventsFormElement = document.querySelector(".edit__events__form");

    editeventsFormElement.event_title_uz.value = eventItem.event_title_uz;
    editeventsFormElement.event_title_ru.value = eventItem.event_title_ru;
    editeventsFormElement.event_title_eng.value = eventItem.event_title_eng;
    editeventsFormElement.event_subtitle_uz.value = eventItem.event_subtitle_uz;
    editeventsFormElement.event_subtitle_ru.value = eventItem.event_subtitle_ru;
    editeventsFormElement.event_subtitle_eng.value =
      eventItem.event_subtitle_eng;
    editeventsFormElement.event_content_uz.value = eventItem.event_content_uz;
    editeventsFormElement.event_content_ru.value = eventItem.event_content_ru;
    editeventsFormElement.event_content_eng.value = eventItem.event_content_eng;

    editeventsFormElement.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData();

      const alert = editeventsFormElement.querySelector(".alert");
      const dangerAlertElement =
        editeventsFormElement.querySelector(".alert__danger");
      const successAlertElement =
        editeventsFormElement.querySelector(".alert__success");

      formData.append("event_id", eventItem.event_id);
      formData.append(
        "event_title_uz",
        editeventsFormElement.event_title_uz.value
      );
      formData.append(
        "event_title_ru",
        editeventsFormElement.event_title_ru.value
      );
      formData.append(
        "event_title_eng",
        editeventsFormElement.event_title_eng.value
      );
      formData.append(
        "event_subtitle_uz",
        editeventsFormElement.event_subtitle_uz.value
      );
      formData.append(
        "event_subtitle_ru",
        editeventsFormElement.event_subtitle_ru.value
      );
      formData.append(
        "event_subtitle_eng",
        editeventsFormElement.event_subtitle_eng.value
      );

      formData.append(
        "event_content_uz",
        editeventsFormElement.event_content_uz.value
      );
      formData.append(
        "event_content_ru",
        editeventsFormElement.event_content_ru.value
      );
      formData.append(
        "event_content_eng",
        editeventsFormElement.event_content_eng.value
      );
      formData.append(
        "event_image",
        editeventsFormElement.event_image.files[0]
      );

      const option = await {
        method: "PUT",
        body: formData,
      };
      let response = await fetch("/admin/events", option);
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

// DELETE EVENT
const deleteeventDelete = document.querySelectorAll(".delete_btn");
deleteeventDelete.forEach((deleteeventDelete) => {
  deleteeventDelete.addEventListener("click", (e) => {
    const deleteModelBtnElement = document.querySelector(".delete__btn__modal");
    deleteModelBtnElement.addEventListener("click", async (e) => {
      const event_id = deleteeventDelete.dataset.event_id;
      const option = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event_id: event_id,
        }),
      };
      fetch("/admin/events", option)
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
