function login() {
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");

    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    if(usernameInput.value == username && passwordInput.value == password){
        window.location.href = "schedule.html";
    } 
}

function signUp() {
    const username = document.querySelector("#username");
    localStorage.setItem("username", username.value);

    const password = document.querySelector("#password");
    localStorage.setItem("password", password.value);

    window.location.href = "schedule.html";
}