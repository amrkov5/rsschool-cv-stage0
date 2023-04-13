const streetArr = ['151 Charlotte Street','9 East 91st Street','511 Warburton Ave','14 WEST Noyes BLVD']
const telArr = ['+1 585 393 0001', '+1 212 456 0002','+1 914 678 0003','+1 315 908 0004']
const cityArr = ['Canandaigua, NY', 'New York City','Yonkers, NY','Sherrill, NY']
const addressContainer = document.querySelector('.address-container')
const selectDiv = document.createElement('div')
const selectText = document.createTextNode('City')
const selectPic = document.createElement('img')
const addressSelector = document.createElement('div')
const contactText = document.querySelectorAll('.contacts-text')

const buildAddressSelector = () => {
    selectPic.src = './plants/assets/img/list_btn.svg'
    addressContainer.prepend(selectDiv)
    selectDiv.prepend(selectText)
    selectDiv.append(selectPic)
    addressContainer.append(addressSelector)
    addressSelector.classList.add('address-selector')
    selectDiv.classList.add('address-select')
    selectPic.classList.add('select-pic')
    for (let i = 0; i<cityArr.length; i++){
        const selectItem = document.createElement('div')
        selectItem.innerText = cityArr[i]
        addressSelector.append(selectItem)
        selectItem.classList.add('address-item')
    }
}

const openSelectMenu = () => {
    selectDiv.classList.toggle('address-select__active')
    selectPic.classList.toggle('select-pic__active')
    addressSelector.classList.toggle('address-selector__active')

}

const items = document.getElementsByClassName('address-item')

const chooseAddr = (el) => {
    selectDiv.classList.toggle('address-select__active')
    selectDiv.classList.add('address-select__chosen')
    selectPic.classList.toggle('select-pic__active')
    addressSelector.classList.toggle('address-selector__active')
    selectText.textContent = el.innerText
    let i = 0
    while (cityArr[i] != el.innerText) {
        i++
    }
    contactText[0].firstElementChild.textContent = cityArr[i]
    contactText[1].firstElementChild.textContent = telArr[i]
    contactText[2].firstElementChild.textContent = streetArr[i]
    document.querySelector('.address').classList.add('address__active')
    if (window.matchMedia("(max-width: 768px)")){
        document.querySelector('.container-contacts').classList.add('container-contacts__768active')
    }

}

buildAddressSelector()
selectDiv.addEventListener('click', openSelectMenu)

for (const el of items) {
    el.addEventListener('click', function () {
        chooseAddr(el)
    })
}

addEventListener('click', (event) => {
    let check = selectDiv.classList.contains('address-select__active')
    && (event.target.classList.contains('address-selector') || 
    event.target.classList.contains('address-item') || event.target.classList.contains('address-select'))
    if (!check) {
        selectDiv.classList.remove('address-select__active')
        selectPic.classList.remove('select-pic__active')
        addressSelector.classList.remove('address-selector__active')
    }
})