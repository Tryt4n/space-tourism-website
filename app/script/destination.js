// const URL = "data.json";

// const planetName = document.querySelector("[data-planet-name]");
// const planetDescription = document.querySelector("[data-planet-description]");
// const planetDistance = document.querySelector("[data-planet-distance]");
// const planetTime = document.querySelector("[data-planet-time]");
// const planetImage = document.querySelector("[data-planet-image]");
// const planetDistanceSubtitle = document.querySelector("[data-planet-distance-subtitle]");
// const planetTimeSubtitle = document.querySelector("[data-planet-time-subtitle]");

// export default function fetchData() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((items) => {
//       // console.log(items);

//       const destinationObject = items.destinations;
//       //   console.log(destinationObject);

//       destinationObject.forEach((item) => {
//         const planets = document.querySelectorAll(`[data-destination-${item.name}]`);
//         // console.log(planets);

//         planets.forEach((planet) => {
//           planet.addEventListener("click", () => {
//             if (planet.classList.contains("active")) return;

//             handleActiveStates(planet);

//             const planetElements = [
//               planetName,
//               planetDescription,
//               planetDistance,
//               planetTime,
//               planetImage,
//               planetDistanceSubtitle,
//               planetTimeSubtitle,
//             ];

//             planetName.textContent = item.name;
//             planetDescription.textContent = item.description;
//             planetDistance.textContent = item.distance;
//             planetTime.textContent = item.travel;
//             planetImage.src = `/app${item.images.png}`;
//             planetImage.srcset = `/app${item.images.webp}`;

//             planetElements.forEach((element) => fadeOut(element));
//             setTimeout(() => {
//               planetElements.forEach((element) => fadeIn(element));
//             }, 300);
//           });
//         });
//       });
//     });
// }
// function fadeIn(element) {
//   if (element.classList.contains("fadeOut")) {
//     element.classList.remove("fadeOut");
//   }
//   element.classList.add("fadeIn");
// }

// function fadeOut(element) {
//   if (element.classList.contains("fadeIn")) {
//     element.classList.remove("fadeIn");
//   }
//   element.classList.add("fadeOut");
// }

// const moon = document.querySelector("[data-destination-moon]");
// const mars = document.querySelector("[data-destination-mars]");
// const europa = document.querySelector("[data-destination-europa]");
// const titan = document.querySelector("[data-destination-titan]");

// const planets = [moon, mars, europa, titan];

// function handleActiveStates() {
//   planets.forEach((planet) => {
//     planet.addEventListener("click", () => {
//       planets.forEach((planet) => {
//         planet.classList.remove("active");
//       });
//       planet.classList.add("active");
//       fetchData();
//     });
//   });
// }

const URL = "data.json";

const planetName = document.querySelector("[data-planet-name]");
const planetDescription = document.querySelector("[data-planet-description]");
const planetDistance = document.querySelector("[data-planet-distance]");
const planetTime = document.querySelector("[data-planet-time]");
const planetImage = document.querySelector("[data-planet-image]");
const planetDistanceSubtitle = document.querySelector("[data-planet-distance-subtitle]");
const planetTimeSubtitle = document.querySelector("[data-planet-time-subtitle]");

const moon = document.querySelector("[data-destination-moon]");
const mars = document.querySelector("[data-destination-mars]");
const europa = document.querySelector("[data-destination-europa]");
const titan = document.querySelector("[data-destination-titan]");

const planets = [moon, mars, europa, titan];

const planetElements = [
  planetName,
  planetDescription,
  planetDistance,
  planetTime,
  planetImage,
  planetDistanceSubtitle,
  planetTimeSubtitle,
];

export default function fetchData() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((items) => {
      const destinationObject = items.destinations;

      destinationObject.forEach((item) => {
        const planets = document.querySelectorAll(`[data-destination-${item.name}]`);

        planets.forEach((planet) => {
          planet.addEventListener("click", () => {
            if (planet.classList.contains("active")) return;

            handleActiveStates(planet);

            planetName.textContent = item.name;
            planetDescription.textContent = item.description;
            planetDistance.textContent = item.distance;
            planetTime.textContent = item.travel;
            planetImage.src = `/app${item.images.png}`;
            planetImage.srcset = `/app${item.images.webp}`;

            planetElements.forEach((element) => fadeOut(element));
            setTimeout(() => {
              planetElements.forEach((element) => fadeIn(element));
            }, 300);
          });
        });
      });
    });
}

function handleActiveStates() {
  planets.forEach((planet) => {
    planet.addEventListener("click", () => {
      planets.forEach((planet) => {
        planet.classList.remove("active");
      });
      planet.classList.add("active");
      fetchData();
    });
  });
}

function fadeIn(element) {
  if (element.classList.contains("fadeOut")) {
    element.classList.remove("fadeOut");
  }
  element.classList.add("fadeIn");
}

function fadeOut(element) {
  if (element.classList.contains("fadeIn")) {
    element.classList.remove("fadeIn");
  }
  element.classList.add("fadeOut");
}
