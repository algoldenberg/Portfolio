
var ratiowidth = document.getElementById('ratio-width');
var ratioheight = document.getElementById('ratio-height');
var width = document.getElementById('width');
var height = document.getElementById('height');

function avoidMinus() {
    if (ratiowidth.value < 1) ratiowidth.value = 1;
    if (ratioheight.value < 1) ratioheight.value = 1;
    if (height.value < 0) height.value = 0;
    if (width.value < 0) width.value = 0;
}

ratiowidth.addEventListener('input', () => {
    avoidMinus()
    width.value = height.value/ratioheight.value*ratiowidth.value
})
ratioheight.addEventListener('input', () => {
    avoidMinus()
    height.value = width.value/ratiowidth.value*ratioheight.value
})
width.addEventListener('input', () => {
    avoidMinus()
    height.value = ratioheight.value/ratiowidth.value*width.value
})
height.addEventListener('input', () => {
    avoidMinus()
    width.value = ratiowidth.value/ratioheight.value*height.value
})
