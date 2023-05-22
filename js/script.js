"use strict"

const navMenu = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const navbarEl = document.querySelector('.header');

hamburgerEl.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerEl.classList.toggle('active');
});

function navMenuClose(){
    navMenu.classList.remove('active');
    hamburgerEl.classList.remove('active');
}

window.onscroll = function () { myFunction() };
var sticky = navbarEl.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbarEl.classList.add("sticky");
  } else {
    navbarEl.classList.remove("sticky");
  }
}
