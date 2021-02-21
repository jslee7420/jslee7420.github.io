const menuBtn = document.querySelector('.menu');
const nav_items = document.querySelector('.nav__items');

menuBtn.addEventListener('click', ()=>{
    nav_items.classList.toggle('active');
});

// Scroll Animation (sa, 스크롤 애니메이션)
const saTriggerMargin = 200;
const saElementList = document.querySelectorAll('.skill__bar');
const saElementList2 = document.querySelectorAll('.sa');

const saFunc = function() {
    if (!saElementList[0].classList.contains('html_css')) {
        if (window.innerHeight > saElementList[0].getBoundingClientRect().top + saTriggerMargin) {
            saElementList[0].classList.add('html_css');
            saElementList[1].classList.add('javascript');
            saElementList[2].classList.add('python_django');
            saElementList[3].classList.add('C');
        }
    }
    for (const element of saElementList2) {
        if (!element.classList.contains('show')) {
          if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
            element.classList.add('show');
          }
        }
      }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);