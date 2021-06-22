$(document).ready(function(){
    //Smooth scroll_ código de Kodetop
    $('html, body').animate({
        scrollTop: $('section').offset().top
      }, 550);
    });
    //Smooth scroll_ código de Kodetop
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    //Código bootstrap5 - función collpase
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    var collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl)
    });
    
