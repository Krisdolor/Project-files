const firstnameElem = document.getElementById("firstname");
const lastnameElem = document.getElementById("lastname");
const emailElem = document.getElementById("email");
const passwordElem = document.getElementById("password");
const password2Elem = document.getElementById("password2");
const firstnameErrorElem = document.getElementById("firstname-error");
const lastnameErrorElem = document.getElementById("lastname-error");
const emailErrorElem = document.getElementById("email-error");
const passwordErrorElem = document.getElementById("password-error");
const password2ErrorElem = document.getElementById("password2-error");

const formElem = document.getElementById('form');
// console.log(firstnameErrorElem);

//add event listener to the form element

formElem.addEventListener("submit", (event) => {

    const emailRegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 

    //trim out spaces from the input data
    const firstnameValue = firstnameElem.value.trim();
    const lastnameValue = lastnameElem.value.trim();
    const emailValue = emailElem.value.trim();
    const passwordValue = passwordElem.value.trim();
    const password2Value = password2Elem.value.trim();

    //validating the firstname
    if (firstnameValue === "" || firstnameValue == null){
        event.preventDefault();
        firstnameErrorElem.innerHTML = "Your firstname is required";
    }

    //validating the lastname
    if (lastnameValue === "" || lastnameValue == null){
        event.preventDefault();
        lastnameErrorElem.innerHTML = "Your lastname is required";
    }

    //validating the email
    if(emailValue.match(emailRegExp)) {
        event.preventDefault();
        emailErrorElem.innerHTML = "enter a valid email";
    } 

    if(passwordValue === "") {
        event.preventDefault();
        passwordErrorElem.innerHTML = "password cannot be empty";
    }
    if(passwordValue.length >= 8) {
        event.preventDefault();
        passwordErrorElem.innerHTML = "password must be longer than 8 characters";
    }
    if(passwordValue.length <= 15) {
        event.preventDefault();
        passwordErrorElem.innerHTML = "password must not be longer than 15 characters";
    }
    if(password2Value ==="") {
        event.preventDefault();
        password2ErrorElem.innerHTML = "confirm password cannot be empty";
    }
    if(password2Value !== passwordValue) {
        event.preventDefault();
        password2Elem.innerHTML = "passwords does not match";
    }

})