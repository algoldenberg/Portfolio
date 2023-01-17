let btns = document.querySelectorAll('.btn')
let btns_in = document.querySelectorAll('.vertical_ul')

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('mouseover', () => {
        btns_in[i].style = 'display:block'
    })
}

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('mouseleave', () => {
        btns_in[i].style = 'display:none'
    })
}

// let page2 = document.getElementById('header2')
// let btn2 = document.querySelector('.btn2')
// btn2.addEventListener ('click', () => { 
// page2.scrollIntoView({block: "center", behavior: "smooth"})
// })


$(".btn2").click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $("#page2").offset().top // класс объекта к которому приезжаем
    }, 500); // Скорость прокрутки
   });


$(".btn3").click(function() { // ID откуда кливаем
$('html, body').animate({
scrollTop: $("#page3").offset().top // класс объекта к которому приезжаем
}, 500); // Скорость прокрутки
});   


$(".btn4").click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $("#page4").offset().top // класс объекта к которому приезжаем
    }, 500); // Скорость прокрутки
    });   

$(".btn5").click(function() { // ID откуда кливаем
     $('html, body').animate({
    scrollTop: $("#page5").offset().top // класс объекта к которому приезжаем
    }, 500); // Скорость прокрутки
        });      

 
$(".btn6").click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $("#footer").offset().top // класс объекта к которому приезжаем
    }, 500); // Скорость прокрутки
    });             
