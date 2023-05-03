const showDate = () => {
    const dateObj = document.querySelector('.date')
    const date = new Date()
    const options = { weekday: 'long', month: 'long', day: 'numeric'}
    dateObj.textContent = date.toLocaleDateString('en-us', options)
}

const showTime = () => {
    const timeObj = document.querySelector('.time')
    const time = new Date()
    
    timeObj.textContent = time.toLocaleTimeString()
    setTimeout(showTime, 1000)
    setTimeout(showDate, 1000)
}



showTime()
showDate()