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
        //data.items[i].volumeInfo.title !== null && data.items[i].volumeInfo.authors !== null && 
        for ( i = 0; i < data.items.length; i++) {
            if (data.items[i].volumeInfo.imageLinks !== undefined) {
                // console.log(data.items[i].volumeInfo.title);
                // console.log(data.items[i].volumeInfo.authors);
                // console.log(data.items[i].volumeInfo.categories);
                // //console.log(data.items[i].volumeInfo.imageLinks.thumbnail);
                // console.log(data.items[i].volumeInfo.description);
                console.log(data.items[i].volumeInfo);

                //Creates p element for each title and puts it in the book-cards class
                var bookEl = document.createElement('p');
                bookEl.textContent = data.items[i].volumeInfo.title;
                bookList.appendChild(bookEl);
                
                //creates button next to the title when titles have been fetched
                var addBtn = document.createElement('button');
                addBtn.className = "add-button";
                addBtn.textContent = " Add+ ";
                bookEl.appendChild(addBtn);

                //creates list element and appends it under the book-cards class
                var author = document.createElement('li');
                author.textContent = ("Author: " + data.items[i].volumeInfo.authors[0]);
                bookEl.appendChild(author);

                //creates img element, pulls the image url, and places it in the book-cards class
                var bookImg = document.createElement('img');
                bookEl.className = 'card';
                bookImg.setAttribute('src', data.items[i].volumeInfo.imageLinks.thumbnail);
                bookImg.className = 'card-img';
                bookEl.appendChild(bookImg);       
            }     
       }
    })
})


//console.log(data.result.items[i].volumeInfo.title);

// Handler for creating a review-page
const reviewPageHandler = async (event) => {
    event.preventDefault();
    // console.log(event.target);
    // const review_id = event.target.getAttribute("data-id") // index of search results
    // const book = books[review_id];
    const title = bookList.children[0];
    const author = bookList.children[0].children[1];
    const image = bookList.children[0].children[2];


    console.log(event.target)

    if (review_input) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ title, author, image, review_id }), // build object to send to POST(create) route for the Review sequelize model
            headers: {
                'Content-Type': 'application.json'
            },
        });

        if (response.status < 400) {
            // get the new Review model id for the redirect
            document.location.replace('/create-review');
        } else {
            alert('Failed to load create-review page');
            document.location.replace('/login');
        }
    }
};

document
    .querySelector('book-cards')?.addEventListener('submit', reviewPageHandler);

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

