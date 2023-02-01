import slidesMenu from "./nav.js";
import handleAnimation from "./util.js";
slidesMenu();

const planetName = document.querySelector("[data-planet-name]");
const planetDescription = document.querySelector("[data-planet-description]");
const planetDistance = document.querySelector("[data-planet-distance]");
const planetTime = document.querySelector("[data-planet-time]");
const planetImage = document.querySelector("[data-planet-image]");
const planetDistanceSubtitle = document.querySelector("[data-planet-distance-subtitle]");
const planetTimeSubtitle = document.querySelector("[data-planet-time-subtitle]");

const btnMoon = document.querySelector("[data-destination-moon]");
const btnMars = document.querySelector("[data-destination-mars]");
const btnEuropa = document.querySelector("[data-destination-europa]");
const btnTitan = document.querySelector("[data-destination-titan]");

const planetElements = [
  planetName,
  planetDescription,
  planetDistance,
  planetTime,
  planetImage,
  planetDistanceSubtitle,
  planetTimeSubtitle,
];
const planetButtons = [btnMoon, btnMars, btnEuropa, btnTitan];

const URL = "data.json";

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const destinationData = data.destinations;
    displayData(0);
    planetButtons.map(handlePlanetButtons);

    function displayData(planetElement) {
      planetButtons.map((btn, index) => {
        btn.textContent = destinationData[index].name;
      });
      planetName.textContent = destinationData[planetElement].name;
      planetDescription.textContent = destinationData[planetElement].description;
      planetDistance.textContent = destinationData[planetElement].distance;
      planetTime.textContent = destinationData[planetElement].travel;
      planetImage.src = `${destinationData[planetElement].images.png}`;
      planetImage.srcset = `${destinationData[planetElement].images.webp}`;
      planetImage.alt = `${destinationData[planetElement].name} Picture`;
    }

    function handlePlanetButtons(planetButtonElement) {
      planetButtonElement.addEventListener("click", handleClick);
      planetButtonElement.addEventListener("keydown", handleKeyDown);

      function handleClick() {
        if (!planetButtonElement.classList.contains("active")) {
          displayData(planetButtons.indexOf(planetButtonElement));
          planetButtons.forEach((btn) => {
            btn.classList.remove("active");
            btn.tabIndex = "0";
            btn.removeAttribute("aria-disabled");
            handleAnimation(planetElements);
          });
          planetButtonElement.classList.add("active");
          planetButtonElement.tabIndex = "-1";
          planetButtonElement.setAttribute("aria-disabled", "true");
        }
      }

      function handleKeyDown(e) {
        if (e.key === "Enter") {
          handleClick();
        }
      }
    }
  });
