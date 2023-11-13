function loadHeader() {
    document
        .getElementById("default-header")
        .innerHTML = "<ul><li><a href='index.html'>Home</a></li><li><a href='listings.html'>Listings</" +
            "a></li><li><a href='testimonials.html'>Testimonials</a></li><li class='right'><a" +
            " href='contact.html'>Contact</a></li><li class='right'><a href='about.html'>Abou" +
            "t</a></li></ul>"
}

loadHeader();

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