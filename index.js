const buttons = document.querySelectorAll('.number')
const options = document.querySelectorAll('.options')

options.forEach(option => {
    option.addEventListener('click', function() {
        console.log(event.target);
    })
})

buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log(event.target)
    })
})

// document.getElementById('output').innerHTML + result;