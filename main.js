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
        genderMale = document.getElementById("male"),
        genderFemale = document.getElementById("female"),
        genderLabel = document.getElementById("mainGender"),
        birthdate = document.getElementById("birthdate").value,
        birthdateLabel = document.getElementById("mainBirth"),
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
    }else if(genderMale.checked == false && genderFemale.checked == false){
        resetSign();
        display(genderLabel, "Gender must be selected &#9940;")
        return valid = false;
    }else if(birthdate === ""){
        resetSign();
        display(birthdateLabel, "Birthdate must be selected &#9940;")
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
    genderLabel = document.getElementById("mainGender"),
    birthdateLabel = document.getElementById("mainBirth"),
    arr;

    fNameLabel.innerHTML = "First Name :";
    lNameLabel.innerHTML = "Last Name :";
    emailLabel.innerHTML = "Email :";
    pass1Label.innerHTML = "Password :";
    pass2Label.innerHTML = "Confirm Password :";
    phoneLabel.innerHTML = "Phone Number :";
    genderLabel.innerHTML = "Gender :";
    birthdateLabel.innerHTML = "Birthdate :";


    arr = [fNameLabel, lNameLabel, emailLabel, pass1Label, pass2Label, phoneLabel, genderLabel, birthdateLabel];

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
/*************************************************************/
let validPassLabel = document.getElementById("passMessage"),
    passContent = document.getElementById("length"),
    passInput = document.getElementById("loginPass");

    passInput.onfocus = () =>{
        validPassLabel.style.display = "block";
    }

    passInput.onblur = () => {
        validPassLabel.style.display = "none";
    }

    passInput.onkeyup = () =>{
        if(passInput.value.length >= 6){
            passContent.classList.remove("invalid");
            passContent.classList.add("valid");
        }else{
            passContent.classList.remove("valid");
            passContent.classList.add("invalid");
        }
    }

    /****************************************************/
    function showMyPassword() {
        let myPassword = document.getElementById("loginPass");

        if(myPassword.type === "password"){
            myPassword.type = "text";
        }else{
            myPassword.type = "password";
        }
    }
