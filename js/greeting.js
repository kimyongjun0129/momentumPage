const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const hidden_clock = document.querySelector("#clock");
const hidden_todolist = document.querySelector("#todo-list");
const hidden_weather = document.querySelector("#weather");
const hidden_quote = document.querySelector("#quote");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function removeHiddenClass() {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    hidden_clock.classList.remove(HIDDEN_CLASSNAME);
    hidden_quote.classList.remove(HIDDEN_CLASSNAME);
    hidden_todolist.classList.remove(HIDDEN_CLASSNAME);
    hidden_weather.classList.remove(HIDDEN_CLASSNAME);
}

function timeOfTheDay() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    if(localStorage.getItem("whattime") != null) {
        greeting.innerText = `${localStorage.getItem("whattime")}, ${savedUsername}.`;
    } else {
        greeting.innerText = `반갑습니다, ${savedUsername}.`;
    }
}

function onLoginSubmit(event) {
    const username = loginInput.value;

    event.preventDefault();
    removeHiddenClass();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    timeOfTheDay();
}

loginForm.addEventListener("submit", onLoginSubmit);


function usernamePainting(){
    removeHiddenClass();
    timeOfTheDay(savedUsername);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
} else {
    usernamePainting();
    setTimeout(timeOfTheDay, 50);
}
