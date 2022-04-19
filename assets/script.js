// Variables needed to access toggle and switch multiple HTML elements
var themeSwitcher = document.querySelector("#switchmode");
var body = document.querySelector("body");
var leftcorner = document.querySelector("#leftcorner");
var nav = document.querySelector("nav");
var rightcorner = document.querySelector("#rightcorner");
var asideleft = document.querySelector("#left");
var difficulty = document.querySelector("#difficulty");
var quizbody = document.querySelector("#quizbody");
var confirmy = document.querySelector("#confirmy");
var asideright = document.querySelector("#right");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background, if not, it applies dark background
  if (mode === "dark") {
    mode = "light"
    body.setAttribute("class", "light");
    leftcorner.setAttribute("class", "lightcont");
    nav.setAttribute("class", "lightcont");
    rightcorner.setAttribute("class", "lightcont");
    asideleft.setAttribute("class", "lightcont");
    difficulty.setAttribute("class", "lightcont");
    quizbody.setAttribute("class", "lightcont");
    confirmy.setAttribute("class", "lightcont");
    asideright.setAttribute("class", "lightcont");
  }

  else {
    mode = "dark"
    body.setAttribute("class", "dark");
    leftcorner.setAttribute("class", "darkcont");
    nav.setAttribute("class", "darkcont");
    rightcorner.setAttribute("class", "darkcont");
    asideleft.setAttribute("class", "darkcont");
    difficulty.setAttribute("class", "darkcont");
    quizbody.setAttribute("class", "darkcont");
    confirmy.setAttribute("class", "darkcont");
    asideright.setAttribute("class", "darkcont");
  }
});

// Toggle for high score, found hide/unhide toggle on w3schools. adjusted for opacity instead of display
var scorebutton = document.querySelector(".score")
var score = document.querySelector("#left");

scorebutton.addEventListener("click", function() {
  if (score.style.opacity == 0) {
    score.style.opacity = 1;
  }
  else {
    score.style.opacity = 0;
  }
})
