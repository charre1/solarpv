
$(document).ready(function(){


    
        $('#submit').click(function(){
        
        var usernameRegEx = /^[a-zA-Z0-9_-]{3,8}$/;
        var username = document.getElementById("username")
        var usernameValue = username.value;
        var testUsername = usernameRegEx.test(usernameValue);

        var passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,8}$/;
        var password = document.getElementById("password");
        var passValue = password.value;
        var testPassword = passwordRegEx.test(passValue);

        var confirm = document.getElementById("confirm");
        var confirmValue = confirm.value;

        var lastName = document.getElementById("lastName");
        var lastNameValue = lastName.value;

        var gender = document.getElementById("gender");
        var genderValue = gender.value;

        var street = document.getElementById("streetAddress");
        var streetValue = street.value;

        var city = document.getElementById("city");
        var cityValue = city.value;

        var state = document.getElementById("state");
        var stateValue = state.value;

        var zipCode = document.getElementById("zipCode");
        var zipCodeValue = zipCode.value;

        var emailRegEx= /(\w+)\@(\w+)\.[a-zA-Z]/g;
        var email = document.getElementById("email"); 
        var emailValue = email.value;
        var testEmail = emailRegEx.test(emailValue);

        var phoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var cellNumber = document.getElementById("cellPhone");
        var cellValue = cellNumber.value;
        var testCell = phoneRegEx.test(cellValue);

        var company = document.getElementById("company");
        var companyValue = company.value;
   
        
        if(!testUsername){
            alert("Username must be three to eight characters long.")
            return false;
        }   
        
        if(!testPassword){
            alert("Password must be eight characters long comprising of at least a digit, a lowerase letter, and an uppercase letter.");
            password.value = "";
            return false;
        }

        if(confirmValue == ""){
            alert("Please confirm your password.")
            password.value = "";
            confirm.value = "";
            return false;
        }

        if(passValue != confirmValue){
            alert("Passwords do not match.")
            password.value = '';
            confirm.value = '';
            return false;
        }

        if(lastNameValue == ""){
            alert("Lastname is required.")
            return false;
        }

        if(genderValue == ""){
            alert("Please select on option for Gender.")
            return false;
        }

        if(streetValue == ""){
            alert("Street Address is required.")
            return false;
        }

        if(cityValue == ""){
            alert("City is required.")
            return false;
        }

        if(stateValue == ""){
            alert("Please select on option for State.")
            return false;
        }

        if(zipCodeValue == ""){
            alert("Zipcode is required")
            return false;
        }

        if(!testEmail){
            alert("Please enter a valid email in the form: 'simple@example.com' ");     
            return false; 
        }
        if(!testCell){
            alert("Please enter a 10 digit phone number."); 
            return false;       
        }
        
        if(companyValue == ""){

            alert("Company is required.")
            return false;
        }

        });



    });