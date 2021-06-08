function isNotaNumber(n){
    return isNaN(+n) || String(n).trim() === '';
}

// 1

const getMaxDigit  = number => {
    if (isNotaNumber(number)) return 'Вы ввели не число!';

    number = number + '';
    let digits = [];

    for (let i = 0; i < number.length; i++)  
        if (/[\d]/.test(number[i])) digits.push(+number[i]);

    return Math.max(...digits);
}

// 2

// добавляем в Math функцию округления к определённому разряду

(function() {
    function decimalAdjust(type, value, exp) {

      // Если степень не определена, либо равна нулю...
      if (typeof exp === 'undefined' || +exp === 0) return Math[type](value);
      
      value = +value;
      exp = +exp;

      // Если значение не является числом, либо степень не является целым числом...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) return NaN;
      
      // Сдвиг разрядов
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));

      // Обратный сдвиг
      value = value.toString().split('e');

      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }
  
    // Десятичное округление к ближайшему
    if (!Math.round10) Math.round10 = (value, exp) => decimalAdjust('round', value, exp);
})();

// добавляем в Math функцию вычисления корня n-нной степени

Math.nthroot = (x,n) => Math.exp((1/n) * Math.log(x));

// функция возвращает представление десятичной дробной степени в обычной: целый числитель и знаменатель

function getRegularFraction(power){

    let numerator, denominator; // числитель, знименатель

    function getExponentToRound(number){
        const defaultRoundingExp = -2;
        let valueAfterComma = String(number).split('.')[1];  // значение после запятой у знаменателя
        let firstZerosAfterComma = valueAfterComma ? valueAfterComma.match(/^(0+)?/g)[0] : '';  // первые идущие подряд нули в этой части
        let exp = firstZerosAfterComma.length ? defaultRoundingExp : -(firstZerosAfterComma.length + 1); 
        // если нулей нет, то будем округлять до defaultRoundingExp, а если есть - до их кол-ва
        return exp;
    }

    if (power > -1 && power < 0 || power < 1 && power > 0){
        numerator = 1;
        denominator = numerator / power;

        let exponent = getExponentToRound(denominator);
        multiplier = powerDigit(10, Math.abs(exponent)); // множитель для числителя

        denominator = Math.round10(denominator, exponent) * multiplier; // округляем и перемножаем знаменатель
        numerator = multiplier; // перемножаем числитель
    }
    else{
        numerator = power;
        denominator = 1;

        let exponent = getExponentToRound(numerator);
        multiplier = powerDigit(10, Math.abs(exponent));

        numerator = Math.round10(numerator, exponent) * multiplier;
        denominator = multiplier;
    }

    numerator = Math.round(numerator);
    denominator = Math.round(denominator);

    //функия нахождения найбольшего общего делителя

    function gcd(x, y){
        x = Math.abs(x);
        y = Math.abs(y);
        if (y > x) return gcd(y, x);
	    if (!y) return x;
	    return gcd(y, x % y);
    }

    let gcdValue = gcd(numerator, denominator);

    // сокращаем значения

    numerator /= gcdValue;
    denominator /= gcdValue;

    if (denominator < 0){
        denominator = Math.abs(denominator);
        numerator = -numerator;
    }

    return [numerator, denominator];
}

const powerDigit = (number, power) => {

    // функция расчёта целой степени числа

    function integerPower(num, power){
        let res = 1;
        if (power !== 0) {
            for (let i = 0; i < Math.abs(power); i++) res *= num;
            res = power < 0 ? (1 / res) : res;
        }
        return res;
    }

    if (isNotaNumber(number) || isNotaNumber(power)) return 'Неправильный формат';
    let res = 1;
    power = +power; 
    number = +number; 

    if (!Number.isInteger(power)){ // если степень не целая
        let [powerNumerator, powerDenominator] = getRegularFraction(power); 
        let [numberNumerator, numberDenominator] = getRegularFraction(number);

        console.log(`${numberNumerator}/${numberDenominator} ^ ${powerNumerator}/${powerDenominator}`);

        if (powerNumerator < 0){
            if (Number.isInteger(number)) {  
                number = numberNumerator;
                console.log(`${number}`);

                let poweredNumber = Math.abs(integerPower(number, powerNumerator));

                res = number < 0 ? -1 / Math.nthroot(poweredNumber, powerDenominator) : 1 / Math.nthroot(poweredNumber, powerDenominator);
            }
            else {
                number = numberNumerator > 0 ? numberDenominator : -numberDenominator;
                console.log(`${number}`);
                let poweredNumber = Math.abs(integerPower(number, powerNumerator));
                res = number < 0 ? -Math.nthroot(poweredNumber, powerDenominator) : Math.nthroot(poweredNumber, powerDenominator);
            }
        }
        else {
            let poweredNumber = integerPower(number, powerNumerator);
            res = number < 0 ? -Math.nthroot(Math.abs(poweredNumber), powerDenominator) : Math.nthroot(poweredNumber, powerDenominator);
        }

        if (isNotaNumber(res)) return 'Выходит не число!';
    }
    else res = integerPower(number, power);

    return res;
}

// 3

const formatName = name => {
    let validName = /^[a-zа-я]{2,16}$/i;
    if (!validName.test(name)) return 'Неправильный формат имени. Правильное имя состоит только из букв. Длинна от 2 до 16';

    name = name.toLowerCase();
    name = name.substr(0,1).toUpperCase() + name.substr(1, name.length - 1);
    return name;
}

// 4

const calculateAfterTax = money => {
    if (isNotaNumber(money)) return 'Вы ввели не число!';
    const tax = 19.5;

    return money - (money * tax) / 100;
}

// 5

const getRandomNumber = (n,m) => {
    if (isNotaNumber(n) || isNotaNumber(m)) return 'Неправильный формат';
    else if(!Number.isInteger(+n) || !Number.isInteger(+m)) return 'Числа должны быть целыми';
    else if (!isNotaNumber(n) && !isNotaNumber(m) && Number.isInteger(+n) && Number.isInteger(+m) && n > m) return 'n должно быть менше m';
    
    return +n + Math.floor((Math.random()*(m - n + 1)));
}

// 6 

const countLetter = (letter, word, wordFormat = /^\w+$/gi) => {
    if (letter.length !== 1) return 'Вы ввели не символ!';
    else if (wordFormat && !wordFormat.test(word)) return 'Вы ввели не слово!';

    let matches = word.split(new RegExp(letter, 'gi')).length - 1;

    return matches;
}

// 7 

const convertCurrency = moneyString => {
    const validStringFormat = /^\d+(\$|uah)$/gi;
    moneyString = moneyString.trim();

    if (!validStringFormat.test(moneyString)) return 'Неправильный формат денег (валюты)';

    const validCurrencyFormat = /(\$|uah)/gi;
    const validMoneyFormat = /(\d+)/gi;

    [currency, money] = [moneyString.match(validCurrencyFormat)[0], moneyString.match(validMoneyFormat)[0]];

    const resultCurrency = currency === '$' ? 'UAH' : '$';
    const currencyMultiplier = currency === '$' ? 27.12 : 0.037;
    const resultMoney = Math.round(money * currencyMultiplier);

    return `${resultMoney}${resultCurrency}`;
}

// 8

const getRandomPassword = (length = 8) =>{
    length = length || 8;

    if (isNotaNumber(length)) return 'Вы ввели не число!'; 
    else if (!Number.isInteger(+length)) return 'Число должно быть целым'; 

    let password = '';

    for (let i = 0; i < length; i++) password += Math.floor(Math.random() * 10);

    return password;
}

// 9 

const deleteLetters = (letter, string) => {
    if (letter.length !== 1) return 'Вы ввели не символ!';

    return string.replaceAll(letter, '');
}

// 10

const isPalyndrom = string => {
    const compressed = string.toLowerCase().replaceAll(/[\s—_,\.]/gi, '').split('').join('');
    const reversed = compressed.split('').reverse().join('');

    return `Строка "${string}" ${compressed === reversed ? '' : 'не '}являеться полиндромом`;
}

// 11

const deleteDuplicateLetter = string => {
    const letters = string.split('');
    const uniqueLetters = Array.from(new Set(letters));

    for (let i = 0; i < uniqueLetters.length; i++){
        if (countLetter(uniqueLetters[i], string, null) > 1) string = deleteLetters(uniqueLetters[i], string);
    }

    return string;
}

let functions = [
    getMaxDigit, powerDigit, formatName, calculateAfterTax, getRandomNumber, countLetter, 
    convertCurrency, getRandomPassword, deleteLetters, isPalyndrom, deleteDuplicateLetter
];

const buttons = document.querySelectorAll('.function .btn');

buttons.forEach(button => {
    button.addEventListener('click', callFunction);
});

function callFunction(e) {
    const elem = e.target;
    const functionIndex = elem.dataset.function;
    const functionRequests = elem.dataset.functionRequests.split(',').map(req => req.trim());

    const parentElem = elem.closest('.function');
    const functionResult = parentElem.querySelector('.function__result');

    let functionArgs = [];

    functionRequests.forEach(req => {
        functionArgs.push(prompt(req));
    });

    functionResult.textContent = functions[functionIndex](...functionArgs);
}