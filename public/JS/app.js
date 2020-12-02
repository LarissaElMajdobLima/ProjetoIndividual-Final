$(function(){
    $('.fa-arrow-up').hide();

    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $('.fa-arrow-up').fadeIn();
        } else {
            $('.fa-arrow-up').fadeOut();
        }
    });
});