// Handler for creating a user's review
const newFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the Create a New Review form
    const content = document.querySelector('#review-content').value.trim();

    if (content) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // If response is successful, redirect the browser to the profile page after clicking 'Create'
        if (response.status < 400) {
            document.location.replace('/profile');
            // If response is unsuccessful, navigate back to the login route
        } else {
            alert('Failed to create review');
            document.location.replace('/login');
        }
    }
};

// Event listener for creating a user's review after clicking 'Create'
document
    .querySelector('.new-review-form')
    .addEventListener('submit', newFormHandler)