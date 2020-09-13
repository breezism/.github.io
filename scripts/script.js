const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Navigation
        nav.classList.toggle('nav-active');
        navLinks.forEach(link => link.addEventListener('click', navbarClick));
        
        function navbarClick() {
            if(nav.classList.contains("nav-active")) {
                burger.click();
            }
        }

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.4s ease-out forwards ${index / 7 + 0.6}s`;
            }

            link.classList.remove('nav-active');
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
};
navSlide();

$(document).ready(function () {
    // Scrolling throught the page when user clicks on a menu item
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
            'scrollTop': $target.offset().top

        }, 1000, 'swing');
    });

    $('.burger').on("click", function() {
        $("nav-links li").removeClass("nav-active");

    });

    // Scrolling to the top of the page when user clicks and fadeout
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#top').fadeIn();
        }
        else {
            $('#top').fadeOut();
        }
    });

    $('#top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '500');
    });
});