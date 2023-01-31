const exploreBtn = document.querySelector("[data-explore-btn]");

export default function changePageOnBtn() {
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      window.location.href = "destination.html";
    });
  }
}
