

let loginButton = document.querySelector("button");

let inputs = document.querySelectorAll("input");


loginButton.addEventListener("click", function(){

    for (let i = 0; i < inputs.length; i++) {
        
        if (inputs[i].value === "") {
            alert("all feilds required")
            return
        }
    }

let userEmail = inputs[0].value;

let userPassword = inputs[1].value;

let savedEmail = localStorage.getItem("Email");

let savedPassword = localStorage.getItem("password");

if (userEmail !== savedEmail) {
    alert("This email is not registered.")
    return
}

if(savedPassword !== userPassword){
    alert("Invalid password. Please try again.")
    return;
}window.location.href = "https://chat.openai.com/";


  

})