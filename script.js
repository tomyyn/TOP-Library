let myLibrary=[];
const bookList=document.querySelector(".bookList")


function Book(title, author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = ()=>{
        let information=this.read?"read":"not read"
        return `${this.title} by ${this.author}, ${this.pages} pages, ` + information + ".";
    }
}

function addBookToLibrary(title, author,pages,read){
    
    myLibrary.push(new Book(title,author,pages, read));
}

function showBook(book){
    const cont=document.createElement("div");
    cont.textContent=book.info();
    console.log(book.info())
    bookList.appendChild(cont)
}

function showBooks(){
    myLibrary.forEach(book=>
        {showBook(book);}
    )
}


addBookToLibrary("SampleTextOfASample", "Sigman", 600, true)
showBooks();