const mobileMenu = document.querySelector("[data-nav-menu]");
const hamburgerBtn = document.querySelector("[data-hamburger-btn]");
const closeBtn = document.querySelector("[data-close-btn]");

export default function slideMenu() {
  checkScreenSize();
  slideMenuIn();
  slideMenuOut();
}
window.addEventListener("resize", checkScreenSize);

function checkScreenSize() {
  const mediaQuery = window.matchMedia("(width >= 768px)");
  if (!mediaQuery.matches) {
    handleSlide("inherit", "none", "translate(100%)");
    setTabIndex("1", "-1");
    handleAria(false, true);
    mobileMenu.setAttribute("aria-expanded", false);
  } else {
    handleSlide("none", "none", "translate(0%)");
    setTabIndex("-1", "-1");
    handleAria(true, true);
    mobileMenu.removeAttribute("aria-expanded");
  }
}

function slideMenuIn() {
  hamburgerBtn.addEventListener("click", () => {
    handleSlide("none", "inherit", "translate(0%)");
    setTabIndex("-1", "1");
    handleAria(true, false);
    mobileMenu.setAttribute("aria-expanded", true);
  });
}

function slideMenuOut() {
  closeBtn.addEventListener("click", () => {
    handleSlide("inherit", "none", "translate(100%)");
    setTabIndex("1", "-1");
    handleAria(false, true);
    mobileMenu.setAttribute("aria-expanded", false);
  });
}

function handleSlide(openBtnDisplay, closeBtnDisplay, translate) {
  hamburgerBtn.style.display = openBtnDisplay;
  closeBtn.style.display = closeBtnDisplay;
  mobileMenu.style.transform = translate;
}

function handleAria(btnHamburger, btnClose) {
  hamburgerBtn.setAttribute("aria-hidden", btnHamburger);
  closeBtn.setAttribute("aria-hidden", btnClose);
}

function setTabIndex(btnHamburger, btnClose) {
  hamburgerBtn.setAttribute("tabindex", btnHamburger);
  closeBtn.setAttribute("tabindex", btnClose);
}
