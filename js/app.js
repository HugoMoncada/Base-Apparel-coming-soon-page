const form = document.querySelector("form");
const response = document.querySelector(".response");
const validRegex = /\S+@\S+\.\S+/;
const errorIcon = document.querySelector(".error-icon");
const input = document.querySelector("input");



form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const valid = validRegex.test(input.value);

    if(valid == false){
        response.innerHTML= "Please provide a valid email";
        response.style.color = "red"
        errorIcon.style.display= "block";
        input.style.border = "1px solid red";
        return;
    }
    errorIcon.style.display= "none";
    response.innerHTML= "Thank you we'll be in touch soon!";
    response.style.color = "green"
    input.style.border = "1px solid var(--Desaturate-Red)";

});