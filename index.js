// value - получить текст из input
// innerHTML - записать текст в правый тег
// . - для класса
// # для id

const input = document.querySelector('#output');
const equal = document.querySelector('.equal');
const numbers = document.querySelectorAll('.number');
const options = document.querySelectorAll('.options');
const clear = document.querySelector('.clear');


numbers.forEach(number => {
    number.addEventListener('click', ({ target }) => {
        const value = target.dataset.num
        output.value += value
    });
});

options.forEach(option => {
    option.addEventListener('click', ({ target }) => {
        const value = target.dataset.action
        output.value += value
    });
});




clear.addEventListener('click', () => {
    input.value = '';

})
equal.addEventListener('click', () => {
    output.value = eval(output.value)
});