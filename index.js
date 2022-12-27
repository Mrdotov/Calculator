// value - получить текст из input
// innerHTML - записать текст в правый тег
// . - для класса
// # для id

const buttons = document.querySelectorAll('.number');
const options = document.querySelectorAll('.options');
const input = document.querySelector('#output');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear')

let resetAfterOperation = false
    //Проверка на роботу кнопок
options.forEach(option => {
    option.addEventListener('click', function() {
        firstNumber = Number.parseInt(output.value)
        option = event.currentTarget.dataset.action;
        resetAfterOperation = true;

    });
});
buttons.forEach(button => {
    button.addEventListener('click', function() {
        let value = event.currentTarget.textContent

        if (resetAfterOperation) {
            output.value = value

        } else {
            output.value += value;
        }
    });
});
clear.addEventListener('click', () => {
    output.value = '';
})

// document.getElementById('output').innerHTML + result;