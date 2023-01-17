
var ratiowidth = document.getElementById('ratio-width')
var ratioheight = document.getElementById('ratio-height')
var width = document.getElementById('width')
var height = document.getElementById('height')


ratiowidth.addEventListener('input', function() {
    width.value = height.value/ratioheight.value*ratiowidth.value
})
ratioheight.addEventListener('input', function() {
    height.value = width.value/ratiowidth.value*ratioheight.value
})
width.addEventListener('input', (e) => {
    height.value = ratioheight.value/ratiowidth.value*width.value
})
height.addEventListener('input', (e) => {
    width.value = ratiowidth.value/ratioheight.value*height.value
})
