const hambContainer = document.querySelector('.hamb-container')
const hambLine = document.querySelector('.hamb-line')
const hambBg = document.querySelector('.bg-menu')
const hambMenu = document.querySelector('.hamb-menu')

hambContainer.addEventListener('click', (event) => {
    console.log(event)
    hambMenu.classList.toggle('hidden-menu')
    hambBg.classList.toggle('hidden-bg')
})

// hambMenu.addEventListener('animationend', () => {
//     hambBg.classList.toggle('hidden-bg')
// })