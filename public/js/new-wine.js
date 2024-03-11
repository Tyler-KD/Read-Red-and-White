// Handler for creating a user's wine
const newWineFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the Create a New Wine form
    const category = document.querySelector('#Wine-Category').value.trim();
    const brand = document.querySelector('#Wine-Brand').value.trim();
    const type = document.querySelector('#Wine-Type').value.trim();
    const flavor = document.querySelector('#Wine-Flavor').value.trim();
    const review_id = event.target.getAttribute("data-id");
    console.log(event.target)

    if (category, brand, type, flavor) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/wines', {
            method: 'POST',
            body: JSON.stringify({ category, brand, type, flavor, review_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // Reload the page after clicking "Submit" if successful
        if (response.status < 400) {
            // Wine History is populated with each wine on page
            document.location.reload();
            // If response is unsuccessful, navigate back to the login route
        } else {
            alert('Failed to create wine');
            document.location.replace('/login')
        }
    }
};

// Event listener for creating a wine for a review after clicking 'Submit
document
    .querySelector('.new-Wine-form')?.addEventListener('submit', newWineFormHandler);