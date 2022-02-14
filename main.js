function validationSign(){
    let fName = document.getElementById("fname").value,
        fNameLabel = document.getElementById("fnamelabel"),
        lName = document.getElementById("lname").value,
        lNameLabel = document.getElementById("lnamelabel"),
        email = document.getElementById("email").value,
        emailLabel = document.getElementById("emaillabel"),
        pass1 = document.getElementById("password").value,
        pass1Label = document.getElementById("passwordlabel"),
        pass2 = document.getElementById("password2").value,
        pass2Label = document.getElementById("password2label"),
        phoneNumber = document.getElementById("phone").value,
        phoneNumberLabel = document.getElementById("phonelabel"),
        emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        phonePattern = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        valid = true;

    if(fName === "" || !isNaN(fName) || fName.indexOf(" ") != -1){
        display(fNameLabel, "please enter valid UserName &#9940;");
        return valid = false;
    }else if(lName === "" || !isNaN(lName) || lName.indexOf(" ") != -1){
        resetSign();
        display(lNameLabel, "please enter valid LastName &#9940;");
        return valid = false ;
    }else if (emailPattern.test(email) == false){
        resetSign();
        display(emailLabel, "please enter valid Email &#9940;")
        return valid = false;
    }else if(phonePattern.test(phoneNumber) == false){
        resetSign();
        display(phoneNumberLabel, "Valid PhoneNumber only &#9940;")
        return valid = false;
    }else if(pass1 === "" || pass1.length < 6){
        resetSign();
        display(pass1Label, "please enter valid password &#9940;")
        return valid = false;
    }else if(pass2 !== pass1){
        resetSign();
        display(pass2Label, "Password not matched &#9940;")
        return valid = false;
    }else{
     return  valid = true;
    }
}

function display(label, text){
    label.innerHTML = text;
    label.style.color = "red";
    label.style.textTransform = "capitalize";
}

/***********************************************************************/

function resetSign(){
    let fNameLabel = document.getElementById("fnamelabel"),
    lNameLabel = document.getElementById("lnamelabel"),
    emailLabel = document.getElementById("emaillabel"),
    pass1Label = document.getElementById("passwordlabel"),
    pass2Label = document.getElementById("password2label"),
    phoneLabel = document.getElementById("phonelabel"),
    arr;

    fNameLabel.innerHTML = "First Name :";
    lNameLabel.innerHTML = "Last Name :";
    emailLabel.innerHTML = "Email :";
    pass1Label.innerHTML = "Password :";
    pass2Label.innerHTML = "Confirm Password :";
    phoneLabel.innerHTML = "Phone Number :"


    arr = [fNameLabel, lNameLabel, emailLabel, pass1Label, pass2Label, phoneLabel];

    for(var i = 0; i < arr.length ; i++){
        arr[i].style.color = '#1877f2';
    }

}
/********************************************************/

function validationLogIn(){
    
    let loginUser = document.getElementById("loginUser").value,
        loginPass = document.getElementById("loginPass").value,
        error = document.getElementById("error"),
        loginMailPatern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        loginPhonePatern = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
        loginValid = false;

    if(loginUser === "" || loginMailPatern.test(loginUser) == false){
    
        if (loginPhonePatern.test(loginUser) == true){
    
            if(loginPass === ""|| loginPass.length < 6){
                display(error, "Invalid UserName or Password &#9940;");
                return loginValid = false;
            }
    
        }else{
        display(error, "Invalid UserName or Password &#9940;");
        return loginValid = false;
     }
    
    }

    else if (loginPhonePatern.test(loginUser) == false){

        if(loginUser !== "" || loginMailPatern.test(loginUser) == true){

            if(loginPass === ""|| loginPass.length < 6){
                display(error, "Invalid UserName or Password &#9940;");
                return loginValid = false;
            }

        }else{
        display(error, "Invalid UserName or Password &#9940;");
        return loginValid = false;
       }

    }

    else{
        return loginValid = true;
    }
}
