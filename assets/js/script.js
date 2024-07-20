const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navcloseBtn = document.querySelector('.nav-close-btn');


const navToggleFunc = () => nav.classList.toggle("active");

navMenuBtn.addEventListener('click',navToggleFunc);
navcloseBtn.addEventListener('click',navToggleFunc);