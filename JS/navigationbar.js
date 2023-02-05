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
$(".btn2").click(function() {
    $('html, body').animate({
    scrollTop: $("#page2").offset().top
    }, 500);
   });


$(".btn3").click(function() {
$('html, body').animate({
scrollTop: $("#page3").offset().top
}, 500);
});   


$(".btn4").click(function() {
    $('html, body').animate({
    scrollTop: $("#page4").offset().top
    }, 500);
    });   

$(".btn5").click(function() {
     $('html, body').animate({
    scrollTop: $("#page5").offset().top
    }, 500);
        });      

 
$(".btn6").click(function() {
    $('html, body').animate({
    scrollTop: $("#footer").offset().top
    }, 500);
    });             
