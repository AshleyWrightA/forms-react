class FormLogic {
  constructor() {
    this.form = document.querySelector(".form");
    this.firstName = document.querySelector(".first-name");
    this.lastName = document.querySelector(".last-name");
    this.email = document.querySelector(".email");
    this.phone = document.querySelector(".phone");
    this.password = document.querySelector(".password");
    this.confirmPassword = document.querySelector(".confirm-password");
  }

  setEventListeners() {
    const formElements = document.querySelectorAll(".form__input");
    formElements.forEach((e) => {
      e.addEventListener("blur", (e) => {
        e.preventDefault();
        if (e.target.type === "email") {
          this.validateEmail(e.target);
        } else if (e.target.id === "password") {
          this.validatePassword();
        } else if (e.target.id === "confirm-password") {
          this.validateConfirmPassword();
        } else {
          this.validateElement(e.target);
        }
      });
    });
  }

  validateElement(e) {
    const elementValue = e.value.trim();
    if (elementValue === "") {
      this.setError(e, `${e.parentElement.firstChild.textContent} required`);
    } else {
      this.setSuccess(e);
    }
  }

  validatePassword() {
    if (this.password.value.length < 10) {
      this.setError(this.password, "Password must be 10 characters long");
    } else {
      this.setSuccess(this.password);
    }
  }

  validateConfirmPassword() {
    if (this.password.value < 10) {
      this.setError(this.confirmPassword, "");
    } else if (this.password.value !== this.confirmPassword.value) {
      this.setError(this.confirmPassword, "Passwords must match!");
    } else {
      this.setSuccess(this.confirmPassword);
    }
  }

  setError(e, message) {
    const inputControl = e.parentElement;
    const errorDisplay = inputControl.querySelector(".form__error");

    e.required = true;
    e.classList.remove("valid");

    errorDisplay.innerText = message;
  }

  setSuccess(e) {
    const inputControl = e.parentElement;
    const errorDisplay = inputControl.querySelector(".form__error");

    errorDisplay.innerText = "";
    e.required = false;
    e.classList.add("valid");
  }

  validateEmail(email) {
    const emailValue = email.value.trim();
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailValue === "") {
      this.setError(email, `${email.parentElement.firstChild.textContent} required`);
    } else if (!regex.test(String(email.value).toLowerCase())) {
      this.setError(this.email, "Invalid Email");
    } else {
      this.setSuccess(email);
    }
  }
}

export { FormLogic };
