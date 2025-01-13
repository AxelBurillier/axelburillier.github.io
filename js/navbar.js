document.addEventListener("DOMContentLoaded", function() {
    let navbar = document.getElementById('navbar');
    let scrollTimeout;

    navbar.classList.remove("visible");

    window.addEventListener('scroll', function () {
        navbar.classList.add("visible");

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(function() {
            navbar.classList.remove("visible");
        }, 1000);
    });

    navbar.addEventListener('mouseover', function () {
        clearTimeout(scrollTimeout);
        navbar.classList.add("visible");
    });

    navbar.addEventListener('mouseout', function () {
        scrollTimeout = setTimeout(function() {
            navbar.classList.remove("visible");
        }, 1000);
    });
});
