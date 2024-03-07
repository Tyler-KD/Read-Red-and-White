fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
.then(function(res) {
    return res.json();
})
.then(function(result) {
    title = result.items[0].volumeInfo.title;
    description = result.items[0].volumeInfo.description;
    console.log(title);
    console.log(description);
})
.then(function(error) {
    console.log(error);
})



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