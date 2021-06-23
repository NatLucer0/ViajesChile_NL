$(document).ready(function(){
    //Smooth scroll_ código de Kodetop
    $('html, body').animate({
        scrollTop: $('section').offset().top
      }, 550);
    });
    console.log($(window).width());
   if ($(window).width() < 767) {
     $('.icono').each(function(){
       $(this).attr('aria-expanded','false'); 
     })
   }
   else{  $('.icono').each(function(){
    $(this).attr('aria-expanded','true'); 
  })}
    //TOOLTIP
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
    var collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl)

})