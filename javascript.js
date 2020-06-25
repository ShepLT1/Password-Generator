
var specChar = ["!", "&quot;", "#", "$", "%", "&", "&rsquo;", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "=", "&lt;", "&gt;", "?", "&commat;", "[", "&bsol;", "]", "&Hat;", "_", "&grave;", "{", "|", "}", "~"];

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerChar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

function toUpper(x) {
    
    return x.toUpperCase();

}

var upperChar = lowerChar.map(toUpper);

document.getElementById("generate-password-button").onclick = function() {
    
    setTimeout(function() {

        var validEntry = false;

        var combinedArray = [];

        var securePassword = "";

        function ifConf(charConf, charArr) {

            if (charConf) {
        
                combinedArray = combinedArray.concat(charArr);
        
            }
        
        }

        while (validEntry === false) {

            var passwordLength = prompt("Please select a number from 8 to 128 to determine the password length.");

            if (passwordLength >= 8 && passwordLength <= 128) {

                validEntry = true;

                var specCharConfirm = confirm("Select OK if you would like your password to contain special characters. Otherwise, select CANCEL.");

                var numCharConfirm = confirm("Select OK if you would like your password to contain numeric characters. Otherwise, select CANCEL.");

                var lowerCharConfirm = confirm("Select OK if you would like your password to contain lowercase characters. Otherwise, select CANCEL.");

                var upperCharConfirm = confirm("Select OK if you would like your password to contain uppercase characters. Otherwise, select CANCEL.");

                ifConf(specCharConfirm, specChar);

                ifConf(numCharConfirm, numChar);

                ifConf(lowerCharConfirm, lowerChar);

                ifConf(upperCharConfirm, upperChar);

                if (!specCharConfirm && !numCharConfirm && !lowerCharConfirm && !upperCharConfirm) {

                    alert("Must select at least 1 set of characters.");

                } else { 
                    
                    for (i = 0; i < passwordLength; i++) {

                        var getRandomCharacter = Math.floor(Math.random() * combinedArray.length);

                        securePassword = securePassword + combinedArray[getRandomCharacter];

                        document.getElementById("password").innerHTML = securePassword;

                    }

                } 
            
            } else if (!passwordLength) {

                validEntry = true;

                } else {

                alert("Please try again and enter a numerical digit between 8 & 128.");

            }

        }

    }, 100);

}

document.getElementById("clip-copy-button").onclick = function() {

    var copyPass =  document.getElementById("password");

    copyPass.select();

    copyPass.setSelectionRange(0, 99999);

    document.execCommand("copy");

};