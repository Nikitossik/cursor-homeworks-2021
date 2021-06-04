let n = +prompt('Введите число n',0);

while(isNaN(n)) n = +prompt('n не является числом, попробуйте ещё раз',0);

let m = +prompt('Введите число m', 0);

while(isNaN(m)) m = +prompt('m не является числом, попробуйте ещё раз', 0);

let mode = confirm('Пропускать парные числа?');
let sum = 0;
for (let i = n; i <= m; i++){
    if (mode && i % 2 == 0) continue;
    sum+=i;
}

console.log(sum);