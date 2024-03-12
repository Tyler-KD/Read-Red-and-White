const url = "https://www.googleapis.com/books/v1/volumes?q=";
const bookTitles = document.querySelector('.review-list')

//pulling the class for the search box
var titleInput = document.querySelector('.search-input');

//pulling the class for the search button
var searchBtn = document.querySelector('.search-btn')

//pulling the class for 
const bookList = document.querySelector('.book-cards')

//function listening for the user to click the search button
searchBtn.addEventListener("click", function (event) {
    event.preventDefault();

    fetch(url + titleInput.value + "&printType=books&maxResults=6")
        .then(function (response) {
            return response.json();
        })
        .then(data => {
            bookList.textContent = "";
            for (i = 0; i < data.items.length; i++) {
                if (data.items[i].volumeInfo.imageLinks !== undefined) {
                    console.log(data.items[i].volumeInfo);

                    //Creates p element for each title and puts it in the book-cards class
                    var bookEl = document.createElement('p');
                    bookEl.textContent = data.items[i].volumeInfo.title;
                    bookList.appendChild(bookEl);

                    //creates button next to the title when titles have been fetched
                    var addBtn = document.createElement('button');
                    addBtn.className = "add-button mx-4 px-2 font-semibold rounded-lg border-2 border-black hover:scale-110 p-2 my-2 bg-blue-400 hover:bg-blue-600";
                    addBtn.textContent = " Add ";
                              
                    bookEl.appendChild(addBtn);

                    //creates list element and appends it under the book-cards class
                    var author = document.createElement('li');
                    author.className = "text-xl"
                    author.textContent = ("Author: " + data.items[i].volumeInfo.authors[0]);
                    bookEl.appendChild(author);

                    //creates img element, pulls the image url, and places it in the book-cards class
                    var bookImg = document.createElement('img');
                    bookEl.className = 'card';
                    bookImg.setAttribute('src', data.items[i].volumeInfo.imageLinks.thumbnail);
                    bookImg.className = 'card-img py-6 flex justify-center';
                    bookEl.appendChild(bookImg);

                            
          
                }
            }
        })
})


// Handler for creating a review-page
const reviewPageHandler = async (event) => {
    event.preventDefault();

    if (event.target.matches("button")) {
        // Targets the Add button as a delimiter
        const parentText = event.target.parentElement.textContent.split(' Add ')
        const title = parentText[0]
        const author = parentText[1].replace('Author:', '')
        const image = event.target.nextElementSibling.nextElementSibling.src
        console.log(title, author, image);


        console.log(event.target)

        if (title && author && image) {
            localStorage.setItem('title', title)
            localStorage.setItem('author', author)
            localStorage.setItem('image', image)
            document.location.replace('/create-review')
        }
    }
};

document
    .querySelector('.book-cards')?.addEventListener('click', reviewPageHandler);
