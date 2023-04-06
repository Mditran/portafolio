/* ============================ toggle icon navbar  ============================ */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/* ============================ scroll section active link  ============================ */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });
/* ============================ sticky navbar  ============================ */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/* ============================ remove toggle icon and navbar when click navbar link(scroll)  ============================ */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ============================ scroll reveal ============================ */
ScrollReveal ({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top', delay: 10});
ScrollReveal().reveal('.home-img, .services-container, .portafolio-box, .contact form', {origin: 'bottom', delay: 10});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left', delay: 10});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right', delay: 10});

/* ============================ scroll reveal ============================ */
const typed = new Typed('.multiple-text', {
    strings: ['Desarrollador Web', 'Estudiante de Ingenieria de Sistemas'],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: -80,
    shift: 5,
    padding: 5,
    numVisible: 3,
    indicators: true,
    noWrap: false
    });
});