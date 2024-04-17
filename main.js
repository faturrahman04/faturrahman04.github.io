// Variables
const liNavbar = Array.from(document.querySelectorAll('.ul-navbar li'));
const liNavbarAnchor = Array.from(document.querySelectorAll('.ul-navbar li a'));
const firstCard = document.querySelector('.first');
const secondCard = document.querySelector('.second');
const thirdCard = document.querySelector('.third');
const fourthCard = document.querySelector('.fourth');
const javascriptBgFirst = document.querySelector('.js-animate-bg-first');
const javascriptBgSecond = document.querySelector('.js-animate-bg-second');
const javascriptBgThird = document.querySelector('.js-animate-bg-third');
const javascriptBgFourth = document.querySelector('.js-animate-bg-fourth');
const sideNav = document.querySelector('.sidenav-transform');
const hamburgerMenu = document.querySelector('nav .hamburger-menu input');
// Variables

// Navbar Border Bottom
const isliNavbarBorderHoverStyle = () => {
    for (let i = 0; i < liNavbar.length; i++){
        liNavbar[i].addEventListener("mouseover", function() {
            liNavbar[i].style.borderBottom = "2px solid #67e8f9"
            liNavbarAnchor[i].style.color = "#67e8f9"
            liNavbar[i].style.cursor = "pointer"
            liNavbar[i].style.transition = "500ms";
        })
        liNavbar[i].addEventListener("mouseleave", function() {
            liNavbar[i].style.borderBottom = "2px solid transparent";
            liNavbarAnchor[i].style.color = "black";
        })
    }
}
isliNavbarBorderHoverStyle();
// Navbar Border Bottom

// Navbar Border Bottom
const isliNavbarAnchorHoverStyle = () => {
    for (let i = 0; i < liNavbarAnchor.length; i++){
        liNavbarAnchor[i].addEventListener("mouseover", function() {
            liNavbarAnchor[i].style.color = "#67e8f9"
        })
        liNavbarAnchor[i].addEventListener("mouseleave", function() {
            liNavbarAnchor[i].style.color = "black";
        })
    }    
}
isliNavbarAnchorHoverStyle();
// Navbar Border Bottom

// First Card (Frontend)
const firstCardAnimation = () => {
    firstCard.addEventListener('mouseover', function() {
        javascriptBgFirst.classList.add('animate-bg-first')
    })
    firstCard.addEventListener('mouseleave', function() {
        javascriptBgFirst.classList.remove('animate-bg-first')
    })    
}
firstCardAnimation();
// First Card (Frontend)

// Second Card (Backend)
const secondCardAnimation = () => {
    secondCard.addEventListener('mouseover', function() {
        javascriptBgSecond.classList.add('animate-bg-second')
    })
    secondCard.addEventListener('mouseleave', function() {
        javascriptBgSecond.classList.remove('animate-bg-second')
    })    
}
secondCardAnimation();
// Second Card (Backend)

// Third Card (DevOps)
const thirdCardAnimation = () => {
    thirdCard.addEventListener('mouseover', function() {
        javascriptBgThird.classList.add('animate-bg-third')
    })
    thirdCard.addEventListener('mouseleave', function() {
        javascriptBgThird.classList.remove('animate-bg-third')
    })    
}
thirdCardAnimation();
// Third Card (DevOps)

// Fourth Card (Fullstack)
const fourthCardAnimation = () => {
    fourthCard.addEventListener('mouseover', function() {
        javascriptBgFourth.classList.add('animate-bg-fourth')
    })
    fourthCard.addEventListener('mouseleave', function() {
        javascriptBgFourth.classList.remove('animate-bg-fourth')
    })    
}
fourthCardAnimation();
// Fourth Card (Fullstack)

// Cek Input Checkbox apabila diKlik mengeluarkan sidebar
function checkInput() {
    if (hamburgerMenu.checked == true){
        sideNav.classList.add('sidenav-animate');
    } else {
        sideNav.classList.remove('sidenav-animate');
    }
}
hamburgerMenu.addEventListener('click', checkInput);
// Cek Input Checkbox apabila diKlik mengeluarkan sidebar

// Membuat autoscroll menjadi smooth
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener("click", function(e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}
smoothScroll();
// Membuat autoscroll menjadi smooth



