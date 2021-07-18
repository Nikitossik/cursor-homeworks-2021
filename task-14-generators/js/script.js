function* createIdGenerator() {
    let i = 0;

    while (true) {
        yield i++;
    }
}

function* newFontGenerator(value) {
    let result = yield value;

    while (true) {
        value = result === 'up' ? value + 2 : result === 'down' ? value - 2 : value;
        result = yield value;
    }
}

const idButton = document.querySelector('.btn--id');
const idOutput = document.querySelector('.task__output');

const idGenerator = createIdGenerator();

idButton.addEventListener('click', () => idOutput.value = idGenerator.next().value);

const lowerButton = document.querySelector('.btn--lower');
const upperButton = document.querySelector('.btn--upper');

const fontSizeGenerator = newFontGenerator(14);

lowerButton.addEventListener('click', (e) => {
    let size = fontSizeGenerator.next(e.target.value).value;
    if (size > 8 && size < 40) document.documentElement.style.setProperty('--task-font-size', `${size}px`);
});

upperButton.addEventListener('click', (e) => {
    let size = fontSizeGenerator.next(e.target.value).value;
    if (size > 8 && size < 40) document.documentElement.style.setProperty('--task-font-size', `${size}px`);
});




