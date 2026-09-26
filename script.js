console.log("Portfolio loaded successfully!");

let menuToggle = document.querySelector("#menu-toggle");
let navLinks = document.querySelector("#nav-links");


// Open / close menu

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.innerText = "✕";
    } else {
        menuToggle.innerText = "☰";
    }
});


// Close menu after clicking a link

let navItems = document.querySelectorAll(".nav-links a");
navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuToggle.innerText = "☰";

    });

});


// If active isn't there → add it.
// If active is already there → remove it.
//So JavaScript controls the CSS by adding/removing the class.
//his part:

// navLinks.classList.contains("active")
// checks:
// "Does the menu currently have the active class?"


// Active navbar link while scrolling

let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        let sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
//
//This selects all your sections:
//currentSection = "projects"
// currentSection = "projects"
// Then:
// if (window.scrollY >= sectionTop - 150)
// We're checking how far the user has scrolled.

// Finally:
// link.classList.add("active");
// adds our CSS class:

// One thing to notice
// Your navbar currently has:
// nav {
//     ...
// }
// but it isn't fixed to the top.
// So while scrolling, the navbar disappears.

// Contact form

let contactForm = document.querySelector(".contact-form");
let formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.innerText = "Thanks! Your message has been received.";

    contactForm.reset();

});

// Submit
//  ↓
// Browser reloads
// But:event.preventDefault();


// Scroll to top button

let scrollTopButton = document.querySelector("#scroll-top");
window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});

scrollTopButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});





































