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

// Various variables used for score buttons and sheet
var scorebutton = document.querySelector(".score");
var score = document.querySelector("#left");
var clearbutton = document.querySelector("#clear");
var scores = JSON.parse(window.localStorage.getItem("scores")) || [];

// Toggle for high score, found hide/unhide toggle on w3schools. adjusted for opacity instead of display
scorebutton.addEventListener("click", function() {
  if (score.style.opacity == 0) {
    score.style.opacity = 1;
  }
  else {
    score.style.opacity = 0;
  }

})

// Function and event listener to clear score and repopulate element
clearbutton.addEventListener("click", function() {
  localStorage.removeItem("scores");
  setscores();
})

// Various variables for the buttons that start/restart quiz
var categorybutton = document.querySelector("#catselect")
var startbutton = document.querySelector("#quizstart")
var restartbutton = document.querySelector("#restart")

// Setting default category 
var category = "none";

// Function for setting category mode based on user selection
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
  var startbutton = document.querySelector("#quizstart").classList;
  // Unhiding categories
  var categories = document.querySelector("nav").classList;
  categories.remove("hide");
  // Each button will change the category and hide the other buttons that weren't selected and then move on to start quiz
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
  startbutton.remove("hide");
}



// Variables for setting default time, setting the countdown, and updating variable
var time = 100;
var countdown = document.getElementById("timer");
var timer;

// Function to start quiz after category has been selected and the start button is pressed
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
  timer = setInterval(clock, 1000);
  countdown.textContent = time;
  // Loading questions from corresponding category once settings are set
  loadq();
}

// Various variables used during the duration of the questions portion of the quiz
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

    // Creating a button for every answer
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
    // Setting to toggle and append images for corresponding questions if applicable
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

    // Creating a button for every answer
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
      // Setting to toggle and append images for corresponding questions if applicable
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

    // Creating a button for every answer
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
      // Setting to toggle and append images for corresponding questions if applicable
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

    // Creating a button for every answer
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
      // Setting to toggle and append images for corresponding questions if applicable
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

// Variable to call on element with right/wrong confirmation after selecting an answer
var confirmation = document.getElementById("validation")

// Function to handle validations of answers, but per category to match loaded questions
function codeanswerclick() {
  // Penalty of losing time for answering wrong
  if (this.value != codeQs[currentindex].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }
    // Readjusts timer once penalty is applied
    countdown.textContent = time;
    // Applies text when answer is wrong
    confirmation.textContent = "WRONG!";
  }
  else {
    // Applies text when answer is right
    confirmation.textContent = "CORRECT!";
  }
  // Remove hide from element so user can see if they were right or wrong, lasts 2 seconds, then hides again
  confirmy.remove("hide");
  setTimeout(function(){
    confirmy.add("hide");
  }, 2000);
  // Increased index count so that next question is populated
  currentindex++;
  // Ends the quiz if the index is equal to max amount of questions in array, or loads new question if it isn't
  if (currentindex == codeQs.length) {
    endquiz();
  }
  else {
    loadq();
  }
}

function marvelanswerclick() {
  // Penalty of losing time for answering wrong
  if (this.value != marvelQs[currentindex].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }
    // Readjusts timer once penalty is applied
    countdown.textContent = time;
    // Applies text when answer is wrong
    confirmation.textContent = "WRONG!";
  }
  else {
    // Applies text when answer is right
    confirmation.textContent = "CORRECT!";
  }
  // Remove hide from element so user can see if they were right or wrong, lasts 2 seconds, then hides again
  confirmy.remove("hide");
  setTimeout(function(){
    confirmy.add("hide");
  }, 2000);
  // Increased index count so that next question is populated
  currentindex++;
  // Ends the quiz if the index is equal to max amount of questions in array, or loads new question if it isn't
  if (currentindex == marvelQs.length) {
    endquiz();
  }
  else {
    loadq();
  }
}

function kofanswerclick() {
  // Penalty of losing time for answering wrong
  if (this.value != kofQs[currentindex].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }
    // Readjusts timer once penalty is applied
    countdown.textContent = time;
    // Applies text when answer is wrong
    confirmation.textContent = "WRONG!";
  }
  else {
    // Applies text when answer is right
    confirmation.textContent = "CORRECT!";
  }
  // Remove hide from element so user can see if they were right or wrong, lasts 2 seconds, then hides again
  confirmy.remove("hide");
  setTimeout(function(){
    confirmy.add("hide");
  }, 2000);
  // Increased index count so that next question is populated
  currentindex++;
  // Ends the quiz if the index is equal to max amount of questions in array, or loads new question if it isn't
  if (currentindex == kofQs.length) {
    endquiz();
  }
  else {
    loadq();
  }
}

function ffanswerclick() {
  // Penalty of losing time for answering wrong
  if (this.value != ffQs[currentindex].answer) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }
    // Readjusts timer once penalty is applied
    countdown.textContent = time;
    // Applies text when answer is wrong
    confirmation.textContent = "WRONG!";
  }
  else {
    // Applies text when answer is right
    confirmation.textContent = "CORRECT!";
  }
  // Remove hide from element so user can see if they were right or wrong, lasts 2 seconds, then hides again
  confirmy.remove("hide");
  setTimeout(function(){
    confirmy.add("hide");
  }, 2000);
  // Increased index count so that next question is populated
  currentindex++;
  // Ends the quiz if the index is equal to max amount of questions in array, or loads new question if it isn't
  if (currentindex == ffQs.length) {
    endquiz();
  }
  else {
    loadq();
  }
}

// Function used for when quiz ends. 
function endquiz() {
  // Stop and clear timer
  clearInterval(timer);
  // Ensures the image box used is clear and also hidden at the end of the quiz
  rightbox.innerHTML = "";
  rightbox.style.opacity = 0;

  // Most of this was used to reset the categories in the quiz in the event of a restart, but probably unneeded do to using page refresh to reset the quiz
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
  // Hides the questions card at the end of quiz and shows the results card
  questions.add("hide");
  results.remove("hide")
  // Making the time remaining become the user's final score
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

// Various variables used for keeping track of high score and the list
var submitscorebutton = document.getElementById("submitscore")
var initials = document.getElementById("initials");
var highscorelist = document.getElementById("highscores");

// Function for submitting initials and score at the end of the quiz
submitscorebutton.addEventListener("click", function () {
  // Clearing score list so that it isn't repeatedly appending
  highscorelist.innerHTML = "";
  // Receiving user's input and removing space from beginning and end
  var init = initials.value.trim();
  // If initials aren't empty, then score will be logged and placed into list, otherwise, user will be prompted to restart
  if (init != "") {
    // To grab current list from localStorage, if nothing exists, then an empty array is set
    var scores = JSON.parse(window.localStorage.getItem("scores")) || [];

    // new initial + score key pair and value
    var newscore = {
      score: time,
      initials: init
    };

    // Puts new initial and score to the current list
    scores.push(newscore);
    window.localStorage.setItem("scores", JSON.stringify(scores));
  }

  // Calls on function to write score list to the score section of page
  setscores(); 

  // Hides the submit score button so that user must restart quiz
  var submission = document.querySelector("#submission").classList
  submission.add("hide")
});


// Funstion to set scores to the score list
function setscores() {
  highscorelist.innerHTML = "";
  var scores = JSON.parse(window.localStorage.getItem("scores")) || [];
  // Sort the scores from highest to lowest on the list
  scores.sort(function(a, b) {
    return b.score - a.score;
  });
  // Once sorted, scores are printed to the high score list on page
  scores.forEach(function(score) {
    // Creates the list item for the initals and score
      var scoreitem = document.createElement("li");
      // Formats the list item
      scoreitem.textContent = score.initials + " -- " + score.score;

      // Adds list item of initials and score to the list of high scores
      highscorelist.appendChild(scoreitem);
  });
}

// Event listener for the start of quiz to select the category of questions
categorybutton.addEventListener("click", theme);

// Event listener to start the quiz after the selection of a category. If no category is selected, alert tells user to select a category before continuing quiz
startbutton.addEventListener("click", function () {
  if (category != "none") {
    startquiz();
  }
  else {
    alert("Please select a category")
  }
});

// Event listener for restart button after score submission. Refreshes page.
restartbutton.addEventListener("click", function () {
  window.location.reload();
})