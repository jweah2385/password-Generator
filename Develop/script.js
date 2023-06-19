//xs Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  //Getting user length, varifying length size of 8=128
  //If a user does not enter a length in these parameters they will be
  //asked to reenter their response
  do {
    let passL = prompt(
      'How long do you want your password to be, it must ' +
        'be between 8 to 128 characters'
    );
    var passLength = Number(passL);
  } while (!(passLength >= 8 && passLength <= 128));

  alert(
    'Now you will provide the types of characters that you want, click ok to continue'
  );

  /*Where the users preferences will be taken, if the user does not enter yes or no 
  or if the user enters no for every option, they will be asked to renter their option
  */
  do {
    alert(
      'A series of questions will be asked about the specificity of the characters you ' +
        'want to add in your password, type yes if you would like to include them or no if would not like to include them.' +
        'if you enter anything other than yes or no for atleast one of the prompts, you will be ' +
        ' required to reenter your preferences. Click ok to continue'
    );
    var upperCase = prompt(
      'Do you want uppercase characters in your password'
    ).toLowerCase();
    var lowerCase = prompt(
      'Do you want lowercase characters in your password'
    ).toLowerCase();
    var numeric = prompt('Do you want numbers').toLowerCase();
    var specialChar = prompt('Do you want special characters').toLowerCase();
  } while (
    !(upperCase == 'yes' || upperCase == 'no') ||
    !(lowerCase == 'yes' || lowerCase == 'no') ||
    !(numeric == 'yes' || numeric == 'no') ||
    !(specialChar == 'yes' || specialChar == 'no') ||
    (upperCase === 'no' &&
      lowerCase === 'no' &&
      numeric === 'no' &&
      specialChar === 'no')
  );

  //Strings that hold each numbers or special char or caps or lowercase
  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var sChar = `!"#$%&"()*,-._>=:|~'?;`;

  //Strings that account for every combination that the user will input
  var onlyUpperCase = upperCaseLetters; //AD
  var onlyLowerCase = lowerCaseLetters; //AD
  var onlyNumbers = numbers; //AD
  var onlySpecialChars = sChar; //AD

  var upperAndLowerCase = upperCaseLetters + lowerCaseLetters; //AD
  var upperAndNumbers = upperCaseLetters + numbers; //AD
  var upperAndSpecialChars = upperCaseLetters + sChar; //AD
  var lowerAndNumbers = lowerCaseLetters + numbers; //AD
  var lowerAndSpecialChars = lowerCaseLetters + sChar; //AD
  var numbersAndSpecialChars = numbers + sChar; //AD

  var upperLowerAndNumbers = upperCaseLetters + lowerCaseLetters + numbers; //AD
  var upperLowerAndSpecialChars = upperCaseLetters + lowerCaseLetters + sChar; //AD
  var upperNumbersAndSpecialChars = upperCaseLetters + numbers + sChar; //AD
  var lowerNumbersAndSpecialChars = lowerCaseLetters + numbers + sChar; //AD

  var allChars = upperCaseLetters + lowerCaseLetters + numbers + sChar; //AD

  /*These if statements account for every statement that the user inputs and 
  takes the string that matches that input. That string is then passed through the 
  generatePassword() method (which takes in that string and the password length)
  inorder to generate a random password that will include the characters based on what the
  preferences
  */
  if (
    upperCase == 'yes' &&
    lowerCase == 'yes' &&
    numeric == 'yes' &&
    specialChar == 'yes'
  ) {
    // Combination 1
    var randomString = '';
    function generatePassword(allChars, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }
    }

    generatePassword(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'yes' &&
    numeric == 'yes' &&
    specialChar == 'no'
  ) {
    // Combination 2
    var randomString = '';
    function generatePassword(upperLowerAndNumbers, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(
          Math.random() * upperLowerAndNumbers.length
        );
        randomString += upperLowerAndNumbers[randomIndex];
      }
    }

    generatePassword(upperLowerAndNumbers, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'yes' &&
    numeric == 'no' &&
    specialChar == 'yes'
  ) {
    // Combination 3
    var randomString = '';
    function generatePassword(upperLowerAndSpecialChars, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(
          Math.random() * upperLowerAndSpecialChars.length
        );
        randomString += upperLowerAndSpecialChars[randomIndex];
      }
    }

    generatePassword(upperLowerAndSpecialChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'yes' &&
    numeric == 'no' &&
    specialChar == 'no'
  ) {
    // Combination 4
    var randomString = '';
    function generatePassword(upperAndLowerCase, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * upperAndLowerCase.length);
        randomString += upperAndLowerCase[randomIndex];
      }
    }

    generatePassword(upperAndLowerCase, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'no' &&
    numeric == 'yes' &&
    specialChar == 'yes'
  ) {
    // Combination 5
    var randomString = '';
    function generatePassword(upperNumbersAndSpecialChars, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(
          Math.random() * upperNumbersAndSpecialChars.length
        );
        randomString += upperNumbersAndSpecialChars[randomIndex];
      }
    }

    generatePassword(upperNumbersAndSpecialChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'no' &&
    numeric == 'yes' &&
    specialChar == 'no'
  ) {
    // Combination 6
    var randomString = '';
    function generatePassword(upperAndNumbers, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * upperAndNumbers.length);
        randomString += upperAndNumbers[randomIndex];
      }
    }

    generatePassword(upperAndNumbers, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'no' &&
    numeric == 'no' &&
    specialChar == 'yes'
  ) {
    // Combination 7
    var randomString = '';
    function generatePassword(upperAndSpecialChars, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(
          Math.random() * upperAndSpecialChars.length
        );
        randomString += upperAndSpecialChars[randomIndex];
      }
    }

    generatePassword(upperAndSpecialChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'no' &&
    numeric == 'no' &&
    specialChar == 'no'
  ) {
    // Combination 8
    var randomString = '';
    function generatePassword(onlyUpperCase, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * onlyUpperCase.length);
        randomString += onlyUpperCase[randomIndex];
      }
    }

    generatePassword(onlyUpperCase, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'yes' &&
    numeric == 'yes' &&
    specialChar == 'yes'
  ) {
    // Combination 9
    var randomString = '';
    function generatePassword(lowerNumbersAndSpecialChars, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(
          Math.random() * lowerNumbersAndSpecialChars.length
        );
        randomString += lowerNumbersAndSpecialChars[randomIndex];
      }
    }

    generatePassword(lowerNumbersAndSpecialChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'yes' &&
    numeric == 'yes' &&
    specialChar == 'no'
  ) {
    // Combination 10
    var randomString = '';
    function generatePassword(lowerAndNumbers, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * lowerAndNumbers.length);
        randomString += lowerAndNumbers[randomIndex];
      }
    }

    generatePassword(lowerAndNumbers, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'yes' &&
    numeric == 'no' &&
    specialChar == 'yes'
  ) {
    // Combination 11
    var randomString = '';
    function generatePassword(lowerAndSpecialChars, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(
          Math.random() * lowerAndSpecialChars.length
        );
        randomString += lowerAndSpecialChars[randomIndex];
      }
    }

    generatePassword(lowerAndSpecialChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'yes' &&
    numeric == 'no' &&
    specialChar == 'no'
  ) {
    // Combination 12
    var randomString = '';
    function generatePassword(onlyLowerCase, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * onlyLowerCase.length);
        randomString += onlyLowerCase[randomIndex];
      }
    }

    generatePassword(onlyLowerCase, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'no' &&
    numeric == 'yes' &&
    specialChar == 'yes'
  ) {
    // Combination 13
    var randomString = '';
    function generatePassword(numbersAndSpecialChars, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(
          Math.random() * numbersAndSpecialChars.length
        );
        randomString += numbersAndSpecialChars[randomIndex];
      }
    }

    generatePassword(numbersAndSpecialChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'no' &&
    numeric == 'yes' &&
    specialChar == 'no'
  ) {
    // Combination 14
    var randomString = '';
    function generatePassword(onlyNumbers, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * onlyNumbers.length);
        randomString += onlyNumbers[randomIndex];
      }
    }

    generatePassword(onlyNumbers, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'no' &&
    numeric == 'no' &&
    specialChar == 'yes'
  ) {
    // Combination 15
    var randomString = '';
    function generatePassword(onlySpecialChars, passLength) {
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * onlySpecialChars.length);
        randomString += onlySpecialChars[randomIndex];
      }
    }

    generatePassword(onlySpecialChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'no' &&
    numeric == 'no' &&
    specialChar == 'no'
  ) {
    // Combination 16
    console.log(
      'Sorry we could not create a password for you passed on ' +
        'these preferences'
    );
  }

  /*We target the textarea and make the value of it equal the users input 
   this results in the user password displaying on the page*/
  var passwordText = document.querySelector('#password');
  passwordText.value = passwordd;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
