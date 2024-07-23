const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const close = document.querySelector('.close');
const body = document.querySelector('.body')
menu.addEventListener('click',() => {
    nav.classList.add('nav--visible');
    close.style.display='block';
    menu.style.display='none';
    body.classList.add('body-no-scroll');
})
close.addEventListener('click',() => {
    nav.classList.remove('nav--visible');
    body.classList.remove('body-no-scroll');
    close.style.display='none';
    menu.style.display='block';
})