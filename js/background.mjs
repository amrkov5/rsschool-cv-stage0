import { dayPart } from "./greetings.mjs"

const bgImage = document.querySelector('body')
const sliderNext = document.querySelector('.slide-next')
const sliderPrev = document.querySelector('.slide-prev')
let min = 1
let max = 20
let rand = Math.floor(Math.random() * (max - min + 1) + min)

const loadPic = () => {
    if (rand.toString().length === 1) {
        rand = '0' + rand
    }
    let link = `https://raw.githubusercontent.com/amrkov5/momentum/assets/images/${dayPart}/${rand}.webp`
    const img = new Image();
    img.src = link
    img.onload = () => {
        bgImage.style.backgroundImage = `url(${link})`
        bgImage.style.backgroundSize = 'cover'
    }
}

const showNextPic = () => {
    rand = Number(rand)
    rand += 1
    if (rand > 20) {
        rand = 1
    }
    loadPic()
}

const showPrevPic = () => {
    rand = Number(rand)
    rand -= 1
    if (rand < 1) {
        rand = 20
    }
    loadPic()
}
window.addEventListener('load', loadPic)
sliderNext.addEventListener('click', showNextPic)
sliderPrev.addEventListener('click', showPrevPic)