//бургер-меню
const menuIcon = document.querySelector(".menu-icon"),
    header = document.querySelector('header'),
    body = document.querySelector('body');

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('menu-icon--active');
    header.classList.toggle('header--mobile');
    body.classList.toggle('no-scroll');
});

// слайдер со стрелками
const sliderArrows = document.querySelector('.slider-arrows'),
    slidesArrows = sliderArrows.querySelectorAll(".slider-arrows__item"),
    prev = sliderArrows.querySelector(".slider-arrows__arrow--left"),
    next = sliderArrows.querySelector(".slider-arrows__arrow--right");

let slideIndex = 0;

prev.addEventListener('click', ()=> showSlideArrows(-1));
next.addEventListener('click', ()=> showSlideArrows(1));

function showSlideArrows(n) {
    slideIndex = slideIndex + n;

    if (slideIndex < 0){
        slideIndex = slidesArrows.length - 1;
    }

    if (slideIndex >= slidesArrows.length) {
        slideIndex = 0;
    }

    slidesArrows.forEach(item => item.style.display = "none");
    slidesArrows[slideIndex].style.display = "block"
}

showSlideArrows(0)

//точки переключения
const sliderDots = document.querySelector('.slider-dots'),
    slidesDots = sliderDots.querySelectorAll('.slider-dots__item'),
    wrapperDots = sliderDots.querySelector('.slider-dots__nav');

const dots = [];
for (let i = 0; i < slidesDots.length; i++){
    const dot = document.createElement('button');

    dot.dataset.slideTo = i;

    dot.classList.add('slider-dots__nav-item');
    if (i==0) dot.classList.add('slider-dots__nav-item--active');

    if (i != 0 ) slidesDots[i].style.display = 'none';
    dot.addEventListener('click', showSlideDots)

    wrapperDots.append(dot);
    dots.push(dot)
}

function showSlideDots(e) {
    const slideTo = e.target.dataset.slideTo;

    slidesDots.forEach(item => item.style.display = 'none');
    slidesDots[slideTo].style.display = 'block';

    dots.forEach(item => item.classList.remove('slider-dots__nav-item--active'));
    e.target.classList.add('slider-dots__nav-item--active');
}

//стрелка
const sliderToy = document.querySelector('.toyota'),
    slidesToy = sliderToy.querySelectorAll('.toy__item'),
    strel = sliderToy.querySelector('.toy_arrow');

console.log(strel)

let slideIndexToy = 0;

strel.addEventListener('click', () => showSlideToy(1));

function showSlideToy(n){
    slideIndexToy = slideIndexToy + n;

    if (slideIndexToy >= slidesToy.length){
        slideIndexToy = 0
    }

    slidesToy.forEach(item => item.style.display = "none")
    slidesToy[slideIndexToy].style.display = "block"
}

showSlideToy(0)


const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => {
    anc.addEventListener("click", function(event){
        event.preventDefault();

        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);
        
        window.scroll({
            top: elem.offsetTop,
            behavior: 'smooth'
        });
    });
});