const animationTime = 2000;

export default function handleAnimation(arrayOfElements) {
  arrayOfElements.forEach((element) => {
    if (element.classList.contains("fadeIn")) {
      element.classList.remove("fadeIn");
    }

    element.classList.add("fadeOut");
    setTimeout(() => {
      element.classList.remove("fadeOut");
      element.classList.add("fadeIn");
    }, 0);

    setTimeout(() => {
      element.classList.remove("fadeIn");
    }, animationTime);
  });
}
