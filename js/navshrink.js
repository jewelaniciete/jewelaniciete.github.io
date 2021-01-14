$(window).scroll(function() {
    if($(document).scrollTop() > 90) {
        $('nav').addClass('shrink');
    }
    else
    {
        $('nav').removeClass('shrink');
    }
});
