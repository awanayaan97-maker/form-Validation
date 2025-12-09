

let inputs = document.querySelectorAll("input");



let submitButton = document.querySelector("button");

submitButton.addEventListener("click", function(){

    for (let i = 0; i < inputs.length; i++) {
       
        if (inputs[i].value === "") {
            
            alert("all feilds required")
            return
        }
    }

     if (inputs[2].value.length < 8) {
        alert("password must be at least 8 characters");
        return
     }

    if (inputs[2].value !== inputs[3].value) {
        alert("Passwords do not match.");
        return
    }

    alert("Form submitted successfully!")

    inputs.forEach(function(inputData){

     localStorage.setItem(inputData.placeholder, inputData.value);

     window.location.href = "login.html";

    })
    



})

