// Function to validate email format
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Function to handle form submission
function submitForm() {
    const emailInput = document.getElementById('txtForgotpwd').value;
    const emailError = document.getElementById('rfvForgotpwd');
    const validEmailError = document.getElementById('revForgotpwd');

    // Clear previous error messages
    emailError.style.display = 'none';
    validEmailError.style.display = 'none';

    // Validate email
    if (!emailInput) {
        emailError.style.display = 'block'; // Show error if email is empty
    } else if (!isValidEmail(emailInput)) {
        validEmailError.style.display = 'block'; // Show error if email is invalid
    } else {
        // If valid, proceed with form submission (you can replace this with actual submission logic)
        alert("Form submitted successfully!"); // Placeholder for actual submission logic
        // Redirect to the next page (replace 'nextPage.html' with your actual page)
        
    }
}
// Function to redirect to the login page
function goToLogin() {
    window.location.href = 'index1.html'; // Replace 'index1.html' with the actual login page URL
}

// Attach the function to the button's click event
document.getElementById('lblogin').onclick = goToLogin;

// Function to handle role change if needed
function ChangeLoginRole() {
    // Logic to handle role change if needed
}
