const orderFormElement = document.querySelector(
  ".basket__content__payment__form"
);
const successAlert = document.querySelector(".alert-success");
const errorAlert = document.querySelector(".alert-error");
const warnAlert = document.querySelector(".alert-warn");

orderFormElement.addEventListener("submit", async (event) => {
  event.preventDefault();
  const user_address = event.target.user_address.value;
  const payment_type = event.target.payment_type.value;
  const order_name = event.target.order_name.value;
  const order_phone = event.target.order_phone.value;
  if (!(user_address && payment_type && order_name && order_phone)) {
    warnAlert.style.display = "block";
    warnAlert.textContent = "Hamma maydonlarni diqqat bilan to'ldiring!";
    setTimeout(() => {
      warnAlert.style.display = "none";
    }, 2000);
  }
  let res = await fetch(`/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_address,
      payment_type,
      order_name,
      order_phone,
    }),
  });
  res = await res.json();
  console.log(res);
  if (res.ok) {
    if (payment_type === "card") {
      successAlert.style.display = "block";
      successAlert.textContent = "Sizing buyurmangiz qabul qilindi!";
      setTimeout(() => {
        successAlert.style.display = "none";
      }, 2000);
      let resPayment = await fetch(`/payment/${res.data.order.order_id}`, {
        method: "POST",
      });
      resPayment = await resPayment.json();
      console.log(resPayment);
      if (resPayment.ok) {
        setTimeout(() => {
          window.location.href = "/order/thanks/" + res.data.order.order_id;
          successAlert.style.display = "none";
        }, 2000);
        successAlert.textContent = "Sizing buyurmangiz qabul qilindi!";
      }
    } else {
      successAlert.style.display = "block";
      setTimeout(() => {
        window.location.href = "/order/thanks/" + res.data.order.order_id;
        successAlert.style.display = "none";
      }, 2000);
      successAlert.textContent = "Sizing buyurmangiz qabul qilindi!";
    }
  } else {
    warnAlert.style.display = "block";
    setTimeout(() => {
      warnAlert.style.display = "none";
      warnAlert.textContent = res.message;
    }, 2000);
  }
});
