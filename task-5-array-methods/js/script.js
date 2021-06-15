// 1

const getRandomArray = (length, min, max) => {
    if (length == 0) return 'Пустий массив!';
    let result = Array(+length).fill(0);
    const minimum = Math.min(min, max);
    const maximum = Math.max(min, max);
    result = result.map(element => minimum + Math.floor(Math.random() * (maximum - minimum + 1)));
    return result;
}

// 2

const getModa = (...numbers) => {
    if (!numbers.length) return 'Ви нічого не ввели!';
    else if (numbers.some(isNaN)) return 'Неправильний формат!';

    const filtered = numbers.filter(number => Number.isInteger(number));
    let repeats = filtered.reduce(
        (repeatsObj, number) => {
            if (!repeatsObj[number]) repeatsObj[number] = 0;
            repeatsObj[number]++;
            return repeatsObj;
        }, {}
    );
    let maxEntry = Math.max(...Object.values(repeats));

    const result = [];

    for (pair of Object.entries(repeats))
        if (pair[1] === maxEntry) result.push(pair[0]);

    return result || 'Пустий массив!';
}

// 3

const getAverage = (...numbers) => {

    if (!numbers.length) return 'Ви нічого не ввели!';
    else if (numbers.some(isNaN)) return 'Неправильний формат!';

    const filtered = numbers.filter(number => Number.isInteger(number));
    const sum = filtered.reduce((sum, number) => sum + number, 0);
    return filtered.length === 0 ? 0 : sum / filtered.length || 'Пустий массив!';
}

// 4

const getMedian = (...numbers) => {

    if (!numbers.length) return 'Ви нічого не ввели!';
    else if (numbers.some(isNaN)) return 'Неправильний формат!';

    const list = numbers.filter(number => Number.isInteger(number))
        .sort((a, b) => a - b);

    const midIndex = Math.floor(list.length / 2);

    return list.length % 2 != 0 ? list[midIndex] : (list[midIndex - 1] + list[midIndex]) / 2;
}

// 5

const filterEvenNumbers = (...numbers) => {
    if (!numbers.length) return 'Ви нічого не ввели!';
    else if (numbers.some(isNaN)) return 'Неправильний формат!';
    return numbers.filter(number => number % 2 != 0) || 'Пустий массив!';
}

// 6

const countPositiveNumbers = (...numbers) => {
    if (!numbers.length) return 'Ви нічого не ввели!';
    else if (numbers.some(isNaN)) return 'Неправильний формат!';
    return numbers.filter(number => number > 0).length || 'Пустий массив!';
}

// 7

const getDividedByFive = (...numbers) => {
    if (!numbers.length) return 'Ви нічого не ввели!';
    else if (numbers.some(isNaN)) return 'Неправильний формат!';
    return numbers.filter(number => number % 5 == 0) || 'Пустий массив!';
}

// 8

const replaceBadWords = (string, ...additional) => {

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

// 9

const divideByThree = (word) => {

    if (!word.length) return 'Ви нічого не ввели!';

    let result = word.toLowerCase().replaceAll(' ', '');
    if (result.length > 3) {
        result = [];
        for (let i = 0; i < word.length; i += 3)
            result.push(word.substring(i, i + 3));
    }
    return result;
}

// 10

const generateCombinations = (word) => {
    if (word.length > 10) return 'Завелике слово!';
    if (!word.length) return 'Ви нічого не ввели!';
    if (word.length < 2) return [word];

    let permutations = [];
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (word.indexOf(letter) != i) continue;

        let remainingString = word.slice(0, i) + word.slice(i + 1, word.length);

        for (let subPermutation of generateCombinations(remainingString))
            permutations.push(letter + subPermutation)
    }
    return permutations;
}

// Slider initialisation

const swiper = new Swiper('.swiper-container', {
    direction: "vertical",
    mousewheel: true,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// Func-s testing

const functions = [getRandomArray, getModa, getAverage, getMedian,
    filterEvenNumbers, countPositiveNumbers, getDividedByFive, replaceBadWords, divideByThree, generateCombinations];

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

function handleClick(e) {
    let button = e.target,
        functionIndex = +button.dataset.function,
        inputsName = button.dataset.inputsName,
        inputs = document.querySelectorAll(`input[name=${inputsName}]`),
        resultSpan = button.closest('.function-footer').querySelector('span.result');
    params = [];

    inputs.forEach(input => {
        if (input.type === 'number') params.push(+input.value);
        else if (input.type === 'text') {
            let parts = input.value;
            if (input.dataset.isArray === '1') {
                parts = parts.split(',').filter(part => part.trim() != '').map(part => part.trim());
                if (input.dataset.arrayOfStrings !== '1') parts = parts.map(Number);
                params.push(...parts);
            }
            else {
                params.push(parts);
            }

        }
    });

    let result = formatResult(functions[functionIndex](...params));

    resultSpan.classList.add('visible');
    resultSpan.innerHTML = result;

}

function formatResult(value) {
    let result = '';
    if (typeof value === 'object') result = value.length > 1 ? '[' + value.join(', ') + ']' : value[0];
    else result = value;

    return result;
}