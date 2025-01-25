(() => {
    const clock = document.querySelector("#clock");
})

function whatTime(date) {
    if(date >= 18) return "Good Evening";
    else if(date >= 12) return "Good Afternoon";
    else if(date >= 6) return "Good Morning";
    else if(date >= 0) return "Good Night";
}

function getClock() {
    const date = new Date();
    localStorage.setItem("whattime", whatTime(date.getHours()));
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    clock.innerText = `${hour}:${minute}`;
}

getClock();
setInterval(getClock, 1000);