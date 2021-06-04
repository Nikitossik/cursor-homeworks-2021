let n = Math.trunc(+prompt('Введите число n',0));

while(isNaN(n)) n = Math.trunc(+prompt('n не является числом, попробуйте ещё раз',0));

let m = Math.trunc(+prompt('Введите число m', 0));

while(isNaN(m)) m = Math.trunc(+prompt('m не является числом, попробуйте ещё раз', 0));

let min = Math.min(m,n);
let max = Math.max(m,n);

let mode = confirm('Пропускать парные числа?');
let sum = 0;
for (let i = min; i <= max; i++){
    if (mode && i % 2 == 0) continue;
    sum+=i;
}

const res = document.getElementById('result');

res.textContent = sum;