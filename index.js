const buttons = document.querySelectorAll('.number')
const options = document.querySelectorAll('.options')

options.forEach(option => {
    option.addEventListener('click', function() {
        console.log(event.target.dataset.num);
    })
})

buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log(event.target.dataset.num);
    })
})

// document.getElementById('output').innerHTML + result;