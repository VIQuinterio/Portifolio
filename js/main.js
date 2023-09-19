const fadeElementsTitle = document.querySelectorAll('.skills__title');
const fadeElementsLine = document.querySelectorAll('.skills__line');
const fadeElementsAbout = document.querySelectorAll('.about__title');
const fadeElementsText = document.querySelectorAll('.about__paragraph');
const fadeElementsBoxes = document.querySelectorAll('.academic__courses__box');


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function handleScroll() {
    fadeElementsTitle.forEach((el) => {
        if (isElementInViewport(el)) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });

    fadeElementsLine.forEach((el) => {
        if (isElementInViewport(el)) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });

    fadeElementsAbout.forEach((el) => {
        if (isElementInViewport(el)) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });

    fadeElementsText.forEach((el) => {
        if (isElementInViewport(el)) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });

    fadeElementsBoxes.forEach((el) => {
        if (isElementInViewport(el)) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });



}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
window.addEventListener('load', handleScroll);
