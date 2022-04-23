//  IGNORE: removing feature until I can figure out the rest of this.
// // Function for setting difficilty level
// function spiciness() {
//   // Variables to hide buttons after selection
//   var easy = document.querySelector("#easy").classList;
//   var medium = document.querySelector("#medium").classList;
//   var hard = document.querySelector("#hard").classList;
//   // Variables for buttons that EventListener can target
//   var easybutton = document.getElementById("easy")
//   var mediumbutton = document.getElementById("medium")
//   var hardbutton = document.getElementById("hard")
//   // Hiding/unhiding start buttons
//   var difficultybutton = document.querySelector("#difselect").classList;
//   var startbutton = document.querySelector("#quizstart").classList;
//   // Unhiding difficulties
//   var difficultychoice = document.querySelector("#diffbox").classList;
//   difficultychoice.remove("hide");
//   // Each button will change the difficulty level and hide the other buttons and then reveal questions for the quiz
//   easybutton.addEventListener("click", function(){
//     spicelevel = "easy";
//     medium.add("hide");
//     hard.add("hide");
//   })
//   mediumbutton.addEventListener("click", function(){
//     spicelevel = "medium";
//     easy.add("hide");
//     hard.add("hide");
//   })
//   hardbutton.addEventListener("click", function(){
//     spicelevel = "hard";
//     easy.add("hide");
//     medium.add("hide");
//   })
//   difficultybutton.add("hide");
//   startbutton.remove("hide");
// }

// IGNORE: Return to this feature at a later time when I can figure it out better
// // Function for determining total time per questions
// function timemultiplier() {
//   if (spicelevel == "easy") {
//    secmult = 3;
//   }
//   else if (spicelevel == "medium") {
//     secmult = 2;
//   }
//   else if (spicelevel == "hard") {
//     secmult = 1;
//   }
//   else {
//     return
//   }
//  }

// var currentquiz = [];
// // Function to prepare a set of 10 questions at random from the selected category
// function prepareset() {
//   if (category == "code") {
//     // Needed an empty array to concat to so that the original array of objects is not mutated
//     let temp = [];
//     var tempqs = temp.concat(codeQs);
//     // Loop to randomly select questions and put them into current quiz. Removing from temporary array to prevent repeat questions
//     for (i = 0; i < 2; i++) {
//       let randomq = Math.floor(Math.random() * (3 - i));
//       let quizq = tempqs.slice(randomq, randomq + 1)
//       currentquiz.push(quizq)
//       tempqs.splice(randomq, 1);
//       return temp
//     }
//   }
//   else if (category == "marvel") {
//     // Needed an empty array to concat to so that the original array of objects is not mutated
//     let temp = [];
//     var tempqs = temp.concat(marvelQs);
//     // Loop to randomly select questions and put them into current quiz. Removing from temporary array to prevent repeat questions
//     for (i = 0; i < 2; i++) {
//       let randomq = Math.floor(Math.random() * (3 - i));
//       let quizq = tempqs.slice(randomq, randomq + 1)
//       currentquiz.push(quizq)
//       tempqs.splice(randomq, 1);
//       return temp
//     }
//   }
//   else if (category == "kof") {
//     // Needed an empty array to concat to so that the original array of objects is not mutated
//     let temp = [];
//     var tempqs = temp.concat(kofQs);
//     // Loop to randomly select questions and put them into current quiz. Removing from temporary array to prevent repeat questions
//     for (i = 0; i < 2; i++) {
//       let randomq = Math.floor(Math.random() * (3 - i));
//       let quizq = tempqs.slice(randomq, randomq + 1)
//       currentquiz.push(quizq)
//       tempqs.splice(randomq, 1);
//       return temp
//     }
//   }
//   else if (category == "ff") {
//     // Needed an empty array to concat to so that the original array of objects is not mutated
//     let temp = [];
//     var tempqs = temp.concat(ffQs);
//     // Loop to randomly select questions and put them into current quiz. Removing from temporary array to prevent repeat questions
//     for (i = 0; i < 2; i++) {
//       let randomq = Math.floor(Math.random() * (3 - i));
//       let quizq = tempqs.slice(randomq, randomq + 1)
//       currentquiz.push(quizq)
//       tempqs.splice(randomq, 1);
//       return temp
//     }
//   }
//   else {
//     return temp
//   }
// }


// IGNORE: Was using this to try checkboxes, but I can't get this to work nicely with validation. Will return to later.
// function loadquestions() {
//  questions.remove("hide")
//  // Adding questions to the card on the HTML
//  var title = document.getElementById("questiontitle");
//  console.log(currentq)
//  title.innerHTML = currentq.question;
//  // Clearing previous choices
//  choices.innerHTML = "";

//   currentq[0].options.forEach(function(option, i){
//   var optionbox = document.createElement("input");
//   optionbox.type = "checkbox";
//   optionbox.id = currentq[0].options[i];
//   optionbox.name = i;
//   optionbox.value = i;

//   var optionboxlabel = document.createElement("label");
//   optionboxlabel.htmlFor = currentq[0].options[i];
//   optionboxlabel.appendChild(document.createTextNode(currentq[0].options[i]));

//   var br = document.createElement("br");

//   choices.appendChild(optionbox);
//   choices.appendChild(optionboxlabel);
//   choices.appendChild(br);
// })
// }

// IGNORE: Return to this feature once I can figure it out
// function answerclick() {
//   var currentq = currentquiz[currentindex];
//   console.log(currentq)
//   if (document.getElementById(currentq[0].answer).checked) {
//     confirmy.textContent = "CORRECT!";
//     confirmy.remove("hide");
//       setTimeout(function() {
//       confirmy.add("hide");
//       }, 1000);
//     currentindex++;
//     if (currentindex == 10) {
//       endquiz();
//     }
//     else {
//       loadquestions();
//     }
//   }
//   else {
//     time -= (secmult *3);
//     if (time < 0) {
//       time = 0;
//     }
//     countdown.textContent = time;

//     confirmy.textContent = "WRONG!"

//     confirmy.remove("hide");
//       setTimeout(function() {
//       confirmy.add("hide");
//       }, 1000);
//     currentindex++;
//     if (currentindex == 10) {
//       endquiz();
//     }
//     else {
//       loadquestions();
//     }
//   }
// }

// function answerclick() {
//   if (this.optionboxlabel != currentq.answer ) {
//     time -= (secmult *3);

//     if (time < 0) {
//       time = 0;
//     }
//     countdown.textContent = time;

//     confirmy.textContent = "WRONG!";
//   }
//   else {
//     confirmy.textContent = "CORRECT!";
//   }
//   confirmy.remove("hide");
//   setTimeout(function() {
//     confirmy.add("hide");
//   }, 1000);

//   currentindex++;

//   if (currentindex == 10) {
//     endquiz();
//   }
//   else {
//     loadquestions();
//   }
// }