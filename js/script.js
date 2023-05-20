"use strict"

const navMenu = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerEl.classList.toggle('active');
});

function navMenuClose(){
    navMenu.classList.remove('active');
    hamburgerEl.classList.remove('active');
}
