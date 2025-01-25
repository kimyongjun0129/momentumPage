const imgages = ["city.jpg", "city2.jpg", "car.jpg", "car2.jpg", "car3.jpg", "lamborghini.jpg","landscape.jpg", "landscape2.jpg", "star.jpg"];

const chosenImage = Math.floor(Math.random() * imgages.length);

const bgImage = document.createElement("img");
bgImage.src=`img/${imgages[chosenImage]}`;
bgImage.id = "backgroundImage";

document.body.appendChild(bgImage);