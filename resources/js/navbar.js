// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    var navbar = document.getElementById("navbar-index");
    var logo = document.getElementById("logo-index");

    // klein
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        //navbar.style.padding = "10px 20px";
        navbar.className = "navbar navbar-expand-md navbar-dark fixed-top bg-warning";
        navbar.style.fontSize = "1rem";
        navbar.style.textShadow = "none";
        logo.style.height = "35px";
    }
    // groot
    else {
        //navbar.style.padding = "40px 20px";
        navbar.className = "navbar navbar-expand-md navbar-dark fixed-top";


        if ($(window).width() > 750) {
            navbar.style.textShadow = "0 0 15px black, 0 0 15px black";
            navbar.style.fontSize = "1.25rem";
        }
        if ($(window).width() > 980) {
            logo.style.height = "150px";
        }
    }
}