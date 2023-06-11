const navMobile = document.querySelector('.nav-content');
const navBtn = document.querySelector('.burger-btn');
const navBtnActive = document.querySelector('.burger-active');
const allNavLinks = document.querySelectorAll('.nav__item');
const footerYear = document.querySelector('.footer__year')
const scrollSpySections = document.querySelectorAll('.section')
const msgStatus = document.querySelector('.msg-status')

if (document.location.search === '?mail_status=sent'){
    msgStatus.classList.add('success')
    msgStatus.textContent = 'Wiadomość wysłana!'
    
    setTimeout(() => {
       msgStatus.classList.remove('success') 
    }, 3000);
}

if (document.location.search === '?mail_status=error'){
    msgStatus.classList.add('error')
    msgStatus.textContent = 'Wystąpił błąd.'
    
    setTimeout(() => {
       msgStatus.classList.remove('error') 
    }, 3000);
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