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