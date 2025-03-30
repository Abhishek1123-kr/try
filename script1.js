// Function to show/hide password
function ShowPassword(checkbox, passwordField) {
    if (checkbox.checked) {
        passwordField.type = "text"; // Show password
    } else {
        passwordField.type = "password"; // Hide password
    }
}

// Function to validate the login form
function validateLoginForm(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("txtUsername").value;
    const password = document.getElementById("txtPassword").value;
    const role = document.querySelector('input[name="rblRole"]:checked').value;

    // Simple validation
    if (username === "") {
        alert("Please enter your username.");
        return;
    }
    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    // If validation passes, you can proceed with form submission
    alert(`Logging in as ${role} with username: ${username}`);
    // Here you would typically send the data to the server
}

// Function to handle forgot password
function forgotPassword() {
    alert("Forgot Password functionality is not implemented yet.");
}

// Function to handle Google Sign-In
function loginWithGoogle() {
    alert("Google Sign-In functionality is not implemented yet.");
}

// Event listeners
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnLogin").addEventListener("click", validateLoginForm);
    document.getElementById("btnForgotPassword").addEventListener("click", forgotPassword);
    document.getElementById("btnLoginWithGoogle").addEventListener("click", loginWithGoogle);
});
