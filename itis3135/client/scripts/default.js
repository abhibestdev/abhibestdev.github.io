function loadHeader() {
    document
        .getElementById("default-header")
        .innerHTML = "<ul><li><a href='index.html'>Home</a></li><li><a href='listings.html'>Listings</" +
            "a></li><li><a href='testimonials.html'>Testimonials</a></li><li class='right'><a" +
            " href='contact.html'>Contact</a></li><li class='right'><a href='about.html'>Abou" +
            "t</a></li></ul>"
}

function loadFooter() {
    document
        .getElementById("default-footer")
        .innerHTML = '<div> <p>Page built by <a href="https://webpages.charlotte.edu/akoukunt/itis3135/abhinavsangrykangaroo.com/index.html' +
            '/">Angry Kangaroo</a> © 2023</p><div id="validation"><a href = "https://validat' +
            'or.w3.org/check?uri=referer"><img style = "border:0;width:88px;height:31px" src =' +
            ' "https://upload.wikimedia.org/wikipedia/commons/b/bb/W3C_HTML5_certified.png" a' +
            'lt = "Valid HTML!"></a><a href = "https://jigsaw.w3.org/css-validator/check/' +
            'referer" > <img style = "border:0;width:88px;height:31px" src = "https://jigsaw.' +
            'w3.org/css-validator/images/vcss" alt = "Valid CSS!" > </a> </div> </div> ';

}

loadHeader();
loadFooter();

//From w3schools for slide show

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}