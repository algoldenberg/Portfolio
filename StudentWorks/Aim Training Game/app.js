const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#fe59c2', '#fe019a', '#04d9ff','#5555ff','#bc13fe','#ff073a','#39ff14','#f80000','#ffa420','#ffea19','#ccff00','#7df9ff']
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event =>{
    if (event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event =>{
    if (event.target.classList.contains('circle')){
    score++
    event.target.remove()
    createRandomCircle()
    }
})


function startGame(){
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime(){
    if(time === 0) {
        finishGame()
    } else {
        let current = --time
        if(current <10){
            current = `0${current}`
        }
        setTime(current)
    }
    

}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML =`<h1>Score: <span class="primary">${score}</span></h1>`
}

function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = getRandomColor(colors)

    board.append(circle)
}

function getRandomNumber(min, max){
    return Math.round(Math.random() * (max-min) + min)
}

function setColor (element){
    const color = getRandomColor()
    element.style.color = color
    element.style.boxShadow =`0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
 }