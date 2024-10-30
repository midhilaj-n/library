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
        console.log(bookTitle.value , bookAuthor.value, bookPages.value , isRead.checked);
        bookTitle.value = ``;
        bookAuthor.value = '';
        bookPages.value = '';
        isRead.checked = false;
    
    }); 

}