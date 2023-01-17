let studentAni = document.querySelector("#student");
let jobAni = document.querySelector("#job");
window.addEventListener('scroll', () => {
    let y = window.pageYOffset;
    let x = window.pageYOffset;
    console.log(y)
    if (y > 2700 && y < 2900) {
        studentAni.style = `margin-top:${(2850 - y)}px`
    };
    if (y > 2700 && y < 2900) {
        jobAni.style = `margin-top:${(y - 2650)}px`
    };
})


