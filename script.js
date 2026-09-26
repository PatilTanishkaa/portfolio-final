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
// Contact form

let contactForm = document.querySelector(".contact-form");
let formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    let name = contactForm.querySelector('input[type="text"]').value;
    let email = contactForm.querySelector('input[type="email"]').value;
    let message = contactForm.querySelector("textarea").value;

    let response = await fetch("http://localhost:5000/api/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })

    });

    let data = await response.json();

    formMessage.innerText = data.message;

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

// Loading screen
window.addEventListener("load", function () {

    let loader = document.querySelector("#loader");

    loader.style.display = "none";

});

// Scroll animation
let animatedElements = document.querySelectorAll(".animate");
let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
animatedElements.forEach(function (element) {
    observer.observe(element);
});


































