console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor(bookCount, books) {
    this.bookCount = 0;
    this.books = [];
    this.markRead = this.markRead.bind(this)
    this.addBook = this.addBook.bind(this)
  }
  markRead(checkbox, id) {
    console.log("inside of markRead")
    for (let book of newLibrary.books) {
      console.log("inside for loop")
      if (book.id == checkbox.id) {
        console.log(checkbox)
        book.read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    }
  }
  addBook() {
    console.log("Inside of addBook")
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let read = document.getElementById("read").checked

    let newBook = new Book(this.bookCount, title, author, read);
    this.books.push(newBook);

    let newRow = document.createElement('tr')
    let tdTitle = document.createElement('td')
    tdTitle.textContent = newBook.title
    let tdAuthor = document.createElement('td')
    tdAuthor.textContent = newBook.author
    let tdRead = document.createElement('td')
    let checkbox = document.createElement("input")
    checkbox.id = this.bookCount.toString()
    console.log(checkbox.id)
    console.log(this.bookCount)
    checkbox.type = "checkbox"
    checkbox.checked = newBook.read
    console.log(newBook.read)
    checkbox.disabled = newBook.read
    checkbox.addEventListener("click",
      ()=> newLibrary.markRead(checkbox)
    )
    tdRead.appendChild(checkbox)
    newRow.appendChild(tdTitle)
    newRow.appendChild(tdAuthor)
    newRow.appendChild(tdRead)
    let tableBody = document.querySelector('tbody')
    tableBody.appendChild(newRow)
    this.bookCount++;
  }
}

const newLibrary = new Library();
let form = document.querySelector('form')
form.addEventListener("submit", (event)=>{
  event.preventDefault()
  newLibrary.addBook(newLibrary.books, newLibrary.bookCount)
})
