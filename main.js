window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


//Makes navbar change color on scroll
function changeNavbarColor() {

    var scrollPos = window.pageYOffset;
    var home = document.getElementById("home")
    if (scrollPos > 0.5) {
        navbar.style.backgroundColor = '#2274A5'
        home.style.color = "#2a2a2a"
        document.getElementById("about").style.color = "#2a2a2a"
        document.getElementById("education").style.color = "#2a2a2a"
        document.getElementById("interest").style.color = "#2a2a2a"
        document.getElementById("wdpp").style.color = "#2a2a2a"
        document.getElementById("dm").style.color = "#2a2a2a"
        document.getElementById("photo").style.color = "#2a2a2a"
        document.getElementById("contact").style.color = "#2a2a2a"
    } else {
        navbar.style.backgroundColor = '#2a2a2a'
        document.getElementById("home").style.color = "#2274A5"
        document.getElementById("about").style.color = "#2274A5"
        document.getElementById("education").style.color = "#2274A5"
        document.getElementById("interest").style.color = "#2274A5"
        document.getElementById("wdpp").style.color = "#2274A5"
        document.getElementById("dm").style.color = "#2274A5"
        document.getElementById("photo").style.color = "#2274A5"
        document.getElementById("contact").style.color = "#2274A5"
    }
}

//Credit: https://www.youtube.com/watch?v=qARueNQFk04&t=479s
const navLi = document.querySelectorAll('a')
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(a => {
        a.classList.remove('active')
        document.querySelector('a[href*= ' + current + ']').classList.add('active');
    });
});

// listen for scroll events
window.addEventListener('scroll', changeNavbarColor);
