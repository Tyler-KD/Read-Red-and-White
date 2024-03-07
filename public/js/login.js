// Handler for logging in
const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        // Send a POST request
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/profile');
        } else {
            alert('Failed to enter a valid username and password');
        }
    }
};

// Handler for signing up
const signupFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the signup form
    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (email && username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/profile');
        } else {
            alert('Failed to enter an email, username, and password with at least 8 characters');
        }
    }
};

// Event listener for logging in after clicking 'login'
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
// Event listener for signing up after clicking 'signup'
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);