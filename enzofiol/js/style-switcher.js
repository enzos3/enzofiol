const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
const Is = localStorage;

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
  if (dayNight.querySelector("i").classList.value === "fas fa-sun") {
    localStorage.setItem("theme", "dark");
  }
  if (dayNight.querySelector("i").classList.value === "fas fa-moon") {
    localStorage.setItem("theme", "light");
  }

  console.log(dayNight.querySelector("i").classList.value);
  console.log(localStorage);
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "light") {
    dayNight.querySelector("i").classList = "fas fa-moon";
  }
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList = "fas fa-sun";
  }
});

console.log(document.querySelectorAll(".alternate-style").outerHTML);

const colorSelector = document.querySelectorAll(".alternate-style");

function colorFunction() {
  document.querySelectorAll(".alternate-style").outerHTML === "disabled"
    ? console.log("Contiene")
    : console.log("No ciente");
}

colorFunction();
