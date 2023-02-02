const board = document.querySelector('#board')
const colors = ['#fe59c2', '#fe019a', '#04d9ff','#5555ff','#bc13fe','#ff073a','#39ff14','#f80000','#ffa420','#ffea19','#ccff00','#7df9ff']
const SQUARES_NUMBER = 660

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor (element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow =`0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow =`0 0 2px #000`
}

function getRandomColor(){
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}