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
var clearbutton = document.querySelector("#clear");

var scores = JSON.parse(window.localStorage.getItem("scores")) || [];

scorebutton.addEventListener("click", function() {
  if (score.style.opacity == 0) {
    score.style.opacity = 1;
  }
  else {
    score.style.opacity = 0;
  }

})

clearbutton.addEventListener("click", function() {
  localStorage.removeItem("scores");
  setscores();
})

// Starting the quiz
var categorybutton = document.querySelector("#catselect")
// var difficultybutton = document.querySelector("#difselect")
var startbutton = document.querySelector("#quizstart")
var restartbutton = document.querySelector("#restart")

// Setting default category 
var category = "none";

// // Setting default difficulty
// var spicelevel = "none";

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
  // var difficultybutton = document.querySelector("#difselect").classList;
  var startbutton = document.querySelector("#quizstart").classList;
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
  // difficultybutton.remove("hide");
  startbutton.remove("hide");
}



// Variables for time
var time = 150;
// var secmult = 0;
var countdown = document.getElementById("timer");
var timer;

function startquiz() {
  // Hiding start of quiz card
  var startscreen = document.querySelector("#startcard").classList;
  startscreen.add("hide");
  var categorybutton = document.querySelector("#catselect").classList;
  var startbutton = document.querySelector("#quizstart").classList;
  categorybutton.remove("hide");
  startbutton.add("hide");
  // Unhiding questions card
  questions.remove("hide");
  // Starting timer
  // timemultiplier();
  // var time = secmult * 5;
  timer = setInterval(clock, 1000);
  countdown.textContent = time;
  loadq();
}


var currentindex = 0;
var choices = document.getElementById("answers");
var rightbox = document.querySelector("#right")

// Function to grab questions depending on category chosen
function loadq() {
  if (category == "code") {
    // Grabbing first question in array
    var currentq = codeQs[currentindex];
    // Adding question to h2 element
    var title = document.getElementById("questiontitle");
    title.textContent = currentq.question;
    // Clear previous choices
    choices.innerHTML = "";
    rightbox.innerHTML = "";

    currentq.options.forEach(function(option, i) {
      var optionbox = document.createElement("button");
      var br = document.createElement("br");
      optionbox.setAttribute("class", "option");
      optionbox.setAttribute("value", option);
      optionbox.textContent = i + 1 + ":" + option;

      optionbox.onclick = codeanswerclick;

      choices.appendChild(optionbox);
      choices.appendChild(br);
    });
    if (currentq.image != "") {
      var img = document.createElement("img");
      img.src = currentq.image;
      document.getElementById("right").appendChild(img);
      rightbox.style.opacity = 1;
    }  
    else {
      rightbox.style.opacity = 0;
    }
    
  }
  else if (category == "marvel") {
    // Grabbing first question in array
    var currentq = marvelQs[currentindex];
    // Adding question to h2 element
    var title = document.getElementById("questiontitle");
    title.textContent = currentq.question;
    // Clear previous choices
    choices.innerHTML = "";
    rightbox.innerHTML = "";

    currentq.options.forEach(function(option, i) {
      var optionbox = document.createElement("button");
      var br = document.createElement("br");
      optionbox.setAttribute("class", "option");
      optionbox.setAttribute("value", option);
      optionbox.textContent = i + 1 + ":" + option;

      optionbox.onclick = marvelanswerclick;

      choices.appendChild(optionbox);
      choices.appendChild(br);
    });
      if (currentq.image != "") {
        var img = document.createElement("img");
        img.src = currentq.image;
        document.getElementById("right").appendChild(img);
        rightbox.style.opacity = 1;
      } 
      else {
        rightbox.style.opacity = 0;
      }
    
  }
  else if (category == "kof") {
    // Grabbing first question in array
    var currentq = kofQs[currentindex];
    // Adding question to h2 element
    var title = document.getElementById("questiontitle");
    title.textContent = currentq.question;
    // Clear previous choices
    choices.innerHTML = "";
    rightbox.innerHTML = "";

    currentq.options.forEach(function(option, i) {
      var optionbox = document.createElement("button");
      var br = document.createElement("br");
      optionbox.setAttribute("class", "option");
      optionbox.setAttribute("value", option);
      optionbox.textContent = i + 1 + ":" + option;

      optionbox.onclick = kofanswerclick;

      choices.appendChild(optionbox);
      choices.appendChild(br);
    });
      if (currentq.image != "") {
        var img = document.createElement("img");
        img.src = currentq.image;
        document.getElementById("right").appendChild(img);
        rightbox.style.opacity = 1;
      }  
      else {
        rightbox.style.opacity = 0;
      }
    
  }
  else if (category == "ff") {
    // Grabbing first question in array
    var currentq = ffQs[currentindex];
    // Adding question to h2 element
    var title = document.getElementById("questiontitle");
    title.textContent = currentq.question;
    // Clear previous choices
    choices.innerHTML = "";
    rightbox.innerHTML = "";

    currentq.options.forEach(function(option, i) {
      var optionbox = document.createElement("button");
      var br = document.createElement("br");
      optionbox.setAttribute("class", "option");
      optionbox.setAttribute("value", option);
      optionbox.textContent = i + 1 + ":" + option;

      optionbox.onclick = ffanswerclick;

      choices.appendChild(optionbox);
      choices.appendChild(br);
      });
      if (currentq.image != "") {
        var img = document.createElement("img");
        img.src = currentq.image;
        document.getElementById("right").appendChild(img);
        rightbox.style.opacity = 1;
      }  
      else {
        rightbox.style.opacity = 0;
      }
    
  }
}

var confirmation = document.getElementById("validation")

// Function to handle validations of answers, but per category to match loaded questions
function codeanswerclick() {
  if (this.value != codeQs[currentindex].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    countdown.textContent = time;

    confirmation.textContent = "WRONG!";
  }
  else {
    confirmation.textContent = "CORRECT!";
  }
  confirmy.remove("hide");
  setTimeout(function(){
    confirmy.add("hide");
  }, 1000);

  currentindex++;

  if (currentindex == codeQs.length) {
    endquiz();
  }
  else {
    loadq();
  }
}

function marvelanswerclick() {
  if (this.value != marvelQs[currentindex].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    countdown.textContent = time;

    confirmation.textContent = "WRONG!";
  }
  else {
    confirmation.textContent = "CORRECT!";
  }
  confirmy.remove("hide");
  setTimeout(function(){
    confirmy.add("hide");
  }, 1000);

  currentindex++;

  if (currentindex == marvelQs.length) {
    endquiz();
  }
  else {
    loadq();
  }
}

function kofanswerclick() {
  if (this.value != kofQs[currentindex].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    countdown.textContent = time;

    confirmation.textContent = "WRONG!";
  }
  else {
    confirmation.textContent = "CORRECT!";
  }
  confirmy.remove("hide");
  setTimeout(function(){
    confirmy.add("hide");
  }, 1000);

  currentindex++;

  if (currentindex == kofQs.length) {
    endquiz();
  }
  else {
    loadq();
  }
}

function ffanswerclick() {
  if (this.value != ffQs[currentindex].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    countdown.textContent = time;

    confirmation.textContent = "WRONG!";
  }
  else {
    confirmation.textContent = "CORRECT!";
  }
  confirmy.remove("hide");
  setTimeout(function(){
    confirmy.add("hide");
  }, 1000);

  currentindex++;

  if (currentindex == ffQs.length) {
    endquiz();
  }
  else {
    loadq();
  }
}

function endquiz() {
  clearInterval(timer);
  rightbox.innerHTML = "";
  rightbox.style.opacity = 0;

  if (category == "code") {
    marvel.remove("hide");
    kof.remove("hide");
    ff.remove("hide");
    var categories = document.querySelector("nav").classList;
    categories.add("hide");
  }
  else if (category == "marvel") {
    code.remove("hide");
    kof.remove("hide");
    ff.remove("hide");
    var categories = document.querySelector("nav").classList;
    categories.add("hide");
  }
  else if (category == "kof") {
    code.remove("hide");
    marvel.remove("hide");
    ff.remove("hide");
    var categories = document.querySelector("nav").classList;
    categories.add("hide");
  }
  else if (category == "ff") {
    code.remove("hide");
    marvel.remove("hide");
    kof.remove("hide");
    var categories = document.querySelector("nav").classList;
    categories.add("hide");
  }

  questions.add("hide");
  results.remove("hide")
  var finalscore = document.getElementById("finalscore");
  finalscore.textContent = time;

}

function clock() {
  // Updating countdown timer
  time--;
  countdown.textContent = time;
  // End quiz if timer hits 0
  if (time <= 0) {
    endquiz();
  }
}

var submitscorebutton = document.getElementById("submitscore")
var initials = document.getElementById("initials");
var highscorelist = document.getElementById("highscores");

submitscorebutton.addEventListener("click", function () {
  
  // Receiving user's input and removing space from beginning and end
  var init = initials.value.trim();

  if (init != "") {
    highscorelist.innerHTML = "";
    var scores = JSON.parse(window.localStorage.getItem("scores")) || [];

    var newscore = {
      score: time,
      initials: init
    };

    scores.push(newscore);
    window.localStorage.setItem("scores", JSON.stringify(scores));
  }

  setscores();  // prolly need to remove this and do a singular update for this to work correctly

  var submission = document.querySelector("#submission").classList
  submission.add("hide")
});



function setscores() {
  highscorelist.innerHTML = "";
  var scores = JSON.parse(window.localStorage.getItem("scores")) || [];

  scores.sort(function(a, b) {
    return b.score - a.score;
  });
  scores.forEach(function(score) {
      var scoreitem = document.createElement("li");
      scoreitem.textContent = score.initials + " -- " + score.score;

      
      highscorelist.appendChild(scoreitem);
  });
}

categorybutton.addEventListener("click", theme);
  // if (category != "none") {
  //   prepareset();
  // }
// difficultybutton.addEventListener("click",spiciness); Removed until I can solidify features
// Removed && spicelevel and adjusted alert to remove difficulty
startbutton.addEventListener("click", function () {
  if (category != "none") {
    startquiz();
  }
  else {
    alert("Please select a category")
  }
});

restartbutton.addEventListener("click", function () {
  window.location.reload();
})