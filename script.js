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

    let response = await fetch("https://tanishka-portfolio-api.onrender.com/api/contact", {

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

/* ==================================================
   ACHIEVEMENTS & HIGHLIGHTS FEATURE
   ================================================== */

/**
 * Achievement Data List
 * To add a new achievement:
 * 1. Add an object to this array.
 * 2. Set 'featured: true' if you want it shown in the homepage 2-3 preview cards.
 * 3. Place your image in 'images/achievements/' and specify the path.
 * 4. Paste your real LinkedIn URL in 'linkedin' (leave empty or 'PASTE_LINK_HERE' if none).
 * Categories supported: 'Leadership', 'Technical', 'Competitions', 'Events', 'Workshops'.
 */
const achievements = [
    {
        title: "Aavishkar '26",
        organization: "ZCOER",
        date: "2026",
        category: "Leadership",
        description: "PR & Marketing Head for the flagship annual technical symposium.",
        image: "images/achievements/aavishkar-2026.svg",
        linkedin: "https://lnkd.in/p/dxKEtHJq",
        featured: true
    },
    {
        title: "GDG On Campus",
        organization: "Google Developer Groups",
        date: "2026",
        category: "Leadership",
        description: "Social Media & Content Lead driving developer community outreach and engagement.",
        image: "images/achievements/gdg-2026.svg",
        linkedin: "https://lnkd.in/p/dH2EQqtf",
        featured: true
    },
    {
        title: "ITSA VP",
        organization: "Information Technology Students Association",
        date: "2025",
        category: "Leadership",
        description: "Vice President leading student-driven technical initiatives and department activities.",
        image: "images/achievements/itsa-vp.svg",
        linkedin: "https://lnkd.in/p/dbeXXp8V",
        featured: false
    },
    {
        title: "Engineers' Day",
        organization: "ZCOER IT Dept",
        date: "2025",
        category: "Events",
        description: "Coordinator organizing technical competitions and student showcase events.",
        image: "images/achievements/engineers-day.svg",
        linkedin: "https://lnkd.in/p/dq7VjcYP",
        featured: false
    },
    {
        title: "Teachers' Day",
        organization: "ZCOER IT Dept",
        date: "2025",
        category: "Events",
        description: "Coordinator organizing competitions.",
        image: "images/achievements/engineers-day.svg",
        linkedin: "https://lnkd.in/p/dP-_WZAA",
        featured: false
    },
    {
        title: "Eureka 2024",
        organization: "IIT Bombay",
        date: "2024",
        category: "Competitions",
        description: "1st Runner-Up in the prestigious national-level entrepreneurship competition.",
        image: "images/achievements/eureka-2024.svg",
        linkedin: "https://lnkd.in/p/drPUSdfa",
        featured: true
    },
    {
        title: "E-Summit Pune 2025",
        organization: "Vishwakarma Institute Of Technology",
        date: "2024",
        category: "Workshops",
        description: "Power-packed event hosted at Vishwakarma Institute Of Technology (VIT), Pune, that brought together some of the most impactful minds in the entrepreneurial world.",
        image: "images/achievements/tech-hackathon.svg",
        linkedin: "https://lnkd.in/p/dQeUW8mp",
        featured: false
    },
    {
        title: "Coming Soon",
        organization: "--",
        date: "2026",
        category: "Workshops",
        description: "Conducted hands-on web development bootcamp for junior students.",
        image: "images/achievements/web-dev-workshop.svg",
        linkedin: "https://www.linkedin.com/in/tanishkapatillnkdin/",
        featured: false
    }
];

// Helper to escape HTML characters for safe rendering
function escapeAchievementHTML(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Generate single card HTML
function createAchievementCard(item) {
    // Only display LinkedIn link if a valid external URL is provided
    const hasLinkedIn = item.linkedin &&
        item.linkedin.trim() !== "" &&
        item.linkedin !== "PASTE_LINK_HERE" &&
        (item.linkedin.startsWith("http://") || item.linkedin.startsWith("https://"));

    const linkedInHTML = hasLinkedIn
        ? `<a href="${escapeAchievementHTML(item.linkedin)}" target="_blank" rel="noopener noreferrer" class="achievement-link">View LinkedIn ↗</a>`
        : "";

    const fallbackImg = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' fill='%23F8F9FA'%3E%3Crect width='100%25' height='100%25' fill='%23F8F9FA'/%3E%3Ctext x='50%25' y='50%25' fill='%23888888' font-family='Arial, sans-serif' font-size='16' text-anchor='middle' dy='.3em'%3EAchievement Photo%3C/text%3E%3C/svg%3E";

    return `
        <article class="achievement-card">
            <div class="achievement-card-image-wrap">
                <img src="${escapeAchievementHTML(item.image)}" alt="${escapeAchievementHTML(item.title)}" loading="lazy" onerror="this.onerror=null; this.src='${fallbackImg}';">
                <span class="achievement-card-tag">${escapeAchievementHTML(item.category)}</span>
            </div>
            <div class="achievement-card-body">
                <div class="achievement-card-meta">
                    <span class="achievement-card-org">${escapeAchievementHTML(item.organization)}</span>
                    <span class="achievement-card-date">${escapeAchievementHTML(item.date)}</span>
                </div>
                <h3 class="achievement-card-title">${escapeAchievementHTML(item.title)}</h3>
                <p class="achievement-card-desc">${escapeAchievementHTML(item.description)}</p>
                <div class="achievement-card-footer">
                    ${linkedInHTML}
                </div>
            </div>
        </article>
    `;
}

// Render Homepage Preview (2-3 featured cards)
function renderAchievementPreview() {
    const previewGrid = document.querySelector("#achievement-preview-grid");
    if (!previewGrid) return;

    // Get items marked featured: true (fallback to first 3 if none marked)
    let featuredItems = achievements.filter(function (item) {
        return item.featured === true;
    });

    if (featuredItems.length === 0) {
        featuredItems = achievements.slice(0, 3);
    } else if (featuredItems.length > 3) {
        featuredItems = featuredItems.slice(0, 3);
    }

    previewGrid.innerHTML = featuredItems.map(createAchievementCard).join("");
}

// Render Full Achievement Gallery grouped chronologically by Year
function renderAchievementGallery(selectedFilter) {
    const galleryBody = document.querySelector("#achievement-gallery-body");
    if (!galleryBody) return;

    selectedFilter = (selectedFilter || "ALL").toUpperCase();

    // Filter achievements
    const filteredList = achievements.filter(function (item) {
        if (selectedFilter === "ALL") return true;
        const itemCat = (item.category || "").toUpperCase();
        // Support plural or singular category matching (e.g., COMPETITION vs COMPETITIONS)
        return itemCat === selectedFilter ||
               itemCat.startsWith(selectedFilter) ||
               selectedFilter.startsWith(itemCat);
    });

    if (filteredList.length === 0) {
        galleryBody.innerHTML = '<div class="achievement-empty-state"><p>No achievements found for this category.</p></div>';
        return;
    }

    // Sort achievements chronologically (newest first)
    const sortedList = filteredList.slice().sort(function (a, b) {
        const yearA = parseInt((String(a.date || "")).match(/\d{4}/) || [0], 10);
        const yearB = parseInt((String(b.date || "")).match(/\d{4}/) || [0], 10);
        return yearB - yearA;
    });

    // Group by year
    const yearGroups = {};
    const yearKeys = [];

    sortedList.forEach(function (item) {
        const yearMatch = (String(item.date || "")).match(/\d{4}/);
        const year = yearMatch ? yearMatch[0] : (item.date || "Other");

        if (!yearGroups[year]) {
            yearGroups[year] = [];
            yearKeys.push(year);
        }
        yearGroups[year].push(item);
    });

    // Build Chronological Gallery HTML
    let galleryHTML = "";
    yearKeys.forEach(function (year) {
        const cardsHTML = yearGroups[year].map(createAchievementCard).join("");
        galleryHTML += `
            <div class="achievement-year-group">
                <div class="achievement-year-header">
                    <h3 class="achievement-year-title">${escapeAchievementHTML(year)}</h3>
                    <div class="achievement-year-line"></div>
                </div>
                <div class="achievement-gallery-grid">
                    ${cardsHTML}
                </div>
            </div>
        `;
    });

    galleryBody.innerHTML = galleryHTML;
}

// Initialize Achievements & Highlights Controls
function initAchievements() {
    renderAchievementPreview();
    renderAchievementGallery("ALL");

    const modal = document.querySelector("#achievement-modal");
    const openBtn = document.querySelector("#explore-achievements-btn");
    const closeBtn = document.querySelector("#achievement-modal-close");
    const backdrop = document.querySelector("#achievement-modal-backdrop");
    const filterButtons = document.querySelectorAll(".achievement-filter-btn");

    function openModal() {
        if (!modal) return;
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    if (openBtn) {
        openBtn.addEventListener("click", openModal);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    if (backdrop) {
        backdrop.addEventListener("click", closeModal);
    }

    // Close on Escape key press
    window.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal && modal.classList.contains("active")) {
            closeModal();
        }
    });

    // Filter Buttons logic
    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });
            button.classList.add("active");
            const filterValue = button.getAttribute("data-filter");
            renderAchievementGallery(filterValue);
        });
    });
}

// Run initialization once DOM is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAchievements);
} else {
    initAchievements();
}


































