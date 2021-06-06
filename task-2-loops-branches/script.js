let n = prompt('Введите целое число n',0); 
let spaceReg = /^\s*$/;

// spaceReg.test('string') - проверка, состоит ли строка только из пробелов или пустая

while(isNaN(+n) || !Number.isInteger(+n) || spaceReg.test(n)) 
    n = prompt('n не является целым числом, попробуйте ещё раз',0);

let m = prompt('Введите целое число m', 0);

while(isNaN(+m)|| !Number.isInteger(+m) || spaceReg.test(m)) 
    m = prompt('m не является целым числом, попробуйте ещё раз', 0);

let min = Math.min(+m, +n);
let max = Math.max(+m,+n);

let mode = confirm('Пропускать парные числа?');
let sum = 0;
for (let i = min; i <= max; i++){
    if (mode && i % 2 == 0) continue;
    sum+=i;
}

const res = document.getElementById('result');

res.textContent = sum;