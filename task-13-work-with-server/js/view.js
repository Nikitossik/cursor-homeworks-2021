const bannerSlider = new Swiper('.swiper-container.banner__slider', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});

if (loadButton) {
    loadButton.addEventListener('click', function () {
        const filmNumber = filmSelect.value;
        const format = formatSelect.value;

        contentMain.classList.remove('content--visible');

        loadJSON(`${filmsURL}${filmNumber}`).then(film => {
            loadJSON(imagesURL).then(images => {
                loadPeople(film, format)
                    .then(people => {
                        showPeople(people, images, film, format);
                    })
                    .then(() => {
                        const peopleSection = contentMain.querySelector('.people-section');
                        contentMain.classList.add('content--visible');
                        let offsetY = peopleSection.getBoundingClientRect().top;
                        window.scrollTo({
                            top: offsetY,
                            behavior: 'smooth'
                        });
                    })
                    .then(() => loadJSON(planetsURL))
                    .then(planets => {
                        showPlanets(planets, images, format);
                    })
            });
        })
    });
}

const controlButtons = document.querySelectorAll('.control-btn');

if (controlButtons) {
    controlButtons.forEach(controlButton => {
        controlButton.addEventListener('click', function () {
            const url = controlButton.dataset.url;
            const format = formatSelect.value;
            console.log(url);
            loadJSON(imagesURL).then(images => {
                loadJSON(`${url}`).then(planets => {
                    showPlanets(planets, images, format);
                })
            });
        });
    });
}

