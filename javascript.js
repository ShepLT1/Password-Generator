// Special Characters array

var specChar = ["!", "&quot;", "#", "$", "%", "&", "&rsquo;", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "=", "&lt;", "&gt;", "?", "&commat;", "[", "&bsol;", "]", "&Hat;", "_", "&grave;", "{", "|", "}", "~"];

// Numerical Characters array

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Lowercase Characters array

var lowerChar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

// function to change characters to Uppercase

function toUpper(x) {
    
     return x.toUpperCase();

}

// runs function to change Lowercase Characters to Uppercase

var upperChar = lowerChar.map(toUpper);

// Executes function when Generate Password Button is clicked

document.getElementById("generate-password-button").onclick = function() {

    // Runs function after 200ms which allows Generate Password Button active state to deactivate
    
    setTimeout(function() {

        // Allows while loop to execute again by changing ValidEntry to false

        var validEntry = false;

        // Defines & resets combinedArray array

        var combinedArray = [];

        // Defines & resets securePassword

        var securePassword = "";

        // function to add desired character arrays to combinedArray

        function ifConf(charConf, charArr) {

            if (charConf) {
        
                combinedArray = combinedArray.concat(charArr);
        
            }
        
        }

        // while loop that validates user entry, combines selected criteria, and pastes password on page

        while (validEntry === false) {

            // Asks user their desired character length for passsword

            var passwordLength = prompt("Please select a number from 8 to 128 to determine the password length.");

            // checks if password length user input is between 8 & 128

            if (passwordLength >= 8 && passwordLength <= 128) {

                // changes validEntry to true to discontinue while loop

                validEntry = true;

                // Confirms if user wants password to contain special characters

                var specCharConfirm = confirm("Select OK if you would like your password to contain special characters. Otherwise, select CANCEL.");

                // Confirms if user wants password to contain numerical characters

                var numCharConfirm = confirm("Select OK if you would like your password to contain numeric characters. Otherwise, select CANCEL.");

                // Confirms if user wants password to contain lowercase characters

                var lowerCharConfirm = confirm("Select OK if you would like your password to contain lowercase characters. Otherwise, select CANCEL.");

                // Confirms if user wants password to contain uppercase characters

                var upperCharConfirm = confirm("Select OK if you would like your password to contain uppercase characters. Otherwise, select CANCEL.");

                // runs function to add special characters to combinedArray if user confirms

                ifConf(specCharConfirm, specChar);

                // runs function to add numerical characters to combinedArray if user confirms

                ifConf(numCharConfirm, numChar);

                // runs function to add lowercase characters to combinedArray if user confirms

                ifConf(lowerCharConfirm, lowerChar);

                // runs function to add uppercase characters to combinedArray if user confirms

                ifConf(upperCharConfirm, upperChar);

                // Validates that user selected at least 1 set of characters

                if (!specCharConfirm && !numCharConfirm && !lowerCharConfirm && !upperCharConfirm) {

                    alert("Must select at least 1 set of characters.");

                } else {
                    
                    // for loop that selects random character from combinedArray, terminates based on user-chosen password length, & replaces placeholder text in HTML password text area with generated password
                    
                    for (i = 0; i < passwordLength; i++) {

                        var getRandomCharacter = Math.floor(Math.random() * combinedArray.length);

                        securePassword = securePassword + combinedArray[getRandomCharacter];

                        document.getElementById("password").innerHTML = securePassword;

                    }

                }
                
            // ends while loop execution if user selects cancel button
            
            } else if (!passwordLength) {

                validEntry = true;

                // re-runs while loop after displaying error message if user-chosen password length is < 8 or > 128

                } else {

                alert("Please try again and enter a numerical digit between 8 & 128.");

            }

        }

    }, 200);

}

// copies password to clipboard when copy to clipboard button is clicked

document.getElementById("clip-copy-button").onclick = function() {

    var copyPass =  document.getElementById("password");

    copyPass.select();

    copyPass.setSelectionRange(0, 99999);

    document.execCommand("copy");

};