const tea = 15.678;
const candies = 123.965;
const coffee = 90.2345;

const totalSum = tea + candies + coffee;

const integerSum = Math.trunc(tea) + Math.trunc(candies) + Math.trunc(coffee);

const roundedIntegerSum = Math.round(integerSum / 100) * 100;

const clientSum = 500;

const clientChange = clientSum - totalSum;

const roundedAverage = +((integerSum) / 3).toFixed(2);

const maxDiscountPercent = 51;

const discount = Math.floor(Math.random() * maxDiscountPercent) / 100;

const reducedSum = +(totalSum - totalSum * discount).toFixed(2);

const income = Math.floor((integerSum / 2) - integerSum * discount);

document.write(`
<p>Максимальна ціна: ${Math.max(tea, candies, coffee)}</p>
<p>Мінімальна ціна: ${Math.min(tea, candies, coffee)}</p>
<p>Вартість всіх товарів: ${totalSum}</p>
<p>Округленна вартість товарів: ${integerSum}</p>
<p>Округленна вартість товарів до сотень: ${roundedIntegerSum}</p>
<p>Сума всіх товарів ${integerSum % 2 == 0 ? 'парна' : 'непарна'}</p>
<p>Решта з 500 грн. : ${clientChange}</p>
<p>Середнє значення цін, округлене до другого знаку після коми: ${roundedAverage}</p>
<p>Знижка ${discount * 100}%, сума до оплати ${reducedSum}</p>
<p>Чистий прибуток: ${income} </p>
`);




