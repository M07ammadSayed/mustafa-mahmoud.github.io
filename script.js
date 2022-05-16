let bu = document.getElementById("goUp");

window.onscroll = function () {
    if (window.scrollY >= 500) {
        bu.style.transform = "translateY(0px)";
    } else {
        bu.style.transform = "translateY(100px)";
    }
};

bu.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function createElement() {
    for (let i = 0; i < 82; i++) {
        const mn = document.createElement("div"),
            im = document.createElement("img"),
            h1 = document.createElement("h1"),
            h6 = document.createElement("h6"),
            a = document.createElement("a"),
            con2 = document.createElement("div"),
            dadcon = document.createElement("div");
        document.querySelector("section.books-container div.row").appendChild(mn);
        mn.appendChild(con2)
        con2.appendChild(h1);
        con2.appendChild(im);
        con2.appendChild(dadcon);
        dadcon.appendChild(h6);
        dadcon.appendChild(a);
        mn.classList = "col col-lg-4 col-md-6 col-sm-12";
        h1.classList = "label wow bounceIn";
        dadcon.classList = "wow fadeInDown";
        con2.classList = "mobile-hover-1 wow fadeInUp";
        a.setAttribute("target", "_blank");
        con2.addEventListener("click", function () {
            if (con2.className == "mobile-hover-1 wow fadeInUp") {
                con2.className = "mobile-hover-2 wow fadeInUp";
            } else {
                con2.className = "mobile-hover-1 wow fadeInUp";
            }
        });
    }
}createElement();

function bookName() {
    let ar = [],
        di = [];
    books.forEach(n => {
        ar.push(n.BookName);
    });
    const e = document.querySelectorAll("section.books-container div.row div div h1.label");
    for (let i = 0; i < e.length; i++) {
        di.push(e[i]);
        const all = e[i].appendChild = ar[i];
        e[i].innerHTML = all;
    }
}bookName();

function bookPhotos() {
    let bookP = [],
        imgse = [];
    books.forEach(n => {
        bookP.push(n.BookPhoto);
    });
    const imgsc = document.querySelectorAll("section.books-container div.row div div img");
    for (let i = 0; i < imgsc.length; i++) {
        imgse.push(imgsc[i]);
        const all_2 = imgsc[i].setAttribute("src", bookP[i]);
        imgsc[i].innerHTML = all_2;
    }
}bookPhotos();

function bookDate() {
    let bookD = [],
        h6c = [];
    books.forEach(n => {
        bookD.push(n.BookDate);
    });
    const bookDC = document.querySelectorAll("section.books-container div.row div div div h6");
    for (let i = 0; i < bookDC.length; i++) {
        h6c.push(bookDC[i]);
        const all_3 = bookDC[i].appendChild = bookD[i];
        bookDC[i].innerHTML = all_3;
    }
}bookDate();

function bookURL() {
    let bookU = [],
        ac = [];
    books.forEach(n => {
        bookU.push(n.BookURL);
    });
    const bookUC = document.querySelectorAll("section.books-container div.row div div div a");
    for (let i = 0; i < bookUC.length; i++) {
        ac.push(bookUC[i]);
        const all_4 = bookUC[i].setAttribute("href", bookU[i]);
        bookUC[i].innerHTML = all_4;
        bookUC[i].innerHTML = `<i class="fa-solid fa-download"></i>`;
    }
}bookURL();

window.onbeforeunload = function () {
    if (window.scrollY > 0) {
        window.scroll(0, 0);
    }
}();

setTimeout(function () {
    document.querySelector("div.loading-container").style.display = "none";
    document.body.style.overflowY = "auto";
}, 6000);

new WOW().init();