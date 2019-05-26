//"database"
function myFunction(){
    var ID1 = "brukernavn";
    var PW1 = "passord123";
    var GG = "Login Successful";
    var BG = "Login Unsuccessful";

var userIdInput = document.getElementById("username").value;
var userPwInput = document.getElementById("password").value;

if (userIdInput == ID1 && userPwInput == PW1)
{
    document.getElementById("Ok").innerHTML = GG;
} else {
    document.getElementById("notOk").innerHTML = BG;
};
};
