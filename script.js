let myLibrary=[];
const bookList=document.querySelector(".bookList")

const addNew=document.querySelector(".activateForm");
const form=document.querySelector("form");
const cancel=document.querySelector(".formCan");
const submit=document.querySelector(".formSub");


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

function hideForm(){
    form.style.display="none";
    addNew.style.display="block";
}

function cancelCallBack(){
    hideForm();
}

function submitCallBack(){
    hideForm();
}

addNew.addEventListener("click",addNewCallBack);
cancel.addEventListener("click",cancelCallBack);
submit.addEventListener("click",submitCallBack);

addBookToLibrary("SampleTextOfASample", "Sigman", 600, true)
showBooks();