let popup = document.querySelector('.popup');
let slide = document.querySelector('.slide');
let left_btn = document.querySelector('.left-btn');
let right_btn = document.querySelector('.right-btn');
let galery_img = document.querySelectorAll('.gallery .img img');


let count = 0;
count == 0 ? left_btn.style.display = 'none' : false;


function createIMg() {
    galery_img.forEach((el, i) => {
        slide.insertAdjacentHTML(
            'beforeend',
            `<img src="${el.src}" id="${i}" alt="">`
        )
    });
};

createIMg();


let imgs= document.querySelectorAll('.slide img');



function start() {
    slide.style.transform = `translateX(-${count * 100}%)`;
    slide.style.transition = '.5s';
}



function buttons() {
    count == imgs.length - 1 ? right_btn.style.display = 'none' : false;
    count > 0 ? left_btn.style.display = 'block' : false;
    count != imgs.length - 1 ? right_btn.style.display = 'block' : false;
    count == 0 ? left_btn.style.display = 'none' : false;
}


function nextSlide() {
    count++;
    start();
    buttons();
}

function prevSlide() {
    count--;
    start();
    buttons();
}


let close_btn = document.querySelector('.close_btn');

galery_img.forEach(el => {
    el.addEventListener('click', () => {
        popup.classList.add('popup-view');
        count = el.id;
        start();
        buttons();
    });
});


close_btn.addEventListener('click', () => {
    popup.classList.remove('popup-view'); 
});






right_btn.addEventListener('click', nextSlide);
left_btn.addEventListener('click', prevSlide);


function init() {
    start(1);
}

init();

