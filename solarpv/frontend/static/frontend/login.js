$(document).ready(function(){

    //Checks if username has been entered, 
    //password has been entered, 
    //and if password is proper length. 
    //Password field is reset if there is an error.
    
    $('#submit').click(function(){
    
    var usernameRegEx = /^[a-zA-Z0-9_-]{3,8}$/;
    var username = document.getElementById("username")
    var usernameValue = username.value;
    var testUsername = usernameRegEx.test(usernameValue);

    var passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,8}$/;
    var password = document.getElementById("password");
    var passValue = password.value;
    var testPassword = passwordRegEx.test(passValue);

    if(usernameValue == ""){
        alert("Please enter your username.")
        return false;
    }
    if(passValue == ""){
        alert("Please enter your password.")
        return false;
    }

    if(passValue.length < 8 || passValue.length > 8){

        alert("Password must be 8 characters long.");
        password.value = '';
        return false;
    }
    
});
});