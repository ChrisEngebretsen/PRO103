// Demo login info
function myFunction(){
    var ID1 = "brukernavn";
    var PW1 = "passord123";
    var GG = "Proceed";
    var BG = "Login Unsuccessful";
var userIdInput = document.getElementById("username").value;
var userPwInput = document.getElementById("password").value;

// if else to determine if password and username is correct
if (userIdInput == ID1 && userPwInput == PW1)
{
    document.getElementById("Ok").innerHTML = GG;
} else {
    document.getElementById("notOk").innerHTML = BG;
};
};
