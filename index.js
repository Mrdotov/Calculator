// value - получить текст из input
// innerHTML - записать текст в правый тег
// . - для класса
// # для id

const buttons = document.querySelectorAll('.number');
const options = document.querySelectorAll('.options');
const input = document.querySelector('#output');
let firstNumber = 0;
let operation = null;

function out() {
    buttons.values === input.values
}
//Проверка на роботу кнопок
options.forEach(option => {
    option.addEventListener('click', function() {
        firstNumber = Number.parseInt(output.value)
        operation = event.currentTarget.dataset.action;
    });
});
buttons.forEach(button => {
    button.addEventListener('click', function() {

        let value = event.currentTarget.textContent
        if (true) {
            output.value = value;
        } else {
            output.value += value;
        }
    });
});

const equal = document.querySelector('.equal')

equal.addEventListener('click', () => {
    if (!options) {
        return
    }

})




// document.getElementById('output').innerHTML + result;