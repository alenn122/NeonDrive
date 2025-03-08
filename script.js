// NAVMENU
let navMenu = document.querySelector('#navmenu');
let navLinks = document.querySelector('.nav-links');

navMenu.onclick = () =>{
    navMenu.classList.toggle('fa-xmark');
    navLinks.classList.toggle('open');
}

window.onscroll = () =>{
    navMenu.classList.remove('fa-xmark');
    navLinks.classList.remove('open')
}

// SCROLL REVEAL LIBRARY
const sr = ScrollReveal({
    distance: '120px',
    duration: 1000,
    reset: true
});

sr.reveal('header', { origin: 'top', delay: 100 });
sr.reveal('#home h1', { origin: 'bottom', delay: 300 });
sr.reveal('#info .title', { origin: 'top', delay: 100 });
sr.reveal('#info #sr1', { origin: 'bottom', delay: 300 });
sr.reveal('#info #sr2', { origin: 'bottom', delay: 400 });
sr.reveal('#info #sr3', { origin: 'bottom', delay: 500 });
sr.reveal('#showcase .title', { origin: 'top', delay: 100 });
sr.reveal('#showcase #sr1', { origin: 'left', delay: 300 });
sr.reveal('#showcase #sr2', { origin: 'left', delay: 400 });
sr.reveal('#gallery .title', { origin: 'top', delay: 100 });
sr.reveal('#gallery #sr1', { origin: 'bottom', delay: 100 });
sr.reveal('#gallery #sr2', { origin: 'bottom', delay: 200 });
sr.reveal('#gallery #sr3', { origin: 'bottom', delay: 300 });
sr.reveal('#gallery #sr4', { origin: 'bottom', delay: 300 });
sr.reveal('#gallery #sr5', { origin: 'bottom', delay: 300 });
sr.reveal('#gallery #sr6', { origin: 'bottom', delay: 300 });
sr.reveal('#gallery #sr7', { origin: 'bottom', delay: 300 });
sr.reveal('#gallery #sr8', { origin: 'bottom', delay: 300 });
