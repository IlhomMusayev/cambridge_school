const adminssion_form = document.querySelector(".admission_form");

adminssion_form.addEventListener("submit", async (e) => {
  document.querySelector(".loader_wrapper2").style.display = "block";
  const successAlertElement = document.querySelector(".alert-success");
  const dangerAlertElement = document.querySelector(".alert-error");
  e.preventDefault();
  const {
    branch_id,
    adminssion_user_fullname,
    adminssion_user_email,
    adminssion_user_phone,
    adminssion_user_birthdate,
    adminssion_user_grade,
    adminssion_user_english_degree,
    adminssion_user_region,
    adminssion_user_address,
    adminssion_user_partents_fullname,
    adminssion_user_partents_phone,
    adminssion_user_grade_certificate,
    adminssion_user_passport,
    adminssion_user_partents_passport,
  } = e.target;
  const formData = new FormData();
  formData.append("branch_id", branch_id.value);
  formData.append("adminssion_user_fullname", adminssion_user_fullname.value);
  formData.append("adminssion_user_email", adminssion_user_email.value);
  formData.append("adminssion_user_phone", adminssion_user_phone.value);
  formData.append("adminssion_user_birthdate", adminssion_user_birthdate.value);
  formData.append("adminssion_user_grade", adminssion_user_grade.value);
  formData.append(
    "adminssion_user_english_degree",
    adminssion_user_english_degree.value
  );
  formData.append("adminssion_user_region", adminssion_user_region.value);
  formData.append("adminssion_user_address", adminssion_user_address.value);
  formData.append(
    "adminssion_user_partents_fullname",
    adminssion_user_partents_fullname.value
  );
  formData.append(
    "adminssion_user_partents_phone",
    adminssion_user_partents_phone.value
  );
  formData.append(
    "adminssion_user_grade_certificate",
    adminssion_user_grade_certificate.files[0]
  );
  formData.append(
    "adminssion_user_passport",
    adminssion_user_passport.files[0]
  );
  formData.append(
    "adminssion_user_partents_passport",
    adminssion_user_partents_passport.files[0]
  );

  const response = await fetch("/admission", {
    method: "POST",
    body: formData,
  });

  const data_ = await response.json();
  if (data_.ok) {
    document.querySelector(".loader_wrapper2").style.display = "none";
    swal("Good job!", "Your application has been accepted!", "success");
  } else {
    document.querySelector(".loader_wrapper2").style.display = "none";
    swal("Good job!", `${data_.message}`, "warning");
  }
});
