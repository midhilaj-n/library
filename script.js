const addBtn = document.querySelector('.add-btn');
const formContainer = document.querySelector('.form-container');
const overlay = document.getElementById('overlay');

const myLibrary = [];


addBtn.addEventListener('click', () => {
    if(formContainer.style.display === "none"){
        formContainer.style.display = "block";
        overlay.style.display = "block";
        addBookToLibrary();
    }else{
        formContainer.style.display = "none"
    }
})


overlay.addEventListener('click', () => {
    formContainer.style.display = "none";
    overlay.style.display = "none";
})






function Book(book, author, pages , isRead){
    //constructor
    this.book = book;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}




function addBookToLibrary() {
    const submitBtn = document.querySelector('.submit-btn');
    const bookTitle = document.getElementById('book-title');
    const bookAuthor = document.getElementById('book-author');
    const bookPages = document.getElementById('book-pages');
    const isRead = document.getElementById('is-read');
    submitBtn.addEventListener('click' , () => {
        event.preventDefault();
        if (bookTitle.value && bookAuthor.value && bookPages.value) {
            const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, isRead.checked);
            myLibrary.push(newBook);

            displayBooks(myLibrary);

            // Clear input fields
            bookTitle.value = '';
            bookAuthor.value = '';
            bookPages.value = '';
            isRead.checked = false;
        } else {
            alert("Please fill in all fields before submitting.");
        }
    
    }); 

}

function displayBooks(booksArray){
    const bookContainer = document.querySelector(".book-container");
    bookContainer.innerHTML = ``
 
    booksArray.forEach((book, index) => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book");

        bookItem.innerHTML = `
          <p class="book-title">${book.book}</p>
          <p class="book-author">${book.author}</p>
          <p class="book-pages">${book.pages}</p>
          <button class="read-btn ${book.isRead ? "read" : "unread"}">${book.isRead ? "Unread" : "Read"}</button>
          <button class="remove-btn">Remove</button>`;

        bookContainer.appendChild(bookItem);

        const readBtn = bookItem.querySelector('.read-btn');

        readBtn.addEventListener('click', () => {
            // Toggle the read status and update button text
            book.isRead = !book.isRead;
            readBtn.textContent = book.isRead ? "Unread" : "Read";
            readBtn.className = `read-btn ${book.isRead ? "read" : "unread"}`;
        });

        const removeBtn = bookItem.querySelector('.remove-btn');

        removeBtn.addEventListener('click', () => {
            // Remove the book from the array and update the display
            booksArray.splice(index, 1);
            displayBooks(booksArray);
        });
    })

   
}