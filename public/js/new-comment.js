// Handler for creating a user's comment
const newCommentFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the Create a New Comment form
    const comment_input = document.querySelector('#textarea-comment').value.trim();
    const review_id = event.target.getAttribute("data-id");
    console.log(event.target)

    if (comment_input) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_input, review_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // Reload the page after clicking "Submit" if successful
        if (response.status < 400) {
            // Comment History is populated with each comment on page
            document.location.reload();
            // If response is unsuccessful, navigate back to the login route
        } else {
            alert('Failed to create comment');
            document.location.replace('/login')
        }
    }
};

// Event listener for creating a comment for a review after clicking 'Submit
document
    .querySelector('new-comment-form')?.addEventListener('submit', newCommentFormHandler);