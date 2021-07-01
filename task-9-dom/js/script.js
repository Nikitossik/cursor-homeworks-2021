const container = document.querySelector('.container');

const getRandomColor = () => {
    const color = [];

    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }

    return `rgb(${color[0]},${color[1]},${color[2]})`;
}

const createBlock = (size, color) => {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.width = `${size}px`;
    block.style.height = `${size}px`;
    block.style.backgroundColor = color;

    return block;
}

const generateBlocks = (parent, size, cols, rows) => {
    parent.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('blocks-row');

        for (let j = 0; j < cols; j++) {
            const block = createBlock(size, getRandomColor());
            row.append(block);
        }
        container.append(row);
    }

    setTimeout(generateBlocks, 1000, parent, size, cols, rows);
}

generateBlocks(container, 50, 5, 5);