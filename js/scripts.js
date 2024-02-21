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

question1();
question2();
question3();
question4();
question5();

//document.write("Thanks for playing, " + userName + "! Hope you learned something about me.");
// console.log("Thanks for playing, " + userName + "! Hope you learned something about me.");
alert("Thanks for playing, " + userName + "! Hope you learned something about me.");
