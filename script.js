const menu = document.getElementById('menu');
// phones
const phoneVerticalWrapper = document.getElementById('phone_vertical_wrapper');
const phoneVerticalScreen = document.getElementById('phone_vertical_screen');
const phoneHorizontalWrapper = document.getElementById('phone_horizontal_wrapper');
const phoneHorizontalScreen = document.getElementById('phone_horizontal_screen');

// portfolio
const portfolioNavigation = document.getElementById('portfolio__navigation');
const portfolioImages = document.getElementById('portfolio__images');

// form
const form = document.getElementById('form');

// modal window
const messageBlock = document.getElementById('message_block');
const messageSent = document.getElementById('message_sent');
const messageSentButton = document.getElementById('message_sent_button');

const messageSubject = document.getElementById('message_subject');
const messageDescription = document.getElementById('message_description');
const messageSentSubject = document.getElementById('message_sent_subject');
const messageSentDescription = document.getElementById('message_sent_description');

portfolioNavigation.addEventListener('click', (event) => {
    if(event.target.classList.contains('portfolio__button')) {
        portfolioNavigation.querySelectorAll('button').forEach (el => el.classList.remove('active'));
        portfolioImages.querySelectorAll('div > img').forEach (el => el.classList.remove('active'));
        event.target.classList.add('active')
        let array = portfolioImages.querySelectorAll('div');    
        portfolioImages.appendChild(array[0]);
    }
})

let shuffle = function (arr) {
            
    let i;
    let x = arr.length;
    let newarr = [];
    while (x > 0) {
        i = Math.floor(Math.random() * x) + 1;
        newarr.push(arr[i-1]);
        arr.splice(i-1,1);
        x--;
    }
    return newarr;
}

portfolioImages.addEventListener('click', (event) => {
    let imageStatus = event.target.classList.contains('active');
    portfolioImages.querySelectorAll('div > img').forEach (el => el.classList.remove('active'));
    imageStatus ? event.target.classList.remove('active') : event.target.classList.add('active');
})

menu.addEventListener('click', (event) => {
    if (event.target.classList.contains('navigation__item')) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
    }
})

document.addEventListener('scroll', onScroll);

function onScroll() {

    let currentPosition = window.scrollY + 95;

    let elements = document.querySelectorAll('body > div' );
    
    elements.forEach(el => {
        if ( el.offsetTop <= currentPosition &&  el.offsetTop + el.offsetHeight > currentPosition ) {
            let id = el.getAttribute('id');
            menu.querySelectorAll('a').forEach(a => {
                
                if (a.getAttribute('href') === '#' + id) {
                    menu.querySelectorAll('a').forEach(menuElement => menuElement.classList.remove('active'));
                    a.classList.add('active');
                }          
            })
        }   
    });
}

phoneVerticalWrapper.addEventListener('click', () => {
    phoneVerticalScreen.classList.contains('display_none') ? 
    phoneVerticalScreen.classList.remove('display_none') :
    phoneVerticalScreen.classList.add('display_none');
})

phoneHorizontalWrapper.addEventListener('click', () => {
    phoneHorizontalScreen.classList.contains('display_none') ? 
    phoneHorizontalScreen.classList.remove('display_none') :
    phoneHorizontalScreen.classList.add('display_none');
})

form.addEventListener('submit', (event) => {    
        event.preventDefault();
        document.querySelector('html').style.overflow = 'hidden';
        let subject = messageSubject.value;
        let description = messageDescription.value;

        messageBlock.classList.remove('display_none');
        messageSent.classList.remove('display_none');

        messageBlock.style.height = document.getElementsByTagName('html').clientHeight;
        
        subject ? messageSentSubject.innerHTML = '<b> Тема: </b>' + subject : messageSentSubject.innerHTML = '<b> Без темы </b>';
        description ? messageSentDescription.innerHTML = '<b> Описание: </b>' + description : messageSentDescription.innerHTML = '<b> Без описания </b>';

        form.reset();     
})

messageSentButton.addEventListener('click', () => {
    messageBlock.classList.add('display_none');
    messageSent.classList.add('display_none');
    document.querySelector('html').style.overflow = 'auto';
    
})

// carousel -- SLIDER


const carousel_slide = document.querySelector('.slider__slides');
const carousel_img = document.querySelectorAll('.carousel_img');
const prev_button = document.querySelector('.slider__prev_button');
const next_button = document.querySelector('.slider__next_button');
let size = carousel_img[0].clientWidth;
// let width = document.documentElement.clientWidth >= 1020 ? 1020 : document.documentElement.clientWidth;
let counter = 1;

carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

window.addEventListener(`resize`, () => {
    size = document.documentElement.clientWidth >= 1020 ? 1020 : document.documentElement.clientWidth;
    carousel_slide.style.transition = 'none';
    carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    setTimeout(() => {
        carousel_slide.style.transition = 'transform 0.4s ease-in-out';
    }, 100)
  });


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
    phoneVerticalScreen.classList.remove('display_none');
    phoneHorizontalScreen.classList.remove('display_none');
    if (carousel_img[counter].id === 'last_clone') {
        carousel_slide.style.transition = 'none';
        counter = carousel_img.length - 2;
        carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        carousel_slide.style.stransition = 'transform 0.4s ease-in-out';
    }

    if (carousel_img[counter].id === 'first_clone') {
        carousel_slide.style.transition = 'none';
        counter = carousel_img.length - counter;
        carousel_slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        carousel_slide.style.stransition = 'transform 0.4s ease-in-out';
    }
})





