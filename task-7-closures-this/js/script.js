const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1

function getMyTaxes(salary = 0) {
    if (!salary) return 'Вы не ввели зарплату!';
    return Math.floor(this.tax * salary);
}

// 2

function getMiddleTaxes() {
    return Math.floor(this.tax * this.middleSalary);
}

// 3

function getTotalTaxes() {
    return Math.floor(this.tax * this.middleSalary * this.vacancies);
}

// 4

const minSalary = 1500;
const maxSalary = 2000;

function getMySalary(country) {

    const salary = minSalary + Math.floor(Math.random() * (maxSalary - minSalary + 1));
    const taxes = Math.floor(country.tax * salary);
    const profit = salary - taxes;
    //element.textContent = JSON.stringify({ salary, taxes, profit });
    return JSON.stringify({ salary, taxes, profit });

    // setInterval(showObject, 1000);
}

// testing

window.addEventListener('load', () => {
    const tasks = document.querySelectorAll('.task');
    const countries = [ukraine, latvia, litva];

    tasks.forEach((task, index) => {
        const select = task.querySelector('.task__select');
        const options = select.querySelectorAll('.task__option');
        const result = task.querySelector('.task__result');
        const input = task.querySelector('.task__input');

        select.id = `select${index + 1}`;
        result.id = `result${index + 1}`;

        if (input) input.id = `input${index + 1}`;

        options.forEach((option, index) => {
            if (index === 0) option.setAttribute('selected', true);
            option.setAttribute('data-country-index', index);
        });
    });

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const select = document.getElementById(`select${index + 1}`);
            const countryIndex = select.options[select.selectedIndex].dataset.countryIndex;
            const country = countries[countryIndex];

            const functionName = button.dataset.functionName;
            const additionalArguments = [];

            const input = document.getElementById(`input${index + 1}`);
            if (input) {
                additionalArguments.push(input.value);
            }

            const resultSpan = document.getElementById(`result${index + 1}`);
            let resultValue = null;
            resultSpan.classList.add('task__result--active');

            switch (functionName) {
                case 'getMyTaxes':
                    resultValue = getMyTaxes.call(country, ...additionalArguments);
                    resultSpan.textContent = resultValue;
                    break;
                case 'getMiddleTaxes':
                    resultValue = getMiddleTaxes.call(country);
                    resultSpan.textContent = resultValue;
                    break;
                case 'getTotalTaxes':
                    resultValue = getTotalTaxes.call(country);
                    resultSpan.textContent = resultValue;
                    break;
                case 'getMySalary':
                    setInterval(() => {
                        resultValue = getMySalary(country);
                        resultSpan.textContent = resultValue;
                    }, 1000);
                default:
                    resultSpan.textContent = '';
            }

        });
    });

});


