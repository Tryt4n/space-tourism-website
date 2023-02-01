import slidesMenu from "./nav.js";
slidesMenu();

const exploreBtn = document.querySelector("[data-explore-btn]");

if (exploreBtn) {
  exploreBtn.addEventListener("click", () => {
    window.location.href = "destination.html";
  });
}
