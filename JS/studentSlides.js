const slides = document.querySelectorAll('.slide')
const point = document.querySelectorAll('.point')
const a = document.querySelectorAll('.projectText')
const first = document.querySelector('first')

if(!slides[0].classList.contains('active')) {
    a[0].classList.add('none')
}

if(!slides[2].classList.contains('active')) {
    a[2].classList.add('none')
}

if(!slides[3].classList.contains('active')) {
    a[3].classList.add('none')
}

if(!slides[8].classList.contains('active')) {
    a[8].classList.add('none')
}

for (const [i, slide] of slides.entries()) {
    slide.addEventListener('click', () => {
        clearActiveClasses();
       slide.classList.add('active')
       a[0].classList.remove('none')
       a[2].classList.remove('none')
       a[3].classList.remove('none')
       a[8].classList.remove('none')
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


