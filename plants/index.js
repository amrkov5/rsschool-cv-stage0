//Hamburger menu start
const hambContainer = document.querySelector('.hamb-container')
const hambLine = document.querySelectorAll('.hamb-line')
const hambBg = document.querySelector('.bg-menu')
const hambMenu = document.querySelector('.hamb-menu')
const hambList = document.querySelector('.hamb-list')
const hambLinks = document.querySelectorAll('.hamb-item a')

const toggleHambMenu = () => {
    hambMenu.classList.toggle('hidden-menu')
    hambBg.classList.toggle('hidden-bg')
    hambLine[0].classList.toggle('hamb-line__child1')
    hambLine[1].classList.toggle('hamb-line__child2')
    hambLine[2].classList.toggle('hamb-line__child3')
    hambLine[3].classList.toggle('hamb-line__child4')
    hambList.classList.toggle('hidden-list')
}

hambContainer.addEventListener('click', toggleHambMenu)
hambBg.addEventListener('click', toggleHambMenu)
hambLinks.forEach((el) => {
    el.addEventListener('click', toggleHambMenu)
})
//hamburger menu finish

//service functions start
const serviceBtn = document.getElementsByClassName('service-btn')
const serviceType = document.getElementsByClassName('service')

const toggleServiceBtns = (el) => {
    let pushed = 0
    for (const elem of serviceBtn) {
        if (elem.matches('.service-btn__active') && !el.matches('.service-btn__active')) {
            pushed++    
       }
    }
    if (pushed === 2) {
        alert('Only two services can be chosen')
    } else {
        el.classList.toggle('service-btn__active')
        for (const serviceEl of serviceType) {
            if (serviceEl.classList.contains(el.innerHTML.toLowerCase())) {
                serviceEl.classList.toggle('active')
            } 
            if (!serviceEl.classList.contains('active')) {
                serviceEl.classList.add('service-blur')
            }
        }
    }
    
}

for (const el of serviceBtn) {
    el.addEventListener('click', function() {
        toggleServiceBtns(el)
    })
    console.log('123', el)
}
//service function finish