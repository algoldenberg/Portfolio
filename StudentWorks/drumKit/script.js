
function playSound(x) {
   let sound = document.querySelector(`audio[data-key="${x}"]`)
   sound.play()
}

//Listener для нажатия клавиши на клавиатуре
document.addEventListener('keydown', x => playSound(x.key))

//Listener для нажатия на кнопку
var buttons = document.querySelectorAll('.key')
for (i of buttons) {
   i.addEventListener('click', function() {
      let x = this.getAttribute('data-key')
      playSound(x)
   })
}





