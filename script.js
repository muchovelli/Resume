const hamburgerBtn = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const shadow = document.querySelector(".shadow");

let isNavigationActive = false;

hamburgerBtn.addEventListener("click", () => {
  isNavigationActive = !isNavigationActive;
  hamburgerBtn.classList.toggle("active");
  navigation.classList.toggle("active");
  shadow.classList.toggle("active");
  document.body.style.overflow = isNavigationActive ? "hidden" : "auto";
});
