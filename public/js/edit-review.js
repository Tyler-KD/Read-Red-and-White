// Handler for updating a user's review
const updateFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the Update a Review form
    const content = document.querySelector('#review-content').value.trim();
    const id = window.location.href.split('/')[4];

    if (content) {
        // Send an UPDATE request to the API endpoint
        const response = await fetch(`/api/reviews/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // If response is successful, redirect the browser back to the profile page after clicking 'Update'
        if (response.status < 400) {
            document.location.replace('/profile');
            // If response is unsuccessful, navigate back to the login route
        } else {
            alert('Failed to update review');
            document.location.replace('/login');
        }
    }
};

// Handler for deleting a user's review
const deleteButtonHandler = async (event) => {
    // Collect review_id from the window
    const id = window.location.href.split('/')[4];

    if (event.target.hasAttribute('data-id')) {
        // Send a DELETE request to the API endpoint
        const response = await fetch(`/api/reviews/${id}`, {
            method: 'DELETE',
        });
        // If response is successful, redirect the browser back to the profile page after clicking 'DELETE'
        if (response.status< 400) {
            console.log(response);
            document.location.replace('/profile');
            // If response is unsuccessful, navigate back to the login route
        } else {
            alert('Failed to delete review');
            document.location.replace('/login');
        }
    }
};

// Event listener for updating a user's review after clicking 'Update'
document
    .querySelector('.update-form').addEventListener('click', updateFormHandler);
// Event listener for deleting a user's review after clicking 'DELETE'
document
    .querySelector('.review-form')?.addEventListener('click', deleteButtonHandler);