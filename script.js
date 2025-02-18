// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event carousel scrolling
document.addEventListener("DOMContentLoaded", function () {
    const eventContainer = document.getElementById("eventContainer");

    if (eventContainer) {
        const prevBtn = document.querySelector(".arrow.prev");
        const nextBtn = document.querySelector(".arrow.next");

        prevBtn.addEventListener("click", function () {
            eventContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });

        nextBtn.addEventListener("click", function () {
            eventContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
});

// Contact form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("form-response");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (name === "" || email === "" || message === "") {
            responseMessage.textContent = "All fields are required!";
            responseMessage.style.color = "red";
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            responseMessage.textContent = "Message sent successfully!";
            responseMessage.style.color = "green";
            form.reset();
        }, 1000);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Set the target date (YYYY, MM-1, DD, HH, MM, SS)
    const targetDate = new Date("2025-03-10 T00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Update HTML elements
            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
            document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
            document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
        } else {
            // If the countdown reaches zero, display a message
            document.querySelector(".counter").innerHTML = "<h2>Event Started!</h2>";
            clearInterval(countdownTimer);
        }
    }

    // Update countdown every second
    const countdownTimer = setInterval(updateCountdown, 1000);

    // Initialize countdown immediately
    updateCountdown();
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});
