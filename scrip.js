document.addEventListener("DOMContentLoaded", () => {
    const myLibrary = [];
    
    class Book {
        constructor(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }

        toggleRead() {
            this.read = !this.read;
        }
    }

    function addBookToLibrary(title, author, pages, read) {
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        displayBooks();
    }

    function displayBooks() {
        const bookList = document.querySelector('.booklist');
        while (bookList.firstChild) {
            bookList.removeChild(bookList.firstChild);
        }

        myLibrary.forEach((book, index) => {
            const bookListItem = document.createElement('div');
            bookListItem.classList.add('booklist-item');

            const bookListUl = document.createElement('ul');

            const titleItem = document.createElement('li');
            titleItem.classList.add('title-item');
            titleItem.textContent = `Title: ${book.title}`;

            const authorItem = document.createElement('li');
            authorItem.classList.add('author-item');
            authorItem.textContent = `Author: ${book.author}`;

            const pagesItem = document.createElement('li');
            pagesItem.classList.add('pages-item');
            pagesItem.textContent = `Pages read: ${book.pages}`;

            const readItem = document.createElement('li');
            readItem.classList.add('read-item');
            readItem.textContent = `Read: ${book.read ? 'Yes' : 'Not'}`;

            const toggleReadButton = document.createElement('button');
            toggleReadButton.textContent = 'Toggle Read';
            toggleReadButton.addEventListener('click', () => {
                book.toggleRead();
                displayBooks();
            });

            const removeBookButton = document.createElement('button');
            removeBookButton.textContent = 'Remove Book';
            removeBookButton.addEventListener('click', () => {
                myLibrary.splice(index, 1);
                displayBooks();
            });

            bookListUl.appendChild(titleItem);
            bookListUl.appendChild(authorItem);
            bookListUl.appendChild(pagesItem);
            bookListUl.appendChild(readItem);
            bookListUl.appendChild(toggleReadButton);
            bookListUl.appendChild(removeBookButton);

            bookListItem.appendChild(bookListUl);
            bookList.appendChild(bookListItem);
        });
    }

    const openDialog = document.querySelector('.open-dialog');
    const dialog = document.querySelector('#dialog');
    const addBook = document.querySelector('#add-book');
    const closeDialog = document.querySelector('#close-dialog');
    const form = document.querySelector('.form');

    openDialog.addEventListener('click', () => {
        dialog.classList.add('show');
        dialog.showModal();
    });

    closeDialog.addEventListener('click', (event) => {
        event.preventDefault();
        dialog.classList.remove('show');
        dialog.close();
    });

    addBook.addEventListener('click', (event) => {
        event.preventDefault();

        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const read = document.querySelector('#read').checked;

        addBookToLibrary(title, author, pages, read);

        form.reset();

        dialog.classList.remove('show');
        dialog.close();
    });


    addBookToLibrary('Sample Book 1', 'Author 1', 100, true);
    addBookToLibrary('Sample Book 2', 'Author 2', 200, false);
    addBookToLibrary('Sample Book 1', 'Author 1', 100, true);
    addBookToLibrary('Sample Book 2', 'Author 2', 200, false);
    addBookToLibrary('Sample Book 1', 'Author 1', 100, true);
    addBookToLibrary('Sample Book 2', 'Author 2', 200, false);
    addBookToLibrary('Sample Book 1', 'Author 1', 100, true);
    addBookToLibrary('Sample Book 2', 'Author 2', 200, false);
    addBookToLibrary('Sample Book 1', 'Author 1', 100, true);
    addBookToLibrary('Sample Book 2', 'Author 2', 200, false);
    addBookToLibrary('Sample Book 1', 'Author 1', 100, true);

});
