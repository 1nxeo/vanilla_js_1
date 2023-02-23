const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector("input");

function handleLoginSubmit(event){
    event.preventDefault();
    console.log(event);
}

loginForm.addEventListener("submit", handleLoginSubmit);
