const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector(".loginBtn");

loginBtn.addEventListener("click", function (event) {

    event.preventDefault();
    if (usernameInput.value.trim() === "") {
        usernameInput.setAttribute("required", "");
    } else {
        usernameInput.removeAttribute("required");
    }
    if (passwordInput.value.trim() === "") {
        passwordInput.setAttribute("required", "");
    } else {
        passwordInput.removeAttribute("required");
    }
});

usernameInput.addEventListener("mouseenter", function () {
    username.style.border = "2px solid red";
});

usernameInput.addEventListener("mouseleave", function () {
    username.style.border = "";
});

passwordInput.addEventListener("mouseenter", function () {
    passwordInput.style.border = "2px solid red";
});

passwordInput.addEventListener("mouseleave", function () {
    passwordInput.style.border = "";
});



// task2

const password = document.querySelector(".password-input");
const eyeBtn = document.querySelector(".eye-btn");

eyeBtn.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        eyeBtn.textContent = "🙈";
    } else {
        password.type = "password";
        eyeBtn.textContent = "👁️";
    }

});