const arrows = document.querySelectorAll('.arrow-span');

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', event => {
        window.location.href = '#nav'
})}

const arrowDiv = document.querySelector('.arrow');
const navbar = document.querySelector('.nav');

const scrollFunc = function() {
    const pagePosition = window.pageYOffset;
    if (pagePosition > 440) {
        // arrowDiv.classList.add('hidden');
        navbar.classList.remove('hidden');
    } else {
        // arrowDiv.classList.remove('hidden');
        navbar.classList.add('hidden');
    }
}
window.addEventListener('scroll', scrollFunc);

const hideArrowFunc = function() {
    const pagePosition = window.pageYOffset;
    if (pagePosition > 400) {
        arrowDiv.classList.add('hide-arrow');
    } else {
        arrowDiv.classList.remove('hide-arrow');
    }
}

window.addEventListener('scroll', hideArrowFunc);
