$(document).ready(function (){

$('#portfolio-butoon').click(function (){
    $('html, body').animate({
        scrollTop: $('#portfolio-section').offset().top
        
    }, 1500);

});

});