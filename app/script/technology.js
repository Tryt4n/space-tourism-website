import slidesMenu from "./nav.js";
import handleAnimation from "./util.js";
slidesMenu();

const technologyTitle = document.querySelector("[data-technology-title]");
const technologyText = document.querySelector("[data-technology-text]");
const technologyImage = document.querySelector("[data-technology-image]");
const sliderDigit1 = document.querySelector("[data-slider-digit-1]");
const sliderDigit2 = document.querySelector("[data-slider-digit-2]");
const sliderDigit3 = document.querySelector("[data-slider-digit-3]");

const technologyElements = [technologyTitle, technologyText, technologyImage];
const sliders = [sliderDigit1, sliderDigit2, sliderDigit3];

const URL = "data.json";

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((items) => {
    const technologyData = items.technology;
    displayData(0);
    sliders.map(handleSliders);

    function displayData(numberOfElement) {
      technologyTitle.textContent = technologyData[numberOfElement].name;
      technologyText.textContent = technologyData[numberOfElement].description;

      if (window.innerWidth > 1440) {
        technologyImage.src = `${technologyData[numberOfElement].images.portrait}`;
      } else {
        technologyImage.src = `${technologyData[numberOfElement].images.landscape}`;
      }
      technologyImage.alt = `${technologyData[numberOfElement].name} Picture`;
    }

    function handleSliders(sliderElement) {
      sliderElement.addEventListener("click", handleClick);
      sliderElement.addEventListener("keydown", handleKeyDown);

      function handleClick() {
        if (!sliderElement.classList.contains("active")) {
          displayData(sliders.indexOf(sliderElement));
          sliders.forEach((slider) => {
            slider.disabled = false;
            slider.tabIndex = "0";
            slider.removeAttribute("aria-disabled");
            if (slider.classList.contains("active")) {
              slider.classList.remove("active");
            }
            handleAnimation(technologyElements);
          });
          sliderElement.disabled = true;
          sliderElement.classList.add("active");
          sliderElement.tabIndex = "-1";
          sliderElement.setAttribute("aria-disabled", "true");
        }
      }

      function handleKeyDown(e) {
        if (e.key === "Enter") {
          handleClick();
        }
      }
    }
  });
