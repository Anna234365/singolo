const MENU = document.getElementById('MENU');

const PHONE_VERTICAL_WRAPPER = document.getElementById('PHONE_VERTICAL_WRAPPER');
const PHONE_VERTICAL_SCREEN = document.getElementById('PHONE_VERTICAL_SCREEN');

const PHONE_HORIZONTAL_WRAPPER = document.getElementById('PHONE_HORIZONTAL_WRAPPER');
const PHONE_HORIZONTAL_SCREEN = document.getElementById('PHONE_HORIZONTAL_SCREEN');

const PORTFOLIO = document.getElementById('PORTFOLIO');
const PORTFOLIO_NAVIGATION = document.getElementById('PORTFOLIO_NAVIGATION');
const PORTFOLIO_IMAGES = document.getElementById('PORTFOLIO_IMAGES');

const INPUT_BUTTON = document.getElementById('INPUT_BUTTON');
const MESSAGE_BLOCK = document.getElementById('MESSAGE_BLOCK');
const MESSAGE = document.getElementById('MESSAGE');
const MESSAGE_BUTTON = document.getElementById('MESSAGE_BUTTON');

const MESSAGE_SUBJECT = document.getElementById('MESSAGE_SUBJECT');
const MESSAGE_DESCRIPTION = document.getElementById('MESSAGE_DESCRIPTION');
const MESSAGE_SENT_SUBJECT = document.getElementById('MESSAGE_SENT_SUBJECT');
const MESSAGE_SENT_DESCRIPTION = document.getElementById('MESSAGE_SENT_DESCRIPTION');

let array = [1,2,3,4,5,6,7,8,9,10,11,12];

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

// PORTFOLIO_NAVIGATION.addEventListener('click', (event) => {
//     if(event.target.classList.contains('portfolio__button')) {
//         PORTFOLIO_NAVIGATION.querySelectorAll('.portfolio__button').forEach(el => el.classList.remove('active'));
//         event.target.classList.add('active');
//         let tag = event.target.innerText;
//         PORTFOLIO_IMAGES.querySelectorAll('img').forEach(el => tag === 'All' ? 
//         el.classList.remove('display_none') : el.classList.contains(tag) && tag != 'All' ? 
//         el.classList.remove('display_none') : el.classList.add('display_none'))   
//     }
// })

PORTFOLIO_NAVIGATION.addEventListener('click', (event) => {
    if(event.target.classList.contains('portfolio__button')) {
        PORTFOLIO_IMAGES.querySelectorAll('img').forEach (el => el.classList.remove('active'));
        PORTFOLIO_NAVIGATION.querySelectorAll('.portfolio__button').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
        let shuffle = (Math.floor(Math.random() * 11 ) + array[0]) %12;
        array = array.map((element, index) =>  element = (shuffle + index)%12+1);
        PORTFOLIO_IMAGES.querySelectorAll('img').forEach((el, index) => {
            el.src = './assets/portfolio/image' + array[index] + '.png'
        })
    }
})

PORTFOLIO_IMAGES.addEventListener('click', (event) => {
    PORTFOLIO_IMAGES.querySelectorAll('img').forEach (el => el.classList.remove('active'));
    event.target.classList.add('active');
})

INPUT_BUTTON.addEventListener('click', () => {    
    let subject = MESSAGE_SUBJECT.value;
    let description = MESSAGE_DESCRIPTION.value;

    MESSAGE_BLOCK.classList.remove('display_none');
    MESSAGE.classList.remove('display_none');
    
    subject == '' ? MESSAGE_SENT_SUBJECT.innerHTML = 'Без темы': MESSAGE_SENT_SUBJECT.innerHTML = 'Тема: ' + subject;
    description == '' ? MESSAGE_SENT_DESCRIPTION.innerText = 'Без описания' : MESSAGE_SENT_DESCRIPTION.innerText = 'Описание: ' + description;

    MESSAGE_SUBJECT.value = '';
    MESSAGE_DESCRIPTION.value = '';
})

MESSAGE_BUTTON.addEventListener('click', () => {
    MESSAGE_BLOCK.classList.add('display_none');
    MESSAGE.classList.add('display_none');
    
})