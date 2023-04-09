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
        pushed = 2
    } else {
        el.classList.toggle('service-btn__active')
        for (const serviceEl of serviceType) {
            if (serviceEl.classList.contains(el.innerHTML.toLowerCase())) {
                serviceEl.classList.toggle('active')
            }
            if (!serviceEl.classList.contains('active')) {
                serviceEl.classList.add('service-blur')
            } else if (serviceEl.classList.contains('active') && serviceEl.classList.contains('service-blur')) {
                serviceEl.classList.remove('service-blur')
            }
        }
        if (!el.classList.contains('service-btn__active')) {
            let check = false
            for (const elem of serviceBtn) {
                if (elem.classList.contains('service-btn__active')) {
                    check = true
                }
            }
            if (!check) {
                for (const serviceEl of serviceType) {
                    serviceEl.classList.remove('service-blur')
                }
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