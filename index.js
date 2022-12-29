// value - получить текст из input
// innerHTML - записать текст в правый тег
// . - для класса
// # для id

const buttons = document.querySelectorAll('.number');
const options = document.querySelectorAll('.options');
const input = document.querySelector('#output');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear')

//button and opiton
buttons.forEach(button => {
    button.addEventListener('click', function() {
        let value = event.currentTarget.textContent

        if (resetAfterOperation) {
            input.value = value;

        } else {
            input.value += value;
        }
    });
});
let resetAfterOperation = false

options.forEach(option => {
    option.addEventListener('click', function() {
        firstNumber = Number.parseInt(input.value)
        option = event.currentTarget.dataset.action;
        resetAfterOperation = true;


    });
});

// function sum(a, b) {

// }
// sum()


//Взаимоедействие с кнопками

// clear.addEventListener('click', () => {
//     output.value = '';
//     return;
// })
// function result() {
//     input.innerHTML = result;
// }