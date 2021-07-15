const filmsURL = 'https://swapi.dev/api/films/';
const planetsURL = 'https://swapi.dev/api/planets/';
const imagesURL = 'images.json';

const filmSelect = document.querySelector('#film-select');
const formatSelect = document.querySelector('#format-select');
const loadButton = document.getElementById('load-btn');

const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

const contentMain = document.querySelector('.content');

loadJSON = (url) => {
    return fetch(url).then(data => data.json());
}

loadPeople = (film, format) => {
    const charactersLinks = film.characters;
    const requests = charactersLinks.map(characterLink => loadJSON(characterLink + '?format=' + format));
    return Promise.all(requests);
}

getGenderIcon = (gender, format) => {
    const maleValue = format === 'wookiee' ? 'scraanwo' : 'male';
    const femaleValue = format === 'wookiee' ? 'wwwoscraanwo' : 'female';
    if (gender === maleValue) return '<span class="gender"><i class="fas fa-mars"></i></span>';
    else if (gender === femaleValue) return '<span class="gender"><i class="fas fa-venus"></i></span>';
    return `<span class="gender">${gender}</span>`;
}

showPeople = async (people, images, film, format) => {
    const peopleImages = images.people;
    const charactersLinks = film.characters;

    const peopleSection = contentMain.querySelector('.people-section');
    const peopleSectionInner = peopleSection.querySelector('.section__inner');
    const peopleTitle = peopleSection.querySelector('.section__title');
    const peopleRow = peopleSectionInner.querySelector('.row.people-row');

    peopleTitle.textContent = `People from episode ${film.episode_id}: "${film.title}"`;
    peopleRow.innerHTML = '';

    const nameProperty = format === 'wookiee' ? 'whrascwo' : 'name';
    const birthYearProperty = format === 'wookiee' ? 'rhahrcaoac_roworarc' : 'birth_year';
    const genderProperty = format === 'wookiee' ? 'rrwowhwaworc' : 'gender';

    people.forEach((human, index) => {
        const humanImagePath = peopleImages[charactersLinks[index]];
        const humanColumn = `
            <div class='col-lg-4 col-md-6 human-wrapper'>
            <div class='human'>
                <div class='human__header'>
                    <img class='human__photo' src='${humanImagePath}'>
                </div>
                <div class='human__body'>
                    <h3 class='human__name'>${human[nameProperty]}</h3>
                    <span class='human__birth-year'>${formatProperty(birthYearProperty)}: ${human[birthYearProperty]}</span>
                    <span class='human__gender'>${formatProperty(genderProperty)}: 
                        ${getGenderIcon(human[genderProperty], format)}
                    </span>
                </div>
            </div>
            </div>
        `;
        peopleRow.innerHTML += humanColumn;
    });

    peopleSectionInner.append(peopleRow);
}

formatProperty = (property) => property.charAt(0).toUpperCase() + property.slice(1).replaceAll('_', " ");

showPlanets = async (planets, images, format) => {
    const planetsList = planets.results;
    const planetsImages = images.planets;
    const prevUrl = planets.previous;
    const nextUrl = planets.next;
    const planetsLinks = planets.results.map(planet => planet.url);

    const planetsSection = contentMain.querySelector('.planets-section');
    const planetsSectionInner = planetsSection.querySelector('.section__inner');
    const planetsTitle = planetsSection.querySelector('.section__title');
    const planetsRow = planetsSectionInner.querySelector('.row.planets-row');

    planetsTitle.textContent = `Planets from "Star Wars"`;
    planetsRow.innerHTML = '';

    const nameProperty = format === 'wookiee' ? 'whrascwo' : 'name';

    planetsList.forEach(async (planet, index) => {
        const planetInfo = await loadJSON(planet.url + '?format=' + format);
        const planetImagePath = planetsImages[planetsLinks[index]];
        const planetColumn = `
        <div class='col-lg-3 col-md-6 planet-wrapper'>
        <div class='planet'>
            <div class='planet__header'>
                <img class='planet__photo' src='${planetImagePath}'>
            </div>
            <div class='planet__body'>
                <h3 class='planet__name'>${planetInfo[nameProperty]}</h3>
            </div>
        </div>
        </div>
        `;
        planetsRow.innerHTML += planetColumn;
    });

    prevButton.dataset.url = prevUrl !== null ? prevUrl : '';
    nextButton.dataset.url = nextUrl !== null ? nextUrl : '';
}