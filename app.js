const board = document.querySelector('#board')
const SQUARES_NUMBER = 750
const colors = ['#e74c3c','#8e44ad','#3498db','#e67e22','#2ecc71','#c77c00','#ff6a84','#454957','#ff909c','#fffb52']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',setColor)
    square.addEventListener('touchmove',setColor)

    square.addEventListener('mouseleave',removeColor)
    square.addEventListener('touchcancel',removeColor)
    board.append(square)
}
function setColor(event){
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(event){
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
   return colors[Math.floor(Math.random() * colors.length)]
}