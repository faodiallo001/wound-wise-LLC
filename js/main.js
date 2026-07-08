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

if(menuToggle && mobileMenu){

menuToggle.addEventListener("click", () => {

mobileMenu.classList.toggle("active");

});

}

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

if(upload){

upload.addEventListener('change', function(){

if(this.files.length > 3){

alert('Maximum 3 files allowed.');

this.value = '';

}

});

}

const fileInput = document.getElementById('documents');
const fileList = document.getElementById('file-list');

if(fileInput){

fileInput.addEventListener('change', function(){

fileList.innerHTML = '';

for(let i = 0; i < this.files.length; i++){

const item = document.createElement('p');

item.textContent = '📄 ' + this.files[i].name;

fileList.appendChild(item);

}

});

}

const contactForm =
document.getElementById('contactForm');

if(contactForm){

contactForm.addEventListener('submit', async function(e){

e.preventDefault();

const formData = {

name: this.name.value,

email: this.email.value,

phone: this.phone.value,

message: this.message.value

};

try{

const response = await fetch('/api/contact',{

method:'POST',

headers:{
'Content-Type':'application/json'
},

body: JSON.stringify(formData)

});

if(response.ok){

alert('Message sent successfully.');

this.reset();

}else{

alert('Failed to send message.');

}

}catch(error){

alert('Something went wrong.');

}

});

}

const specialistForm = document.getElementById('specialistForm');

if(specialistForm){

specialistForm.addEventListener('submit', async function(e){

e.preventDefault();

const symptoms = Array.from(
this.querySelectorAll('input[name="symptoms"]:checked')
).map(item => item.value).join(', ');

const formData = {
fullName: this.fullName.value,
email: this.email.value,
phone: this.phone.value,
city: this.city.value,
woundType: this.woundType.value,
woundDuration: this.woundDuration.value,
painLevel: this.painLevel.value,
symptoms: symptoms,
treatment: this.treatment?.value || '',
insurance: this.insurance.value,
notes: this.notes.value
};

try{

const response = await fetch('/api/specialist', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(formData)
});

if(response.ok){
alert('Consultation request sent successfully.');
this.reset();
}else{
alert('Failed to send consultation request.');
}

}catch(error){
alert('Something went wrong.');
}

});

}

const referralForm = document.getElementById('referralForm');

if(referralForm){

referralForm.addEventListener('submit', async function(e){

e.preventDefault();

const formData = new FormData(referralForm);

try{

const response = await fetch('/api/referral', {

method: 'POST',

body: formData

});

if(response.ok){

alert('Referral sent successfully.');

this.reset();

const fileList = document.getElementById('file-list');

if(fileList){
fileList.innerHTML = '';
}

}else{

alert('Failed to send referral.');

}

}catch(error){

console.error(error);

alert('Something went wrong.');

}

});

}
