const { compareSync } = require("bcrypt");

async function login() {
    loginOrCreate(`/api/auth/login`);
}

async function signUp() {
    loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#username')?.value;
    const password = document.querySelector('#password')?.value;
    console.log(`credentials ${userName} ${password}`);
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
      console.log("existing user or incorrect credentials");
    }
  }