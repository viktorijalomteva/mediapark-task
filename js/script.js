(function() {
// Declared variables
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const message = document.getElementById("message");
const accept = document.getElementById("accept");
const btn = document.getElementById("send");

// Form eventListener 
btn.addEventListener("click", function(){
    notEmptyName();
    notEmptyMessage();
    onlyNumbers();
    validateEmail();
    checkboxChecked();
});


// Display warning
function displayWarning(field) {
    document.getElementById("label-"+field+"").style.display = "block";   
}
// Clear input
function clearFields(field) {
    document.getElementById("label-"+field+"").style.display = "none";  
}

// Empty fields
function notEmptyName() {
        if (name.value.trim() == ""){
            displayWarning('name');
        } else {
            clearFields('name');            
        }
};

function notEmptyMessage(){
    if (message.value.trim() == ""){
        displayWarning('message');
    } else {
        clearFields('message');           
    }
}

// Field with numbers
function onlyNumbers() {
    let warning = document.getElementById("label-number");
    // Validate numbers
    const numbers = /^[0-9]+$/;
    
    if (number.value.match(numbers)) {
       warning.textContent = "";
    } else {
       warning.style.display = "block";
       warning.innerHTML = "Įveskite tik numerius";
    }
};

// Email validation
function validateEmail() {
    let warning = document.getElementById("label-email");

    // Validate email
    const validEmail = /\S+@\S+\.\S+/;

    if(email.value.match(validEmail)){
        warning.textContent = "";     
    } else {
        warning.style.display = "block";
        warning.textContent = "Įvestas neteisingas el. paštas";
    }
};

// Checked checkbox
function checkboxChecked() {
    let warning = document.getElementById("label-accept");
    let checkboxBtn = document.querySelector(".form__accept-btn");

    // If checkbox checked
    if(accept.checked === true){
        warning.textContent = "";
        checkboxBtn.style.border = "1px solid #6F88B1";    
    } else {
        warning.style.display = "block";
        checkboxBtn.style.border = "1px solid #E36464";
    }
};
})();