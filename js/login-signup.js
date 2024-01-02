function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove("form-message-success", "form-message-error");
    messageElement.classList.add(`form-message-${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const termsCheckbox = document.querySelector("#termsCheckbox");
    const createAccountButton = document.querySelector("#createAccount .form-button");
    const passwordInput = document.querySelector("#createAccount input[type='password']");
    const confirmPasswordInput = document.querySelector("#createAccount .confirm-password");
    const formInputs = document.querySelectorAll("#createAccount input[type='text'], #createAccount input[type='password'], #termsCheckbox");

    function validateForm() {
        let allFieldsFilled = true;

        formInputs.forEach(input => {
            if (input.value.trim() === '' && input !== termsCheckbox) {
                allFieldsFilled = false;
            }
        });

        const passwordsMatch = passwordInput.value === confirmPasswordInput.value;
        const termsChecked = termsCheckbox.checked;

        if (allFieldsFilled && passwordsMatch && termsChecked) {
            createAccountButton.disabled = false;
            createAccountButton.classList.remove("form-button-disabled");
        } else {
            createAccountButton.disabled = true;
            createAccountButton.classList.add("form-button-disabled");
        }
    }

    function checkPasswordsMatch() {
        if (confirmPasswordInput.value !== "" && passwordInput.value !== confirmPasswordInput.value) {
            setInputError(confirmPasswordInput, "Passwords do not match");
        } else {
            clearInputError(confirmPasswordInput);
        }
        validateForm();
    }
    
    formInputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });

    document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });


    document.querySelector("#linkLogin").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

    

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        setFormMessage(loginForm, "error", "Invalid username/password");
    });

    termsCheckbox.addEventListener("change", validateForm);
    passwordInput.addEventListener("input", checkPasswordsMatch);
    confirmPasswordInput.addEventListener("input", checkPasswordsMatch);

    validateForm();
});
