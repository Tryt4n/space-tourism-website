import slidesMenu from "./nav.js";
import handleAnimation from "./util.js";
slidesMenu();

const crewType = document.querySelector("[data-crew-type]");
const crewName = document.querySelector("[data-crew-name]");
const crewText = document.querySelector("[data-crew-text]");
const crewImage = document.querySelector("[data-crew-image]");
const sliderDot1 = document.querySelector("[data-slider-dot-1]");
const sliderDot2 = document.querySelector("[data-slider-dot-2]");
const sliderDot3 = document.querySelector("[data-slider-dot-3]");
const sliderDot4 = document.querySelector("[data-slider-dot-4]");

const crewElements = [crewType, crewName, crewText, crewImage];
const sliders = [sliderDot1, sliderDot2, sliderDot3, sliderDot4];

const URL = "data.json";

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((items) => {
    const crewData = items.crew;
    displayData(0);
    sliders.map(handleSliders);

    function displayData(numberOfElement) {
      crewType.textContent = crewData[numberOfElement].role;
      crewName.textContent = crewData[numberOfElement].name;
      crewText.textContent = crewData[numberOfElement].bio;
      crewImage.src = `${crewData[numberOfElement].images.png}`;
      crewImage.srcset = `${crewData[numberOfElement].images.webp}`;
      crewImage.alt = `${crewData[numberOfElement].name} Picture`;
      sliderDot1.disabled = true;
    }

    function handleSliders(sliderElement) {
      sliderElement.addEventListener("click", () => {
        displayData(sliders.indexOf(sliderElement));
        sliders.forEach((slider) => {
          slider.disabled = false;
        });
        sliderElement.disabled = true;

        handleAnimation(crewElements);
      });
    }
  });
