const quoteBtn = document.querySelector('.change-quote')
const authorText = document.querySelector('.author')
const quoteText = document.querySelector('.quote')


async function setQuote() {

    const quotes = './js/data.json'
    const res = await fetch(quotes)
    const data = await res.json()
    min = 1
    max = data.length
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    quoteText.textContent = data[random].text
    authorText.textContent = data[random].author
}

setQuote()
quoteBtn.addEventListener('click', setQuote)