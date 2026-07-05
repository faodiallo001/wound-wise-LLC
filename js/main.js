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

const visionCards = document.querySelectorAll('.vision-card');
const nextVisionBtn = document.getElementById('nextSlide');
const prevVisionBtn = document.getElementById('prevSlide');

let visionCurrent = 0;

function showVisionCard(index){
    visionCards.forEach(card => {
        card.classList.remove('active');
    });

    visionCards[index].classList.add('active');
}

if(nextVisionBtn && prevVisionBtn && visionCards.length > 0){

    nextVisionBtn.addEventListener('click', function(){
        visionCurrent = (visionCurrent + 1) % visionCards.length;
        showVisionCard(visionCurrent);
    });

    prevVisionBtn.addEventListener('click', function(){
        visionCurrent = (visionCurrent - 1 + visionCards.length) % visionCards.length;
        showVisionCard(visionCurrent);
    });

}

const upload = document.querySelector('input[type="file"]');

upload.addEventListener('change', function(){

if(this.files.length > 3){

alert('Maximum 3 files allowed.');

this.value = '';

}

});
