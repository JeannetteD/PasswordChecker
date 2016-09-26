var name = "userName";
var password = "passWord";
name.length >= 6;
!name.includes("#") && !name.includes("$") && !name.includes("!");
name != password;

password.length >= 6;
password.includes("#") || password.includes("$") || password.includes("!");

function isUserValid(name){
return name.length >= 6 && !name.includes("#") && !name.includes("$") && !name.includes("!") &&
name != pass;
}

function isPasswordValid(pass) {
return pass.length >= 6 && (pass.includes("0") || pass.includes("1") || pass.includes("2") || pass.includes("3") || pass.includes("4") || pass.includes("5") || pass.includes("6") || pass.includes("7") || pass.includes("8") || pass.includes("9")) && ((pass.includes("#") || pass.includes("$") || pass.includes("!")));
};

function areCredsValid(name, pass) {
return isUserValid(name) && isPasswordValid(pass);
};

function getUserCreds() {
  var name = prompt("Pick a User Name");
  var pass = prompt("Pick a Password");
  alert("Your Credentials Are Legit: " + areCredsValid(name, pass));
};
