const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.weather-description')
const city = document.querySelector('.city')
city.value = 'Helsinki'

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&lang=en&appid=128f71f35105810d96cd3a5bdf5064a8&units=metric`
    const res = await fetch(url)
    const data = await res.json()
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.list[0].weather[0].id}`)
    temperature.textContent = `${data.list[0].main.temp}°C`
    weatherDescription.textContent = data.list[0].weather[0].description
}

getWeather()
city.addEventListener('change', () => {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&lang=ru&appid=128f71f35105810d96cd3a5bdf5064a8&units=metric`
    getWeather(url)
})