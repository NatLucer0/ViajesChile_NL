$(document).ready(function(){
    //Smooth scroll_ código de Kodetop
    $('html, body').animate({
        scrollTop: $('section').offset().top
      }, 550);
    });
    
    //TOOLTIP
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
 });