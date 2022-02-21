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
    myLibrary.sort((a,b)=>{
        return (a.title.toLowerCase()<b.title.toLowerCase())?-1:1    
    });
}

function deleteCallBack(e){
    let id =e.target.parentNode.parentNode.getAttribute("bid");
    myLibrary.splice(id,1);
    showBooks();
}

function showBook(book,n){
    const cont=document.createElement("tr");
    cont.setAttribute("bid",`${n}`)
    let i, cols=[]
    for(i=0;i<6;i++) {
        cols.push(document.createElement("td"));
        cont.appendChild(cols[i]);
    }
    cols[3].classList.add("short");
    cols[4].classList.add("short");
    cols[5].classList.add("short");
    
    cols[0].textContent=book.title;
    cols[1].textContent=book.author;
    cols[2].textContent=book.pages;
    book.read?"yes":"no";

    const btn = document.createElement("button");
    btn.classList.add("delButton");
    btn.textContent="X";
    btn.addEventListener("click", deleteCallBack)
    cols[4].appendChild(btn);
    
    const btn2 = document.createElement("button");
    btn2.classList.add("readButton");
    if(book.read){
        cols[3].textContent="yes";
        btn2.classList.add("read");
        btn2.textContent="Mark as not read"
    }
    else{
        cols[3].textContent="no";
        btn2.textContent="Mark as read";
    }
    cols[5].appendChild(btn2);

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