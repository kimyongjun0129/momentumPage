const API_KEY = "beb7a188a0aca37167ac6a4c4589634b";
const weatherForm = document.querySelector("#weather");

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang={kr}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temperatual = document.querySelector("#weather div span");
            const city = document.querySelector("#weather > span");
            city.innerText = data.name;
            temperatual.innerText = `${data.main.temp}℃`;

            // 날씨 아이콘 추가
            const iconElement = weatherIcon(data.weather[0].main);
            weatherForm.querySelector("div").insertBefore(iconElement, weatherForm.querySelector("div").firstChild);
        });
}

function onGeoError() {
    alert("찾을 수 없습니다!");
}

function weatherIcon(weather) {
    const icon = document.createElement("i"); // 아이콘 요소 생성
    
    if (weather === "Clear") {
        icon.className = "fa-solid fa-sun"; // 맑은 날
    } else if (weather === "Clouds") {
        icon.className = "fa-solid fa-cloud"; // 흐린 날
    } else if (weather === "Rain") {
        icon.className = "fa-solid fa-cloud-showers-heavy"; // 비
    } else if (weather === "Snow") {
        icon.className = "fa-solid fa-snowflake"; // 눈
    } else if (weather === "Thunderstorm") {
        icon.className = "fa-solid fa-bolt"; // 천둥
    } else if (weather === "Drizzle") {
        icon.className = "fa-solid fa-cloud-rain"; // 이슬비
    } else if (weather === "Mist" || weather === "Fog") {
        icon.className = "fa-solid fa-smog"; // 안개
    } else {
        icon.className = "fas fa-question-circle"; // 알 수 없는 날씨
    }

    return icon;
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
