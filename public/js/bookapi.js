const url = "https://www.googleapis.com/books/v1/volumes?q=";
const bookTitles = document.querySelector('.review-list')

// fetch("https://www.googleapis.com/books/v1/volumes?q=time&printType=books")

// .then(function(res) {
//     return res.json();
    
// })
// .then(function(result) {
//     title = result.items;
//     // description = result.items[0].volumeInfo.description;
//     console.log(title);
//     // console.log(description);
 
// })
// .then(function(error) {
//     console.log(error);
// })

//pulling the class for the search box
var titleInput = document.querySelector('.search-input');

//pulling the class for the search button
var searchBtn = document.querySelector('.search-btn')

const bookList = document.querySelector('.book-cards')


//function listening for the user to click the search button
searchBtn.addEventListener("click", function(event) {
    event.preventDefault();

    fetch(url + titleInput.value + "&printType=books&maxResults=3")
    .then(function (response) {
        return response.json();
    })
    .then(data => {
        //The below logs are the correct paths of the information that we need
        // console.log(data.items[0].volumeInfo.title);
        // console.log(data.items[0].volumeInfo.authors[0]);
        // console.log(data.items[0].volumeInfo.categories[0]);
        // console.log(data.items[0].volumeInfo.imageLinks.smallThumbnail);
        // console.log(data.items[0].volumeInfo.description);
        //bookTitles.textContent = "";
        for ( i = 0; i < data.length; i++) {
            if (data.result.items[i].volumeInfo.title !== null) {
                console.log(data.result.items[i].volumeInfo.title);
            }
            
       }
    })

})



//console.log(data.result.items[i].volumeInfo.title);

// Handler for creating a review-page
const newReviewFormHandler = async (event) => {
    event.preventDefault();

    const review_id = event.target.getAttribute("data-id") // index of search results
    const book = books[review_id];
    console.log(event.target)

    if (review_input) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ review_id }), // build object to send to POST(create) route for the Review sequelize model
            headers: {
                'Content-Type': 'application.json'
            },
        });

        if (response.status < 400) {
            // get the new Review model id for the redirect
            document.location.replace('/review_id');
        } else {
            alert('Failed to create review-page');
            document.location.replace('/login');
        }
    }
};

document
    .querySelector('')?.addEventListener('submit', newReviewFormHandler);

// function fetchdata() {
//     const url = "https://www.googleapis.com/books/v1/volumes?q=time&printType=books";

// }



// const API = 'AIzaSyBAVSXjnDVfRiLkrOIeNPqSADXVSBKJb9k'
// const url = `https://www.googleapis.com/books/v1/volumes?q=time&printType=books&key=AIzaSyBAVSXjnDVfRiLkrOIeNPqSADXVSBKJb9k`;
// const options = {
//     method: 'GET'
// }



// function fetchdata() {
//     fetch(url)

//     console.log(data)
// };

// fetchdata();


// // function getApi() {
// //     const requestUrl = `GET https://www.googleapis.com/books/v1/volumes?q=time&printType=books&key=AIzaSyBAVSXjnDVfRiLkrOIeNPqSADXVSBKJb9k`;

//     fetch(requestUrl)
//      console.log(data);
// }

// getApi();