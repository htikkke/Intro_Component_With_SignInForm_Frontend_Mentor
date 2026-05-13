const submitButton = document.querySelector(".submit-button");
const inputs = document.querySelectorAll(".inputs");
const emailInput = document.querySelector(".email-input");
const emailError = document.querySelector(".email-error");
const errorIcons = document.querySelectorAll(".error-icon");
const errorMessages = document.querySelectorAll(".error-message");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  inputs.forEach((input, i) => {
    input.classList.remove("error");
    errorIcons[i].style.display = "none";
    errorMessages[i].style.display = "none";

    if (input.value.trim() === "") {
      input.placeholder = "";
      input.classList.add("error");
      errorIcons[i].style.display = "block";
      errorMessages[i].style.display = "block";
    } else if (
      input === emailInput &&
      input.value.trim() !== "" &&
      !emailPattern.test(input.value)
    ) {
      input.classList.add("error");
      errorIcons[i].style.display = "block";
      errorMessages[i].innerText = "Looks like this is not an email";
      errorMessages[i].style.display = "block";
    } else {
      input.classList.add("correct");
    }
    //hide error messages after 3 seconds.
    setTimeout(() => {
      input.classList.remove("error", "correct");
      errorIcons[i].style.display = "none";
      errorMessages[i].style.display = "none";

      input.value = "";
      if (input.id === "first-name") input.placeholder = "First Name";
      if (input.id === "last-name") input.placeholder = "Last Name";
      if (input.id === "email") input.placeholder = "Email Address";
      if (input.id === "password") input.placeholder = "Password";
    }, 3000);
  });
});
