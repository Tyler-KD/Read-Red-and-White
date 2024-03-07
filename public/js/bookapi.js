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

//function listening for the user to click the search button
searchBtn.addEventListener("click", function(event) {
    event.preventDefault();

    fetch(url + titleInput.value + "&printType=books&maxResults=10")
    .then(function (response) {
        return response.json();
    })
    .then(data => {
        console.log(data);
        //bookTitles.textContent = "";
        for ( i = 0; i < data.length; i++) {
            if (data.result.items[i].volumeInfo.title !== null) {
                console.log(data.result.items[i].volumeInfo.title);
            }
       }
    })
})



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