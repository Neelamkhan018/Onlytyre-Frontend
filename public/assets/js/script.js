

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#topHead').addClass('background');
    } else {
        $('#topHead').removeClass('background');
    }
});

$(document).ready(function() {
    $('.boxsize input[type="radio"]').click(function() {
        window.location.href = 'subscription-diet-type#DietType';
    });
    $('#DietType input[type="radio"]').click(function() {
        window.location.href = 'subscription-cuisine#Cuisine';
    });
});

$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});


