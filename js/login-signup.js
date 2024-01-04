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
    const loginEmailInput = document.querySelector("#login input[type='text']");
    const loginPasswordInput = document.querySelector("#login input[type='password']");
    const termsCheckbox = document.querySelector("#termsCheckbox");
    const createAccountButton = document.querySelector("#createAccount .form-button");
    const passwordInput = document.querySelector("#createAccount input[type='password']");
    const confirmPasswordInput = document.querySelector("#createAccount .confirm-password");
    const signupUsername = document.querySelector("#signupUsername");
    const emailInput = document.querySelector("#createAccount input[type='email']");
    const formInputs = document.querySelectorAll("#createAccount input[type='text'], #createAccount input[type='password'], #termsCheckbox");
    


    //kY VALIDIM ESHTE I THJESHT
    // loginForm.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     setFormMessage(loginForm, "error", "Invalid username/password");
    // });

    
    //Ky validim e kontrollon a jan email dhe password te njejta me te dhenat statike me poshte
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const loginEmail = loginEmailInput.value.trim();
        const loginPassword = loginPasswordInput.value;

        if (loginEmail === 'projekti@ueb1.fiek' && loginPassword === 'FIEK2024*') {
            window.location.href = "home.html"; // Redirect to home.html for successful login
        } else {
            setFormMessage(loginForm, "error", "Wrong email/password combination");
        }
    });
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
    
    signupUsername.addEventListener("blur", (e) => {
        if (e.target.value.length > 0 && e.target.value.length < 8) {
            setInputError(signupUsername, "Username must be at least 8 characters");
        } else {
            clearInputError(signupUsername);
        }

        validateForm();
    });

    passwordInput.addEventListener("blur", (e) => {
        if (e.target.value.length > 0 && e.target.value.length < 8) {
            setInputError(passwordInput, "Password must be at least 8 characters");
        } else {
            clearInputError(passwordInput);
        }

        validateForm();
    });

    emailInput.addEventListener("blur", (e) => {
        const emailValue = e.target.value.trim();
        if (!emailValue.includes('@')) {
            setInputError(emailInput, "Please write a valid email");
        } else {
            clearInputError(emailInput);
        }

        validateForm();
    });


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

    

    termsCheckbox.addEventListener("change", validateForm);
    passwordInput.addEventListener("input", checkPasswordsMatch);
    confirmPasswordInput.addEventListener("input", checkPasswordsMatch);
    validateForm();

    const dropZone = document.getElementById('dropZone');
    const verificationResult = document.getElementById('verificationResult');
    const draggableImage = document.getElementById('draggable-image')

    draggableImage.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', this.id);
    });

    dropZone.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    dropZone.addEventListener('drop', function (e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(data);
        if (draggedElement === draggableImage) {
            this.appendChild(draggedElement); // Append the draggableFigure to dropZone
            verificationResult.textContent = 'You are human!';
        }
    });
});
function openPopup() {
    document.getElementById('termsPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('termsPopup').style.display = 'none';
}