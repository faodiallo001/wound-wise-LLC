const slides = document.querySelectorAll('.slide');

let current = 0;

setInterval(() => {

    slides[current].classList.remove('active');

    current = (current + 1) % slides.length;

    slides[current].classList.add('active');

}, 5000);


const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => {

    tab.addEventListener('click', () => {

        document
        .querySelectorAll('.tab-btn')
        .forEach(btn =>
            btn.classList.remove('active'));

        document
        .querySelectorAll('.tab-panel')
        .forEach(panel =>
            panel.classList.remove('active'));

        tab.classList.add('active');

        document
        .getElementById(
            tab.dataset.tab
        )
        .classList.add('active');

    });

});

const menuToggle =
document.querySelector(".menu-toggle");

const mobileMenu =
document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {

mobileMenu.classList.toggle("active");

});
