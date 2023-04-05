function changeNavbarColor() {

    var scrollPos = window.pageYOffset;
    var home = document.getElementById("home")
    if (scrollPos > 0.1) {
        navbar.style.backgroundColor = '#0A2C64'
        home.style.color = "#F8EBF0"
        document.getElementById("about-us").style.color = "#F8EBF0"
        document.getElementById("organizations").style.color = "#F8EBF0"
        document.getElementById("tutorials").style.color = "#F8EBF0"
        document.getElementById("instagram").style.color = "#F8EBF0"
        document.getElementById("contact").style.color = "#F8EBF0"
    } else {
        navbar.style.backgroundColor = '#F8EBF0'
        document.getElementById("home").style.color = "#0A2C64"
        document.getElementById("about-us").style.color = "#0A2C64"
        document.getElementById("organizations").style.color = "#0A2C64"
        document.getElementById("tutorials").style.color = "#0A2C64"
        document.getElementById("instagram").style.color = "#0A2C64"
        document.getElementById("contact").style.color = "#0A2C64"
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

$(document).ready(function () {
    $('.frame').click(function () {
        $('.top').addClass('open');
        $('.message').addClass('pull');
    })
});