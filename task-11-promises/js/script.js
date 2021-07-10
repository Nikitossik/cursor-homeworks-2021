async function getRandomChinese(length) {
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

const input = document.getElementById('length');
const title = document.querySelector('.banner__title');

getRandomChinese(input.value).then(result => title.textContent = result);

input.addEventListener('change', e => {
    getRandomChinese(e.target.value).then(result => {
        title.textContent = result
    });
});