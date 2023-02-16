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
        this.validateElement(e.target);
        if (e.target.type === "email") {
          this.validateEmail();
        }
        if (e.target.id === "password") {
          this.validatePassword();
        }
        if (e.target.id === "confirm-password") {
          this.validateConfirmPassword();
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

    errorDisplay.innerText = message;
    errorDisplay.classList.remove("form__success");
  }

  setSuccess(e) {
    const inputControl = e.parentElement;
    const errorDisplay = inputControl.querySelector(".form__error");

    errorDisplay.innerText = "";
    errorDisplay.classList.add("form__success");
  }

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

export { FormLogic };
