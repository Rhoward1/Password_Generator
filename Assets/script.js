var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

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
    
  while(passlength >128||passlength <8 ){
    passlength = prompt("You need enter you desired password length between 8 and 128 ");

    
    passlength=parseInt(passlength);
}
    
    special = confirm("Would you like to use special characters in your password?");    
    
    number = confirm("Would you like to use numbers characters in your password?");    
    
    lowercase = confirm("Would you like to use lowercase characters in your password?");

   
    uppercase = confirm("Would you like to use uppercase characters in your password?");
    
      
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
return password;
}







