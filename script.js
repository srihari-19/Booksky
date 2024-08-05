//select popup box & overlay
let popupoverlay = document.querySelector(".popup-overlay")
let popupbutton = document.querySelector(".add-btn")
let popupbox = document.querySelector(".popup-box")

popupbutton.addEventListener("click", function () {
    popupbox.style.display = "block"
    popupoverlay.style.display = "block"
})

//select cancel button for prevent reload page
var cancelbtn = document.getElementById("popup-cancel")
cancelbtn.addEventListener("click", function (event) {
    event.preventDefault()
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})

//select id for add a book=add-book,book-title-input,book-authore-input,book-description-input
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById('book-title-input')
var bookauthore = document.getElementById('book-authore-input')
var bookdescription = document.getElementById('book-description-input')


addbook.addEventListener("click", function (event) {
    event.preventDefault()
    // Check if the required input fields are empty
    if (booktitle.value === '' || bookauthore.value === '' || bookdescription.value === '') {
        alert('Please fill out all the fields before adding a book.');
    }
    else {
        var div = document.createElement('div')
        div.setAttribute("class", "book-container")
        div.innerHTML = `<h2>${booktitle.value}</h2>
            <h5>${bookauthore.value}</h5>
            <p>${bookdescription.value}</p>
            <button onclick="deletebook(event)">Delete</button>
    `
        container.append(div)
        alert('Your book was added successfully.');
        popupbox.style.display = "none"
        popupoverlay.style.display = "none"

        // Clear input fields after submission
        booktitle.value = '';
        bookauthore.value = '';
        bookdescription.value = '';
    }

})

function deletebook(event) {
    event.target.parentElement.remove()
}


