// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', 
'[', '~', '-', '_', '.' ];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 
  'x', 'y', 'z' ];

var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 
  'X', 'Y', 'Z' ];

// Write password to the #password input

function generatePassword() {
  console.log("button clicked");
  var userChoice = window.prompt
  // 1. prompt the used for password criteria
  //    a. between 8-128 character
 prompt("How many charecters would you like, between 8 and 128 😃 ", "Answer here!");

 if (!userChoice) {
  return(prompt("Would you like UPPERCASE letters ? 😃 ", "Answer here!"));
}


 prompt("Would you like UPPERCASE letters ? 😃 ", "Answer here!");

 if (!userChoice) {
  return(prompt("Would you like UPPERCASE letters ? 😃 ", "Answer here!"));
}

 prompt("Would you like lowercase letters ? 😃 ", "Answer here!");

 if (!userChoice) {
  return(prompt("Would you like UPPERCASE letters ? 😃 ", "Answer here!"));
}

 prompt("Would you like numbers ? 😃 ", "Answer here!");

 if (!userChoice) {
  return(prompt("Would you like UPPERCASE letters ? 😃 ", "Answer here!"));
}

 prompt("Would you like special characters ? 😃 ", "Answer here!");

 if (!userChoice) {
  return(prompt("Would you like UPPERCASE letters ? 😃 ", "Answer here!"));
}

 alert('Thats not a valid answer!');

  
  //    b. uppercase, lowercase, numbers or spacial characters
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
