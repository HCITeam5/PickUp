$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
        // checks if window is scrolled more than 300px, adds/removes solid class
        if ($(this).scrollTop() > 400) {
            $('.navbar').addClass('solid');
            $('.navbar-nav>li>a ').addClass('maincolorbg');
            $('.back-to-top').removeClass('display-none');



        } else {
            $('.navbar').removeClass('solid');
                        $('.navbar-nav>li>a ').removeClass('maincolorbg');
            $('.back-to-top').addClass('display-none');
        }
    });
});