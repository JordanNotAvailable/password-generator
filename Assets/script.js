// Assignment Code
var generateBtn = document.querySelector("#generate");
var symbols = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', 
'[', '~', '-', '_', '.' ];
var numbers = ['0123456789'];
var lowerCharacters = [ 'abcdefghijklmnopqrstuvwxyz' ];
var upperCharacters = [ 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ];
var count = 0
// Write password to the #password input

  // 1. prompt the used for password criteria
  //    a. between 8-128 character

function lengthConfirmation () {
  lengthConfirmation = prompt("How many charecters would you like, between 8 and 128 😃 ", "Answer here!");
}

// new empty array to join previous arrays to
var abc = []

function generatePassword() {
  console.log("button clicked");
  lengthConfirmation();

  if (lengthConfirmation < 8 || lengthConfirmation > 128) {
    alert('Thats not a valid answer, try again!');
    lengthConfirmation();
  }

//    b. uppercase, lowercase, numbers or spacial characters

var lowerCaseConfirmation =  confirm ("Would you like lowercase letters ? 😃 ", "Answer here!");

var upperCaseConfirmation = confirm("Would you like UPPERCASE letters ? 😃 ", "Answer here!");

var numberConfirmation = confirm("Would you like numbers ? 😃 ", "Answer here!");

var symbolConfirmation =  confirm("Would you like special characters ? 😃 ", "Answer here!");

if (lowerCaseConfirmation === false && upperCaseConfirmation === false && numberConfirmation === false && symbolConfirmation === false) {
  alert('Thats not a valid answer, try again!');
}

var generatedPassword = '';

// 2. validate the input


if (lowerCaseConfirmation == true) {
  // 
  abc.push(lowerCharacters) 
  console.log(lowerCharacters)
}

if (upperCaseConfirmation == true) {
  // combined upper case into joined array
  abc.push(upperCharacters) 
}

if (numberConfirmation == true) {
  //combined numbers into joined array
  abc.push(numbers) 
}

if (symbolConfirmation == true) {
  // combine symbols into joined array
  abc.push(symbols) 
}

// making the abc array into a string
abc = abc.join("")
console.log(abc)

// generate the password from above criteria
for (var i=0; i < lengthConfirmation; i++) {
  generatedPassword += abc.charAt(Math.floor(Math.random() * abc.length));
  console.log(generatedPassword);
}

//display the passwod on the page
console.log(generatedPassword);
  return generatedPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
