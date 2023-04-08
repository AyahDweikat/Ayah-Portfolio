$('.toggle').click(function () {
    "use strict";
    $('nav ul').slideToggle();
});



$(window).resize(function () {
    "use strict";
    if ($(window).width() > 410) {
        $('nav ul.nav-list').removeAttr('style');
    }
});