//xs Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  //Getting user length, varifying length size of 8=128
  
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
    !(specialChar == 'yes' || specialChar == 'no')
  );
  console.log(upperCase);
  console.log(lowerCase);
  console.log(numeric);
  console.log(specialChar);

  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var sChar = `!"#$%&"()*,-._>=:|~'?;`;

  var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var sChar = `!"#$%&"()*,-._>=:|~'?;`;

  var onlyUpperCase = upperCaseLetters;
  var onlyLowerCase = lowerCaseLetters;
  var onlyNumbers = numbers;
  var onlySpecialChars = sChar;

  var upperAndLowerCase = upperCaseLetters + lowerCaseLetters;
  var upperAndNumbers = upperCaseLetters + numbers;
  var upperAndSpecialChars = upperCaseLetters + sChar;
  var lowerAndNumbers = lowerCaseLetters + numbers;
  var lowerAndSpecialChars = lowerCaseLetters + sChar;
  var numbersAndSpecialChars = numbers + sChar;

  var upperLowerAndNumbers = upperCaseLetters + lowerCaseLetters + numbers;//AD
  var upperLowerAndSpecialChars = upperCaseLetters + lowerCaseLetters + sChar;
  var upperNumbersAndSpecialChars = upperCaseLetters + numbers + sChar;
  var lowerNumbersAndSpecialChars = lowerCaseLetters + numbers + sChar;

  var allChars = upperCaseLetters + lowerCaseLetters + numbers + sChar;//AD



  if (
    upperCase == 'yes' &&
    lowerCase == 'yes' &&
    numeric == 'yes' &&
    specialChar == 'yes'
  ) {
    // Combination 1
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'yes' &&
    numeric == 'yes' &&
    specialChar == 'no'
  ) {
    // Combination 2
    var randomString = '';
    function generateRandomString(upperLowerAndNumbers, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * upperLowerAndNumbers.length);
        randomString += upperLowerAndNumbers[randomIndex];
      }  
    }

    generateRandomString(upperLowerAndNumbers, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'yes' &&
    numeric == 'no' &&
    specialChar == 'yes'
  ) {
    // Combination 3
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'yes' &&
    numeric == 'no' &&
    specialChar == 'no'
  ) {
    // Combination 4
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'no' &&
    numeric == 'yes' &&
    specialChar == 'yes'
  ) {
    // Combination 5
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'no' &&
    numeric == 'yes' &&
    specialChar == 'no'
  ) {
    // Combination 6
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'no' &&
    numeric == 'no' &&
    specialChar == 'yes'
  ) {
    // Combination 7
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'yes' &&
    lowerCase == 'no' &&
    numeric == 'no' &&
    specialChar == 'no'
  ) {
    // Combination 8
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'yes' &&
    numeric == 'yes' &&
    specialChar == 'yes'
  ) {
    // Combination 9
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'yes' &&
    numeric == 'yes' &&
    specialChar == 'no'
  ) {
    // Combination 10
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'yes' &&
    numeric == 'no' &&
    specialChar == 'yes'
  ) {
    // Combination 11
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'yes' &&
    numeric == 'no' &&
    specialChar == 'no'
  ) {
    // Combination 12
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'no' &&
    numeric == 'yes' &&
    specialChar == 'yes'
  ) {
    // Combination 13
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'no' &&
    numeric == 'yes' &&
    specialChar == 'no'
  ) {
    // Combination 14
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'no' &&
    numeric == 'no' &&
    specialChar == 'yes'
  ) {
    // Combination 15
    var randomString = '';
    function generateRandomString(allChars, passLength) {
      
      for (var i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomIndex];
      }  
    }

    generateRandomString(allChars, passLength);
    var passwordd = randomString;
  } else if (
    upperCase == 'no' &&
    lowerCase == 'no' &&
    numeric == 'no' &&
    specialChar == 'no'
  ) {
    // Combination 16
    console.log("sorry we could not create a password for you passed on " + 
    "these preferences")
  }
  
  console.log(passwordd);
  console.log(randomString);
 // console.log(generatePassword());
  //var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);
