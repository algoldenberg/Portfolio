const container = document.querySelector(".container");
const btn = document.getElementById("spin");
const music = new Audio();
music.src = "./music.mp3"
const renew = document.getElementById("renew");
let sectors = document.querySelectorAll(".container")[0].children;
let rotation = 0;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function fill() {
    let buff = [];
    let i = 0;
    do {
        let a = getRandom(0, responses.length);
        if (buff.includes(a) == false) {
            buff.push(a);
            sectors[i].innerHTML = responses[a];
            i++;
        }
    } while (buff.length != sectors.length)
}

fill();
renew.addEventListener('click', e => fill());

btn.addEventListener('click', function () {
    let add = getRandom(90, 360);
    rotation += add;
    container.style.transform = `rotate(${rotation}deg)`;
    music.play();
    setTimeout(() => {
        music.pause();
        music.currentTime = 0;
    }, 5000)
});







