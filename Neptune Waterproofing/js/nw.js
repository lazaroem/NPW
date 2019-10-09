
$(document).ready(function() {

    // Calculate the height of <header>
    // Use outerHeight() instead of height() if have padding
    var aboveHeight = $(".contactNav").outerHeight();
    var navHeight = $(".hcontainer").outerHeight();

    // when scroll
    $(window).scroll(function(){

        // if scrolled down more than the header’s height
        if ($(window).scrollTop() > aboveHeight){

            // if yes, add “fixed” class to the <nav>
            // add padding top to the #content
            // (value is same as the height of the nav)
            $('.contactNav').hide();

            $('.hcontainer').addClass('fixed').css('top','0').next().css('padding-top','60px');
            /*$('.hcontainer').addClass('fixed').css('padding-top','60px');*/
              /*$('#branding').addClass('fixed').css('top','0').next().css('padding-top','60px');
            $('#trademark').addClass('fixed').css('top','0').next().css('padding-top','60px');
            */

        } else {

            // when scroll up or less than aboveHeight,
            // remove the “fixed” class, and the padding-top
            $('.hcontainer').removeClass('fixed').next().css('padding-top','0');
            $('.contactNav').show();
        }
    });
});
