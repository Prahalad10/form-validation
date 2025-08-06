// Function to validate the form
document.getElementById("registrationForm").addEventListener("submit", function(e){
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phno = document.getElementById("phno").value.trim();
    const age = document.getElementById("age").value;
    const category = document.getElementById("category").value;

    // Reset all error messages
    document.querySelectorAll(".error").forEach(element => element.textContent = "");
    
    let valid = true;

    // Checking validity of name
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById("nameError").textContent = "Enter a valid name";
        valid = false;
    }

    // Checking validity of email
    if (!/^[a-z]+@[a-z]+\.[a-z]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email ID";
        valid = false;
    }

    // Checking validity of contact number
    if (!/^\d{10}$/.test(phno)) {
        document.getElementById("phnoError").textContent = "Enter a valid phone number";
        valid = false;
    }

    // Checking validity of age
    if (age < 18 || isNaN(age)) {
        document.getElementById("ageError").textContent = "Age must be a minimum of 18";
        valid = false;
    }

    // Checking if category is selected
    if (!category) {
        document.getElementById("categoryError").textContent = "Choose a category type";
        valid = false;
    }

    // Reset if form is valid and registration is successful
    if (valid) {
        alert("Registration Successful!");
        this.reset();
    }
});
