const priceBlock = document.getElementsByClassName('price-block')
const price = document.getElementsByClassName('price')
const priceTitle = document.getElementsByClassName('price-title')
const priceTypes = document.querySelector('.price-types')
const priceBtns = document.querySelectorAll('.price-title img')


const openAccordionMenu = (el) => {
    for (const elem of priceTitle) {
        if (elem.classList.contains('price-title__active') && elem != el) {
            elem.classList.remove('price-title__active')
            elem.nextElementSibling.classList.remove('price-block__active')    
            elem.parentElement.parentElement.classList.remove('price-types__active')
            elem.parentElement.classList.remove('price__active')
        }
    }
    el.classList.toggle('price-title__active')
    el.nextElementSibling.classList.toggle('price-block__active')    
    el.parentElement.parentElement.classList.toggle('price-types__active')
    el.parentElement.classList.toggle('price__active')
    el.addEventListener('transitionstart', function () {
        changeBtnPic(el)
    })
}

const changeBtnPic = (el) => {
    if (el.classList.contains('price-title__active')) {
        el.lastElementChild.src = './plants/assets/img/accordion_btn_active.svg'
    } else {
        el.lastElementChild.src = './plants/assets/img/accordion_btn.svg'
    }
}



for (const el of priceTitle) {
    el.addEventListener('click', function () {
        openAccordionMenu(el)
    })
}
