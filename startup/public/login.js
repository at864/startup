async function login() {
    loginOrCreate(`/api/auth/login`);


    // const usernameInput = document.querySelector("#username");
    // const passwordInput = document.querySelector("#password");

    // const username = localStorage.getItem("username");
    // const password = localStorage.getItem("password");

    // if(usernameInput.value == username && passwordInput.value == password){
    //     window.location.href = "schedule.html";
    // } 
}

async function signUp() {
    loginOrCreate(`/api/auth/create`);

    // const username = document.querySelector("#username");
    // localStorage.setItem("username", username.value);

    // const password = document.querySelector("#password");
    // localStorage.setItem("password", password.value);

    // window.location.href = "schedule.html";
}

async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#username')?.value;
    const password = document.querySelector('#password')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (response.ok) {
      localStorage.setItem('username', userName);
      window.location.href = 'schedule.html';
    } else {
      console.log("nope");
    }
  }