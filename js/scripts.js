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
    document.write("Try again.");
  }
}

//call it
guessHowManySistersWithMaxGuesses(4);

//also not showing up, do i need an alertS

//User story3, array
let citiesLivedIn = ["chicago", "dC", "seattle", "rochester", "virginia beach"]

let guessCorrect = false;

//loop

let userGuess = prompt("Question 7: Guess how many cities I lived in?");
for (let i = 0; i < citiesLivedIn.length; i++) {
  if (userGuess === currentCity) {
    guessedCorrectly = true;
    alert("You guessed correctly.");
    break;
  }
}

//user story4, correct answers - I have no idea, will get back to this

