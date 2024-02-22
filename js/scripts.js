let userName = prompt("What's your name?");
//document.write("Welcome, " + userName + "! Let's play a guessing game about me.");
alert("Welcome, " + userName + "! Let's play a guessing game about me.");

function askQuestion(question, answer) {
  let userInput = prompt(question).toLowerCase();

  if (userInput === answer || userInput === answer[0]) {
    // console.log("Correct! You got it right.");
    alert("Correct! You got it right.");
  } else {
    // console.log("Not right!");
    alert("Not right!");
  }
}

/*
Directions say do not use functions

function question1() {
  askQuestion("Did I graduate from college? (y/n)", "y");
}

function question2() {
  askQuestion("Do I like to travel? (y/n)", "y");
}

function question3() {
  askQuestion("Is my favorite color green? (y/n)", "y");
}

function question4() {
  askQuestion("Do I have 2 dogs? (y/n)", "n");
}

function question5() {
  askQuestion("Do I like cats? (y/n)", "y");
}

//CALL functions
question1();
question2();
question3();
question4();
question5();

// document.write("Thanks for playing, " + userName + "! Hope you learned something about me.");
// console.log("Thanks for playing, " + userName + "! Hope you learned something about me.");
alert("Thanks for playing, " + userName + "! Hope you learned something about me.");

*/

let graduation = prompt("Did I graduate from college?");
console.log("Question 1:", graduation);

let travelPreference = prompt("Do I like to travel?");
console.log("Question 2:", travelPreference);

let favoriteColor = prompt("Is my favorite color green?");
console.log("Question 3:", favoriteColor);

let dogOwnership = prompt("Do I have 2 dogs?");
console.log("Question 4:", dogOwnership);

let catPreference = prompt("Do I like cats?");
console.log("Question 5:", catPreference);

let responseMessage = "Answers: 1-" + graduation + ", 2-" + travelPreference + ", 3-" + favoriteColor + ", 4-" + dogOwnership + ", 5-" + catPreference + ".";
alert(responseMessage);

//function user story2, still need a too high or too low
function guessHowManySistersWithMaxGuesses(maxGuesses) {
  let gotItCorrect = false;
  let numberOfGuesses = 0;

  for (let i = 1; i <= maxGuesses; i++) {
    let guess = prompt("How many sisters do I have?");
    guess = Number(guess);

    if (guess === 2) {
      gotItCorrect = true;
      numberOfGuesses = i;
      break;
    }
  }

  if (gotItCorrect) {
    document.write(numberOfGuesses);
  } else {
    document.write("No.");
  }
}

//call it
guessHowManySistersWithMaxGuesses(4);