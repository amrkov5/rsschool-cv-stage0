const name = document.querySelector('.name')
let dayPart = ''
const showGreetings = () => {
    const greeting = document.querySelector('.greeting')
    const time = new Date()
    if (0 <= time.getHours() && time.getHours() < 6) {
        dayPart = 'night'
    } else if (6 <= time.getHours() && time.getHours() < 12) {
        dayPart = 'morning'
    } else if (12 <= time.getHours() && time.getHours() < 18) {
        dayPart = 'afternoon'
    } else if (18 <= time.getHours() && time.getHours() < 24) {
        dayPart = 'evening'
    }
    greeting.textContent = `Good ${dayPart}`
    setTimeout(showGreetings, 1000)
}

const saveName = () => {
    localStorage.setItem('name', name.value)
}

const showName = () => {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name')
    }
}

window.addEventListener('beforeunload', saveName)
window.addEventListener('load', showName)
showGreetings()

export {dayPart}