'use strict';
  
  // Phase 1 Requirements
  const name = askQuestion("Enter your name:");
  const gender = askQuestion("Enter your gender (male/female):");
  const age = parseInt(askQuestion("Enter your age:"));
  
  if (age <= 0) {
    alert("Invalid age. Age must be greater than zero.");
  }
  
  const skipMessage = confirm("Do you want to skip the welcoming message?");
  
  let welcomeMessage = `Welcome, ${name}!`;
  if (gender === "male") {
    welcomeMessage = `Welcome, Mr. ${name}!`;
  } else if (gender === "female") {
    welcomeMessage = `Welcome, Ms. ${name}!`;
  }
  if (!skipMessage) {
    alert(welcomeMessage);
  }
  
  // Phase 2 Requirements
  const answers = [];
  const question1 = askQuestion("Do you like pizza? (Yes/No)");
  const question2 = askQuestion("Have you traveled abroad? (Yes/No)");
  const question3 = askQuestion("Do you enjoy reading books? (Yes/No)");
  
  answers.push(question1);
  answers.push(question2);
  answers.push(question3);
  
  console.log("Answers:");
  printArray(answers);


// Function to prompt the user and validate the input
function askQuestion(question) {
    let answer = prompt(question);
    if (answer === "") {
      answer = "invalid";
    }
    return answer;
  }
  
  // Function to traverse and print an array
  function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }