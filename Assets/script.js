// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 1. Create variables to save user input from prompts

    

// 2. create an array for each type of character
      //special characters, uppercase, lowercase, numeric

      const uppers = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H','I', 'J', 'K', 'L','M', 'N', 'O', 'P','Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z'];
      const lowers = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i', 'j', 'k', 'l','m', 'n', 'o', 'p','q', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z'];
      const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}','~'];

function generatePassword(){
  var special;
  var lowercase;
  var uppercase;
  var number;
  var passlength;


  passlength = prompt("Please enter you desired password length between 8 and 128");

  passlength=parseInt(passlength);
    //use conditionals to validate inputs for (password legnth, used enters no inputs)
  while(passlength >128||passlength <8 ){
    passlength = prompt("You need enter you desired password length between 8 and 128 ");

    //password length string ( need to change to integer)
    passlength=parseInt(passlength);
}
    //special characters- boolean
    special = confirm("Would you like to use special characters in your password?");    
    //numeric characters- boolean
    number = confirm("Would you like to use numbers characters in your password?");    
    //lowercase characters- boolean
    lowercase = confirm("Would you like to use lowercase characters in your password?");

    //uppercase characters- boolean
    uppercase = confirm("Would you like to use uppercase characters in your password?");
    //alert, confirm, prompt
      // var collect = [];
      var password = "";


      while (password.length < passlength) {
        if (uppercase) {
          password += uppers[Math.floor(Math.random() * uppers.length)];
          if (password.length === passlength) {break}
        }
        if (lowercase) {
          password += lowers[Math.floor(Math.random() * lowers.length)];
          if (password.length === passlength) {break}
        }
        if (number) {
          password += numbers[Math.floor(Math.random() * numbers.length)];
          if (password.length === passlength) {break}
        }
        if (special) {
          password += specials[Math.floor(Math.random() * specials.length)];
          if (password.length === passlength) {break}
        }    
      }  
      // var password="";
      // if (lowercase) {
      //   collect = collect.concat(lowers);
      // }
      // if (uppercase) {
      //   collect = collect.concat(uppers);
      // }
      // if (number) {
      //   collect = collect.concat(numbers);
      // }
      // if (special) {
      //   collect = collect.concat(specials);
      // }

      // 3. use randomizer function to select characters from each array    
  // for(let i = 0;i<passlength;i++){
  // var nextchar=collect[Math.floor(Math.random()*passlength)];
  // password += nextchar;


return password;
}

// 4. generatePassword function -- take user input grab characters from array and generate password

// 5.Create an empty array that represents the final password.

// 6. join character arrays together based on user input



//7. use randomize character from the joined arrays.

//8. use join to join data from multiple arrays
//  Array.join()





