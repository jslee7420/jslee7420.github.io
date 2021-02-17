const menuBtn = document.querySelector('.menu');
const nav_items = document.querySelector('.nav__items');

menuBtn.addEventListener('click', ()=>{
    nav_items.classList.toggle('active');
});