import playList from "./playList.js"

const prevBtn = document.querySelector('.play-prev')
const playBtn = document.querySelector('.play-prev').nextElementSibling
const nextBtn = document.querySelector('.play-next')
const trackList = document.querySelector('.play-list')
const audio = new Audio()
let isPlay = false
let playNum = 0



const showPlayList = () => {
    playList.forEach((el) => {
        let song = document.createElement('li')
        song.textContent = el.title
        song.classList.add('play-item')
        trackList.append(song)
    })
}

const playMusic = () => {
    if (isPlay === false) {
        audio.src = playList[playNum].src
        audio.currentTime = 0
        audio.play()
        isPlay = true
        document.querySelectorAll('.play-item')[playNum].classList.add('item-active')
    } else {
        audio.pause()
        isPlay = false
        document.querySelectorAll('.play-item')[playNum].classList.remove('item-active')
    }
}

const nextTrack = () => {
    document.querySelectorAll('.play-item')[playNum].classList.remove('item-active')
    playNum++
    if (playNum < playList.length) {
        isPlay = false
        playMusic()
    } else {
        playNum = 0
        isPlay = false
        playMusic()
    }
}

const prevTrack = () => {
    document.querySelectorAll('.play-item')[playNum].classList.remove('item-active')
    playNum--
    if (playNum < 0) {
        isPlay = false
        playNum = playList.length
        playMusic()
    } else {
        isPlay = false
        playMusic()
    }
}

showPlayList()
console.log(document.querySelectorAll('.play-item'))
playBtn.addEventListener('click', function() {
    playMusic()
    playBtn.classList.toggle('pause')
    playBtn.classList.toggle('play')
})

audio.addEventListener('ended', nextTrack)
prevBtn.addEventListener('click', prevTrack)
nextBtn.addEventListener('click', nextTrack)
