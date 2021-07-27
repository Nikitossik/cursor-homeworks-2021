import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/swiper-bundle.css';
import './style.css';

import data from './data.json';

import bg1 from './images/banner-background-1.jpg';
import bg2 from './images/banner-background-2.jpg';
import bg3 from './images/banner-background-3.jpg';
import bg4 from './images/banner-background-4.jpg';
import bg5 from './images/banner-background-5.jpg';

import Swiper from 'swiper/bundle';

location.hash = "#";

const imgLinks = [bg1, bg2, bg3, bg4, bg5];
const sliderImages = document.querySelectorAll('.slider__image');

sliderImages.forEach((sliderImage, index) => {
    sliderImage.src = imgLinks[index];
});


const filmsURL = 'https://swapi.dev/api/films/';
const planetsURL = 'https://swapi.dev/api/planets/';

const filmSelect = document.querySelector('#film-select');
const formatSelect = document.querySelector('#format-select');
const loadButton = document.getElementById('load-btn');

import {
    loadJSON, loadPeople, showPeople, showPlanets
} from '../exports';

if (loadButton) {
    loadButton.addEventListener('click', function () {
        const filmNumber = filmSelect.value;
        const format = formatSelect.value;

        const contentMain = document.querySelector('.content');

        contentMain.classList.remove('content--visible');

        loadJSON(`${filmsURL}${filmNumber}`).then(film => {
            loadPeople(film, format)
                .then(people => {
                    showPeople(people, data, film, format);
                })
                .then(() => {
                    const peopleSection = contentMain.querySelector('.people-section');
                    contentMain.classList.add('content--visible');
                    // let offsetY = peopleSection.getBoundingClientRect().top;
                    // window.scrollTo({
                    //     top: offsetY,
                    //     behavior: 'smooth'
                    // });
                })
                .then(() => loadJSON(planetsURL))
                .then(planets => {
                    showPlanets(planets, data, format);
                })
        })
    });
}

const controlButtons = document.querySelectorAll('.control-btn');

if (controlButtons) {
    controlButtons.forEach(controlButton => {
        controlButton.addEventListener('click', function () {
            const url = controlButton.dataset.url;
            const format = formatSelect.value;

            loadJSON(`${url}`).then(planets => {
                showPlanets(planets, data, format);
            })

        });
    });
}


const bannerSlider = new Swiper('.swiper-container.banner__slider', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});
