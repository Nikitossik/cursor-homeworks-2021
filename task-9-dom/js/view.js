const taskForm = document.querySelector('.task-form');
const defaultSize = 50;
const defaultCols = 5;
const defaultRows = 5;

generateBlocks(defaultSize, defaultCols, defaultRows);
let interval = setInterval(generateBlocks, 1000, defaultSize, defaultCols, defaultRows);

taskForm.addEventListener('change', () => {
    const size = document.getElementById('size').value || defaultSize;
    const cols = document.getElementById('cols').value || defaultCols;
    const rows = document.getElementById('rows').value || defaultRows;

    clearInterval(interval);
    generateBlocks(size, cols, rows);
    interval = setInterval(generateBlocks, 1000, size, cols, rows);
});