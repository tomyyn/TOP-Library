let myLibrary=[];
const bookList=document.querySelector(".bookList")

const addNew=document.querySelector(".activateForm");
const form=document.querySelector("form");


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
    bookList.appendChild(cont)
}

function showBooks(){
    myLibrary.forEach(book=>
        {showBook(book);}
    )
}

function addNewCallBack(){
    addNew.style.display="none";
    form.style.display="block";
}

addNew.addEventListener("click",addNewCallBack)

addBookToLibrary("SampleTextOfASample", "Sigman", 600, true)
showBooks();