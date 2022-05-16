const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
let passWordsMatch = false;
let isValid = false;
//no validate html method give you premmision to submit without validate inputs
//but check validate will be always false

function validateForm() {
    //js function  ,using contraint api
    isValid = form.checkValidity();
    // style main message for an error
    if (!isValid) {
        message.textContent = "please fill out all fields";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return;
    }
    //check to see if passwords match
    if (password1El.value === password2El.value) {
        passWordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
        message.textContent = 'passwords  match';
    } else {
        passWordsMatch = false;
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        message.textContent = 'passwords dont match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    if (isValid && passWordsMatch) {
        message.textContent = 'succses register';
        message.style.color = 'green'
        messageContainer.style.borderColor = 'green'
    }
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    if (isValid && passWordsMatch) {
        storeFormData();
    }
}

function storeFormData() {
    const user = {
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            webstie: form.website.value,
            password: form.password.value,
        }
        // Do Some Thing with user date
    console.log(user);

}

// Event Listner
form.addEventListener("submit", processFormData);