// value - получить текст из input
// innerHTML - записать текст в правый тег
// . - для класса
// # для id

const input = document.querySelector('#output');
const numbers = document.querySelectorAll('.number');
const options = document.querySelectorAll('.options');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear')

    //Проверка на роботу кнопок
options.forEach(option => {
    option.addEventListener('click', ({ target }) => {
        const value = target.dataset.action
        output.value += value
    });
});
numbers.forEach(number => {
    number.addEventListener('click', ({ target }) => {
        const value = target.dataset.num
        output.value += value
    });
});
clear.addEventListener('click', () => {
    output.value = '';
})
equal.addEventListener('click', () => {
    output.value = eval(output.value)
});

// document.getElementById('output').innerHTML + result;