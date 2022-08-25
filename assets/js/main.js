const clickButton = document.getElementById('btn')
const outputCounter = document.querySelector('.zeit')

let counter
let myInterval

clickButton.addEventListener('click', () => {
    counter = 101
    clickButton.innerHTML = 'Running…'
    clickButton.disabled = true
    myInterval = setInterval(prozentDown, 100)
})

const prozentDown = () => {
    if (counter === 0) {
        clearInterval(myInterval)
        clickButton.disabled = false
        clickButton.innerHTML = 'Again?'
    } else {
        counter--
        outputCounter.innerHTML = counter + ' %'
    }
}