const url = "https://www.googleapis.com/books/v1/volumes?q=";

fetch("https://www.googleapis.com/books/v1/volumes?q=time&printType=books")

.then(function(res) {
    return res.json();
    
})
.then(function(result) {
    title = result.items;
    // description = result.items[0].volumeInfo.description;
    console.log(title);
    // console.log(description);
 
})
.then(function(error) {
    console.log(error);
})

//this variable will read what the user searches in the search bar from the html
//var titleInput = document.querySelector('.search-input');
searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    fetch(url + titleInput.value + "printType=books")
    .then(function (response) {
        return response.json();
    })
    .then(data => {
        
    })

})



function fetchdata() {
    const url = "https://www.googleapis.com/books/v1/volumes?q=time&printType=books";

}



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