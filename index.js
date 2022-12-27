// value - получить текст из input
// innerHTML - записать текст в правый тег
// . - для класса
// # для id

const buttons = document.querySelectorAll('.number');
const options = document.querySelectorAll('.options');
const input = document.querySelector('#output');
const equal = document.querySelector('.equal');
let firstNumber = 0;
let secondNumber = Number.parseInt(output.value)

//Проверка на роботу кнопок
options.forEach(option => {
    option.addEventListener('click', function() {
        firstNumber = Number.parseInt(output.value)
        option = event.currentTarget.dataset.action;
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

equal.addEventListener('click', function() {
    if (!options) {
        return;
    }
    if (options === 'subtract') {
        output.value = substract(firstNumber, secondNumber);
    }
    if (options === 'multiply') {
        output.value = firstNumber + secondNumber;
    }
    if (options === 'substruct') {
        output.value = firstNumber + secondNumber;
    }
    if (options === 'sum') {
        output.value = firstNumber + secondNumber;
    }
})
console.log(equal);


// document.getElementById('output').innerHTML + result;