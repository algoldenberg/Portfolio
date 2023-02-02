const slides = document.querySelectorAll('.slide')
const point = document.querySelectorAll('.point')

for (const [i, slide] of slides.entries()) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

       slide.classList.add('active')
       point.forEach((point) => {
        point.classList.remove('none')
       })
       point[i].classList.add('none')
    })
}



function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')

    })
}
