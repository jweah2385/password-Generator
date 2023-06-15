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
    alert("A series of questions will be asked about the specificity of the characters you " + 
    "want to add in your password, type yes if you would like to include them or no if would not like to include them." +
    "if you enter anything other than yes or no for atleast one of the prompts, you will be " + 
    " required to reenter your preferences. Click ok to continue");
    var upperCase =  prompt('Do you want uppercase characters in your password').toLowerCase();
    var lowerCase = prompt('Do you want lowercase characters in your password').toLowerCase();
    var numeric = prompt('Do you want numbers').toLowerCase();
    var specialChar = prompt('Do you want special characters').toLowerCase();
  } while ((!((upperCase == "yes") || (upperCase == "no"))) || 
            !((lowerCase == "yes") || ( lowerCase == "no")) ||
            !((numeric == "yes") || (numeric == "no")) ||
            !((specialChar== "yes") || (specialChar == "no"))) ;    
  console.log(upperCase);
  console.log(lowerCase);
  console.log(numeric);
  console.log(specialChar);   
  
  
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var sChar = `!"#$%&"()*,-._>=:|~'?;`

  function generatePassword() {
    var password = "";
    //Where the password will be generated
    for(let i = 0; i < passLength; i++) {
      var prac = Math.random(numbers)
      password = prac;
    }

    return password;
  }
  console.log(generatePassword());
  //var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);


//if((upperCase == "yes") && (lowerCase == "yes") && (specialChar == "yes")) {

//}else if (upperCase == "yes")