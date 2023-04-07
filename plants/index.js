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
console.log(serviceBtn)
console.log(serviceType)

const toggleServiceBtns = (el) => {
    console.log('toggle')
    let pushed = 0
    for (const elem of serviceBtn) {
        console.log(elem)
        if (elem.matches('.service-btn__active') && !el.matches('.service-btn__active')) {
            pushed++    
            console.log('pushed:',pushed)
       }
    }
    if (pushed === 2) {
        alert('Only two services can be chosen')
    } else {
        el.classList.toggle('service-btn__active')
        console.log(el.innerHTML)
        for (const serviceEl of serviceType) {
            console.log(serviceEl.includes(el.innerHTML.toString()))
            if (!serviceEl.matches(el.innerHTML)) {
                console.log('1233')
                serviceEl.classList.toggle('service-blur')
                serviceEl.classList.toggle('checked')
            }
        //     console.log('inner_services',serviceEl.innerHTML)
        //     console.log('childnodes',serviceEl.childNodes[3])
        //     if (!el.innerHTML === 'Gardens') {
        //         serviceEl.classList.toggle('service-blur')
        //     }
        }
    }
}

// serviceBtn.forEach(el => 
for (const el of serviceBtn) {
    el.addEventListener('click', function() {
        toggleServiceBtns(el)
    })
    console.log('123', el)
}
//service function finish