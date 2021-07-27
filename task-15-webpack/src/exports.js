// 3

export function isPalyndrom(string) {
    const compressed = string.toLowerCase().replaceAll(/[\s—_,\.]/gi, '').split('').join('');
    const reversed = compressed.split('').reverse().join('');

    return `Строка "${string}" ${compressed === reversed ? '' : 'не '}являеться полиндромом`;
}

// 4 

export const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
export const marks = [4, 5, 5, 3, 4, 5];

export const setStudentsMarks = (students, marks) => {
    const studentsMarks = [];

    for (let i = 0; i < students.length; i++)
        studentsMarks[i] = [students[i], marks[i]];

    return studentsMarks;
}

// 5

export function replaceBadWords(string, ...additional) {

    if (!string.length) return 'Ви нічого не ввели!';

    const expletives = ['shit', 'fuck', ...additional];
    let words = string.split(' ');
    words = words.map(word => {
        if (expletives.some(curse => word.toLowerCase().includes(curse))) {
            let foundCurses = expletives.filter(curse => word.toLowerCase().includes(curse));
            foundCurses.forEach(curse => {
                let censure = '*'.repeat(curse.length), regExp = new RegExp(curse, 'gi');
                word = word.replaceAll(regExp, censure);
            });
        };
        return word;
    });
    return words.join(' ');
}

// 6

export function calculateWordLetters(word) {
    if (!word) return 'Пусте слово';
    const repeats = [...word].reduce((resultObj, letter) => {
        resultObj[letter] = letter in resultObj ? resultObj[letter] : 0;
        resultObj[letter]++;
        return resultObj;
    }, {});

    return repeats;
}

// 7

export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

export function getTotalTaxes() {
    return Math.floor(this.tax * this.middleSalary * this.vacancies);
}

//8 

export class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
        this.accepted = true;
    }

    getInfo = () => {
        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
    }

    getAverageMark = () => {
        if (this.accepted) {
            const sum = this.marks.reduce((prev, total) => total + prev, 0);
            const count = this.marks.length;

            return +(sum / count).toFixed(1);
        }
        return null;
    }

    get studentMarks() {
        if (this.accepted) return this.marks;
        return null;
    }

    set studentMarks(mark) {
        if (this.accepted) this.marks.push(mark);
    }

    dismiss = () => {
        this.accepted = false;
    }

    recover = () => {
        this.accepted = true;
    }
}

// 9

export const getRandomColor = () => {
    const color = [];

    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }

    return `rgb(${color[0]},${color[1]},${color[2]})`;
}

export const createBlock = (size, color) => {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.width = `${size}px`;
    block.style.height = `${size}px`;
    block.style.backgroundColor = color;

    return block;
}

export const generateBlocks = (size = 50, cols = 5, rows = 5) => {
    const container = document.querySelector('.container');

    container.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('blocks-row');

        for (let j = 0; j < cols; j++) {
            const block = createBlock(size, getRandomColor());
            row.append(block);
        }
        container.append(row);
    }
}

// 10 (audio play func)

export function playAudio(audio) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}


// 11

export async function getRandomChinese(length) {
    let result = '';

    for (let i = 0; i < length; i++) {
        const iteration = new Promise((resolve) => {
            setTimeout(() => {
                const chinese = String.fromCharCode(+Date.now().toString().slice(-5));
                resolve(chinese);
            }, 50 * i);
        });
        result += await iteration;
    }

    return result;
}

// 13

export const loadJSON = (url) => {
    return fetch(url).then(data => data.json());
}

export const loadPeople = (film, format) => {
    const charactersLinks = film.characters;
    const requests = charactersLinks.map(characterLink => loadJSON(characterLink + '?format=' + format));
    return Promise.all(requests);
}

export const getGenderIcon = (gender, format) => {
    const maleValue = format === 'wookiee' ? 'scraanwo' : 'male';
    const femaleValue = format === 'wookiee' ? 'wwwoscraanwo' : 'female';
    if (gender === maleValue) return '<span class="gender"><i class="fas fa-mars"></i></span>';
    else if (gender === femaleValue) return '<span class="gender"><i class="fas fa-venus"></i></span>';
    return `<span class="gender">${gender}</span>`;
}

export const showPeople = async (people, images, film, format) => {
    const peopleImages = images.people;
    const charactersLinks = film.characters;

    const contentMain = document.querySelector('.content');
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

export const formatProperty = (property) => property.charAt(0).toUpperCase() + property.slice(1).replaceAll('_', " ");

export const showPlanets = async (planets, images, format) => {
    const planetsList = planets.results;
    const planetsImages = images.planets;
    const prevUrl = planets.previous;
    const nextUrl = planets.next;
    const planetsLinks = planets.results.map(planet => planet.url);

    const contentMain = document.querySelector('.content');
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


    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    prevButton.dataset.url = prevUrl !== null ? prevUrl : '';
    nextButton.dataset.url = nextUrl !== null ? nextUrl : '';
}

// 14

export function* createIdGenerator() {
    let i = 0;

    while (true) {
        yield i++;
    }
}
