// Assignment Code
var generateBtn = document.querySelector("#generate");
var symbols = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', 
'[', '~', '-', '_', '.' ];
var numebrs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 
  'x', 'y', 'z' ];
var upperCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 
  'X', 'Y', 'Z' ];

// Write password to the #password input

  // 1. prompt the used for password criteria
  //    a. between 8-128 character

function lengthConfirmation () {
  lengthConfirmation = prompt("How many charecters would you like, between 8 and 128 😃 ", "Answer here!");
}


function generatePassword() {
  console.log("button clicked");
  lengthConfirmation();
  var userChoice = window.prompt

  if (lengthConfirmation < 8 || lengthConfirmation > 129) {
    alert('Thats not a valid answer, try again!');
    lengthConfirmation();

  }

  //    b. uppercase, lowercase, numbers or spacial characters

var lowerCaseConfirmation =  confirm ("Would you like lowercase letters ? 😃 ", "Answer here!");

var upperCaseConfirmation = confirm("Would you like UPPERCASE letters ? 😃 ", "Answer here!");

var numberConfirmation = confirm("Would you like numbers ? 😃 ", "Answer here!");

var sybolConfirmation =  confirm("Would you like special characters ? 😃 ", "Answer here!");

if (lowerCaseConfirmation === false && upperCaseConfirmation === false && numberConfirmation === false && sybolConfirmation === false) {
  alert('Thats not a valid answer, try again!');
}



 
//  if (!userChoice) {
//   return(prompt("Would you like UPPERCASE letters ? 😃 ", "Answer here!"));
// }

  // 2. validate the input
  // 3. generate the password
  
// 4. display the passwod on the page
  return "password var goes here"
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
