let myLibrary=[];
const bookList=document.querySelector("table");

const addNew=document.querySelector(".activateForm");
const form=document.querySelector("form");
const cancel=document.querySelector(".formCan");
const submit=document.querySelector(".formSub");
const inputs=Array.from(document.querySelectorAll("form input"));

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
    myLibrary.sort();
}

function showBook(book,n){
    const cont=document.createElement("tr");
    let i, cols=[]
    for(i=0;i<6;i++) {
        cols.push(document.createElement("td"));
        cont.appendChild(cols[i]);
    }
    cols[0].textContent=book.title;
    cols[1].textContent=book.author;
    cols[2].textContent=book.pages;
    cols[3].textContent=book.read?"yes":"no";

    const btn = document.createElement("button");
    btn.classList.add("delButton");
    btn.setAttribute("bid",`${n}`)
    btn.textContent="X";
    cols[4].appendChild(btn);
    

    bookList.appendChild(cont);
}

function showBooks(){
    let i=0;
    while (bookList.childNodes.length > 2) {
        bookList.removeChild(bookList.lastChild);
    }
    myLibrary.forEach(book=>
        {showBook(book,i);
        i++;}
    )
}

function addNewCallBack(){
    addNew.style.display="none";
    form.style.display="block";
}

function hideForm(){
    form.style.display="none";
    addNew.style.display="block";
    inputs[0].value="";
    inputs[1].value="";
    inputs[2].value="";
    inputs[3].checked=false;
}

function cancelCallBack(){
    hideForm();
}

function submitCallBack(){
    addBookToLibrary(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].checked);
    showBooks();
    
    hideForm();
}

addNew.addEventListener("click",addNewCallBack);
cancel.addEventListener("click",cancelCallBack);
submit.addEventListener("click",submitCallBack);

addBookToLibrary("SampleTextOfASample", "Sigman", 600, true)
showBooks();