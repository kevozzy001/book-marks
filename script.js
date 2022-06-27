let myLibrary = [
   
];


const bookList = document.querySelector('.mainBx')



function Book(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }


function addBookToLibrary() {
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const pages = document.querySelector('#pages').value

    if(title !== '' && author !== '' && pages !== ''){
        myLibrary.push(new Book(title, author, pages))
        displayBooks()
        removeInput()
        console.log(myLibrary)
    } else {
        alert('not filled out')
        removeInput()
    }
}

function displayBooks(){
    bookList.innerHTML = ''
    for(let i = 0; i < myLibrary.length; i++){
        const bookItems = document.createElement('div')
        bookItems.className = 'card'
        bookItems.innerHTML = 
        `<div>Book: ${myLibrary[i].title}</div>
        <div>Author: ${myLibrary[i].author}</div>
        <div>Pages: ${myLibrary[i].pages}</div>
        <button class = 'delete' onclick="removeBook(${i})">
        Delete</button>`
        bookList.append(bookItems)
    }
}


function removeBook(i) {
	myLibrary.splice(i, 1);
	displayBooks();
}


function removeInput(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
}

/* --------- Modal ---------- */

const modal = document.querySelector('.modal');
const addBtn = document.querySelector('.addBtn');
const cancelbtn = document.querySelector('.cancel');
const confirmBtn = document.querySelector('.confirm')

addBtn.addEventListener('click', function(){
    modal.style.display = 'block';
    document.getElementById("overlay").style.display = "block";
})

cancelbtn.addEventListener('click', function(){
    modal.style.display = 'none';
    document.getElementById("overlay").style.display = "none";
})

confirmBtn.addEventListener('click', function(){
    addBookToLibrary();
})

