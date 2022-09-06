let library = [];
let info = ['title','author','pages'];
let p = ['p0','p1','p2'];
let h = ['h1','p','p'];

function displayBooks() {
    for (let i = 0; i < library.length; i++) {
        const book =document.createElement("div");
        const p0 =document.createElement("h1");
        const p1 =document.createElement("p");
        const p2 =document.createElement("p");
        for(let k=0; k<info.length; k++){
            p[k] =document.createElement(h[k]);     //something that isnt an array (p[k])
        //const first='p'+k;
        console.log(p[0]);
        .appendChild(document.createTextNode(library[i][k]));    //something that isnt an array .appendchild
        book.appendChild(p0);
        }
        document.querySelector(".library").appendChild(book);
    }
}

document.querySelector("#push").addEventListener('click',(e)=>{
    e.preventDefault();
    let indibook = [];
    for (let i = 0; i < info.length; i++) {
        indibook[i]=document.querySelector('#'+info[i]).value;
    }
    library.push(indibook);
    console.log(library);
    displayBooks();
        //push title, author, pages into indibook[] into library[]
});