document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const secondSection = document.getElementById("our-vision");
    function checkScroll() {
        // Get the position of the second section
        const secondSectionTop = secondSection.getBoundingClientRect().top;

        // Change the background of the navbar when the second section is reached

        if (secondSectionTop <= 250) {

            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
    checkScroll()
    window.addEventListener("scroll", checkScroll);
});


// Toggler button icon switch
document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const icon = toggler.querySelector(".toggler-icon");

    toggler.addEventListener("click", function () {
        icon.classList.toggle("open");
        if (icon.classList.contains("open")) {
            icon.classList.replace("ri-menu-2-line", "ri-close-line");
        } else {
            icon.classList.replace("ri-close-line", "ri-menu-2-line");
        }
    });
});


// add active link


document.addEventListener('DOMContentLoaded', function () {
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through each link and add event listener
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // Add active class to the clicked link
            this.classList.add('active');

            // Smooth scroll to the corresponding section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});