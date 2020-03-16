const MENU = document.getElementById('MENU');

const PHONE_VERTICAL_WRAPPER = document.getElementById('PHONE_VERTICAL_WRAPPER');
const PHONE_VERTICAL_SCREEN = document.getElementById('PHONE_VERTICAL_SCREEN');

const PHONE_HORIZONTAL_WRAPPER = document.getElementById('PHONE_HORIZONTAL_WRAPPER');
const PHONE_HORIZONTAL_SCREEN = document.getElementById('PHONE_HORIZONTAL_SCREEN');

const PORTFOLIO = document.getElementById('PORTFOLIO');
const PORTFOLIO_NAVIGATION = document.getElementById('PORTFOLIO_NAVIGATION');
const PORTFOLIO_IMAGES = document.getElementById('PORTFOLIO_IMAGES');

const NAME = document.getElementById('NAME');
const MAIL = document.getElementById('MAIL');
const FORM = document.getElementById('FORM');
const INPUT_BUTTON = document.getElementById('INPUT_BUTTON');
const MESSAGE_BLOCK = document.getElementById('MESSAGE_BLOCK');
const MESSAGE = document.getElementById('MESSAGE');
const MESSAGE_BUTTON = document.getElementById('MESSAGE_BUTTON');

const MESSAGE_SUBJECT = document.getElementById('MESSAGE_SUBJECT');
const MESSAGE_DESCRIPTION = document.getElementById('MESSAGE_DESCRIPTION');
const MESSAGE_SENT_SUBJECT = document.getElementById('MESSAGE_SENT_SUBJECT');
const MESSAGE_SENT_DESCRIPTION = document.getElementById('MESSAGE_SENT_DESCRIPTION');

PORTFOLIO_NAVIGATION.addEventListener('click', (event) => {
    PORTFOLIO_NAVIGATION.querySelectorAll('button').forEach (el => el.classList.remove('active'));
    PORTFOLIO_IMAGES.querySelectorAll('img').forEach (el => el.classList.remove('active'));
    if(event.target.classList.contains('portfolio__button')) {
        event.target.classList.add('active')
        let array = PORTFOLIO_IMAGES.querySelectorAll('img');    
        PORTFOLIO_IMAGES.appendChild(array[0]);
    }
})

PORTFOLIO_IMAGES.addEventListener('click', (event) => {
    let imageStatus = event.target.classList.contains('active');
    PORTFOLIO_IMAGES.querySelectorAll('img').forEach (el => el.classList.remove('active'));
    imageStatus ? event.target.classList.remove('active') : event.target.classList.add('active');
})

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})

PHONE_VERTICAL_WRAPPER.addEventListener('click', () => {
    PHONE_VERTICAL_SCREEN.classList.contains('display_none') ? 
    PHONE_VERTICAL_SCREEN.classList.remove('display_none') :
    PHONE_VERTICAL_SCREEN.classList.add('display_none');
})

PHONE_HORIZONTAL_WRAPPER.addEventListener('click', () => {
    PHONE_HORIZONTAL_SCREEN.classList.contains('display_none') ? 
    PHONE_HORIZONTAL_SCREEN.classList.remove('display_none') :
    PHONE_HORIZONTAL_SCREEN.classList.add('display_none');
})

FORM.addEventListener('submit', (event) => {    
        
        let subject = MESSAGE_SUBJECT.value;
        let description = MESSAGE_DESCRIPTION.value;

        MESSAGE_BLOCK.classList.remove('display_none');
        MESSAGE.classList.remove('display_none');

        MESSAGE_BLOCK.style.height = document.getElementsByTagName('html').clientHeight;
        
        subject == '' ? MESSAGE_SENT_SUBJECT.innerHTML = 'Без темы': MESSAGE_SENT_SUBJECT.innerHTML = 'Тема: ' + subject;
        description == '' ? MESSAGE_SENT_DESCRIPTION.innerText = 'Без описания' : MESSAGE_SENT_DESCRIPTION.innerText = 'Описание: ' + description.slice(0,-(description.length-200));

        MESSAGE_SUBJECT.value = '';
        MESSAGE_DESCRIPTION.value = '';
        NAME.value = '';
        MAIL.value = '';
        
        event.preventDefault();
})

MESSAGE_BUTTON.addEventListener('click', () => {
    MESSAGE_BLOCK.classList.add('display_none');
    MESSAGE.classList.add('display_none');
    
})

// carousel -- SLIDER


const carousel_slide = document.querySelector('.carousel_slide');
const carousel_img = document.querySelectorAll('.carousel_img')

const prev_button = document.querySelector('.prev_button');
const next_button = document.querySelector('.next_button');

let counter = 1;
const size = carousel_img[0].clientWidth;

carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next_button.addEventListener('click',() => {
    if (counter >= carousel_img.length-1) return;
    carousel_slide.style.transition = 'transform 0.4s ease-in-out'
    counter++;
    carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prev_button.addEventListener('click',() => {
    if (counter <= 0) return;
    carousel_slide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carousel_slide.addEventListener('transitionend', () => {
    PHONE_VERTICAL_SCREEN.classList.remove('display_none');
    PHONE_HORIZONTAL_SCREEN.classList.remove('display_none');
    if (carousel_img[counter].id === 'LAST_CLONE') {
        carousel_slide.style.transition = 'none';
        counter = carousel_img.length - 2;
        carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        carousel_slide.style.stransition = 'transform 0.4s ease-in-out';
    }

    if (carousel_img[counter].id === 'FIRST_CLONE') {
        carousel_slide.style.transition = 'none';
        counter = carousel_img.length - counter;
        carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        carousel_slide.style.stransition = 'transform 0.4s ease-in-out';
    }
})


