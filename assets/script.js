// Various DOM elements needed to access toggle and switch multiple HTML elements
// Needed to use classList so that I could add and remove classes without impeding other classes
var themeSwitcher = document.querySelector("#switchmode");
var body = document.querySelector("body");
var leftcorner = document.querySelector("#leftcorner").classList;
var nav = document.querySelector("nav").classList;
var rightcorner = document.querySelector("#rightcorner").classList;
var asideleft = document.querySelector("#left").classList;
var difficulty = document.querySelector("#diffbox").classList;
var beginning = document.querySelector("#beginning").classList;
var questions = document.querySelector("#questions").classList;
var results = document.querySelector("#results").classList;
var confirmy = document.querySelector("#confirmy").classList;
var asideright = document.querySelector("#right").classList;

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch for dark/light theme
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background, if not, it applies dark background
  if (mode === "dark") {
    mode = "light"
    body.setAttribute("class", "light");
    leftcorner.replace("darkcont", "lightcont");
    nav.replace("darkcont", "lightcont");
    rightcorner.replace("darkcont", "lightcont");
    asideleft.replace("darkcont", "lightcont");
    difficulty.replace("darkcont", "lightcont");
    beginning.replace("darkcont", "lightcont");
    questions.replace("darkcont", "lightcont");
    results.replace("darkcont", "lightcont");
    confirmy.replace("darkcont", "lightcont");
    asideright.replace("darkcont", "lightcont");
  }

  else {
    mode = "dark"
    body.setAttribute("class", "dark");
    leftcorner.replace("lightcont", "darkcont");
    nav.replace("lightcont", "darkcont");
    rightcorner.replace("lightcont", "darkcont");
    asideleft.replace("lightcont", "darkcont");
    difficulty.replace("lightcont", "darkcont");
    beginning.replace("lightcont", "darkcont");
    questions.replace("lightcont","darkcont")
    results.replace("lightcont", "darkcont")
    confirmy.replace("lightcont", "darkcont");
    asideright.replace("lightcont", "darkcont");
  }
});

// Toggle for high score, found hide/unhide toggle on w3schools. adjusted for opacity instead of display
var scorebutton = document.querySelector(".score");
var score = document.querySelector("#left");

scorebutton.addEventListener("click", function() {
  if (score.style.opacity == 0) {
    score.style.opacity = 1;
  }
  else {
    score.style.opacity = 0;
  }
})

// Starting the quiz
var categorybutton = document.querySelector("#catselect")
var difficultybutton = document.querySelector("#difselect")
var startbutton = document.querySelector("#quizstart")

// Setting default category 
var category = "none";

// Setting default difficulty
var spicelevel = "none";

// Function for setting category mode
function theme() {
  // Variables to hide buttons after selection
  var code = document.querySelector("#code").classList;
  var marvel = document.querySelector("#marvel").classList;
  var kof = document.querySelector("#kof").classList;
  var ff = document.querySelector("#ff").classList;
  // Variables for buttons that EventListener can target
  var codebutton = document.getElementById("code")
  var marvelbutton = document.getElementById("marvel")
  var kofbutton = document.getElementById("kof")
  var ffbutton = document.getElementById("ff")
  // Hiding/unhiding start buttons
  var categorybutton = document.querySelector("#catselect").classList;
  var difficultybutton = document.querySelector("#difselect").classList;
  // Unhiding categories
  var categories = document.querySelector("nav").classList;
  categories.remove("hide");
  // Each button will change the category and hide the other buttons that weren't selected and then move on to difficulty
  codebutton.addEventListener("click", function(){
    category = "code";
    marvel.add("hide");
    kof.add("hide");
    ff.add("hide");
  })
  marvelbutton.addEventListener("click", function(){
    category = "marvel";
    code.add("hide");
    kof.add("hide");
    ff.add("hide");
  })
  kofbutton.addEventListener("click", function(){
    category = "kof";
    code.add("hide");
    marvel.add("hide");
    ff.add("hide");
  })
  ffbutton.addEventListener("click", function(){
    category = "ff";
    code.add("hide");
    marvel.add("hide");
    kof.add("hide");;
  })
  categorybutton.add("hide");
  difficultybutton.remove("hide");
}

// Function for setting difficilty level
function spiciness() {
  // Variables to hide buttons after selection
  var easy = document.querySelector("#easy").classList;
  var medium = document.querySelector("#medium").classList;
  var hard = document.querySelector("#hard").classList;
  // Variables for buttons that EventListener can target
  var easybutton = document.getElementById("easy")
  var mediumbutton = document.getElementById("medium")
  var hardbutton = document.getElementById("hard")
  // Hiding/unhiding start buttons
  var difficultybutton = document.querySelector("#difselect").classList;
  var startbutton = document.querySelector("#quizstart").classList;
  // Unhiding difficulties
  var difficultychoice = document.querySelector("#diffbox").classList;
  difficultychoice.remove("hide");
  // Each button will change the difficulty level and hide the other buttons and then reveal questions for the quiz
  easybutton.addEventListener("click", function(){
    spicelevel = "easy";
    medium.add("hide");
    hard.add("hide");
  })
  mediumbutton.addEventListener("click", function(){
    spicelevel = "medium";
    easy.add("hide");
    hard.add("hide");
  })
  hardbutton.addEventListener("click", function(){
    spicelevel = "hard";
    easy.add("hide");
    medium.add("hide");
  })
  difficultybutton.add("hide");
  startbutton.remove("hide");
}


function startquiz() {
  // Hiding start of quiz card
  var startscreen = document.querySelector("#startcard").classList;
  startscreen.add("hide");

  // Selecting theme of quiz
  loadquestions();
}

// Function for determining total time per questions
function timemultiplier() {

 if (spicelevel == "easy") {
  secmult = 3;
 }
 else if (spicelevel == "medium") {
   secmult = 2;
 }
 else if (spicelevel == "hard") {
   secmult = 1;
 }
 else {
   return
 }
}

// Variables for time
var time = 20;
var secmult = 0;
var countdown = document.getElementById("timer");
var timer;

function loadquestions() {
  theme();


  // Starting timer
  timemultiplier();
  var time = secmult * 5;
  timer = setInterval(clock, 1000);
  countdown.textContent = time;


}

function clock() {
  // Updating countdown timer
  time--;
  countdown.textContent = time;

  // Need to add logic here that pushes to next question when timer is 0

}

categorybutton.addEventListener("click",theme);
difficultybutton.addEventListener("click",spiciness);
startbutton.addEventListener("click", function () {
  if (category && spicelevel != "none") {
    startquiz();
  }
  else {
    alert("Please select both a category and difficulty")
  }
});