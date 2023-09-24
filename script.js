const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
  try {
    if (document.querySelectorAll(".success").length === 3) {
      window.location.href = "newpage.html";

      setTimeout(() => {
        document.querySelectorAll(".success").forEach((element) => {
          element.classList.remove("success");
          form.reset(); // Reset the form
        });
      }, 1000);
    }
  } catch (err) {
    console.log(err + " at the top");
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^[a-zA-Z0-9@.]+@(gmail\.com|hotmail\.com|carsu\.edu\.ph|yahoo\.com)$/;
  return re.test(String(email).toLowerCase());
};

const isValiUser = (username) => {
  const validUser = /^[a-zA-Z]+$/;
  return validUser.test(String(username).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  try {
    if (usernameValue === "") {
      setError(username, "Username is required");
    } else if (usernameValue.length < 5) {
      setError(username, "Username should have 5 characters");
    } else if (usernameValue.length > 20) {
      setError(username, "Username should not exceed 20 characters");
    } else if (!isValiUser(usernameValue)) {
      setError(username, "Provide a valid user");
    } else {
      setSuccess(username);
    }
  } catch (err) {
    console.log(
      "Woopsie.... " + err + ", try looking in username input validation."
    );
  }
  try {
    if (emailValue === "") {
      setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
      setError(email, "Provide a valid email address");
    } else {
      setSuccess(email);
    }
  } catch (err) {
    console.log(
      "Woopsie.... " + err + ", try looking in email input validation."
    );
  }
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters.");
  } else if (passwordValue.length > 20) {
    setError(password, "Password must be less than 20 characters.");
  } else {
    setSuccess(password);
  }
};
