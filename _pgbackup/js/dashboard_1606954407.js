$(document).ready(function () {
    //apresenta ou oculta o menu
    $('.sidebar-toggle').on('click', function () {

        $('.sidebar').toggleClass('toggled');

    });
    //carregar aberto o submenu
    var active = $('.sidebar .active');
    if (active.lenght && active.parent('.collapse').length) {
        var parent = active.parent('.collapse');
        
        parent.prev('a').attr('aria-expanded', true);
        parent.addClass('show');
    }
});