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

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    const button = item.querySelector('.faq-question');

    button.addEventListener('click', () => {

        faqItems.forEach(other => {

            if(other !== item){

                other.classList.remove('active');
                other.querySelector('span').textContent = '+';
            }

        });

        item.classList.toggle('active');

        item.querySelector('span').textContent =
        item.classList.contains('active') ? '−' : '+';

    });

});


const cards = document.querySelectorAll('.vision-card');

const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');

let current = 0;

function showCard(index){

cards.forEach(card => {
card.classList.remove('active');
});

cards[index].classList.add('active');
}

if(nextBtn && prevBtn){

nextBtn.addEventListener('click', () => {

current++;

if(current >= cards.length){
current = 0;
}

showCard(current);

});

prevBtn.addEventListener('click', () => {

current--;

if(current < 0){
current = cards.length - 1;
}

showCard(current);

});

}
