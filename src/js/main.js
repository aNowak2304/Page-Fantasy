const navMobile = document.querySelector('.nav-content');
const navBtn = document.querySelector('.burger-btn');
const navBtnActive = document.querySelector('.burger-active');
const allNavLinks = document.querySelectorAll('.nav__item');
const footerYear = document.querySelector('.footer__year')
const scrollSpySections = document.querySelectorAll('.section')
const msgStatus = document.querySelector('.msg-status')
const cookie = document.querySelector('.cookie-box')
const cookieBtn = document.querySelector('.cookie-box__btn')

let seconds = 0;

const successTimer = () => {
    seconds ++;
}
setInterval(successTimer, 1000);

const returnPage = () => {
if(document.body.classList.contains('success-page')){
    window.location.replace("https://www.page-fantasy.pl");
}
}
setTimeout(returnPage, 3000);

const showCookie = () => {
    const cookieEaten = localStorage.getItem('cookie');
    if (cookieEaten) {
        cookie.classList.add('hide')
    }
}
showCookie()
const handleCookie = () => {
    localStorage.setItem('cookie', 'true')
    cookie.classList.add('hide')
}

document.addEventListener('DOMContentLoaded', function() {
    const navDesktop = document.querySelector('.nav-desktop')

    function addBackground() {
        if (window.scrollY >= 1){
            navDesktop.classList.add('nav-background')
        }
        else{
            navDesktop.classList.remove('nav-background')
        }
    }

    window.addEventListener('scroll', addBackground)
})


const handleNav = () => {
    navBtn.classList.toggle('burger-active');
    navMobile.classList.toggle('nav--active');
    allNavLinks.forEach(link => {
        link.addEventListener('click', () =>{
            navMobile.classList.remove('nav--active')
            navBtn.classList.remove('burger-active')
        })
    })
}

const handleScrollSpy = () => {
    if(document.body.classList.contains('main-page')) {

        const sections = []

        scrollSpySections.forEach(section => {
            if(window.scrollY <= section.offsetTop + section.offsetHeight -87) {
                sections.push(section)
               
                const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
                
                allNavLinks.forEach(item => item.classList.remove('active'))

                activeSection.classList.add('active')
            }

        })
    }
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();



window.addEventListener('scroll', handleScrollSpy)
navBtn.addEventListener('click', handleNav);
cookieBtn.addEventListener('click', handleCookie);
