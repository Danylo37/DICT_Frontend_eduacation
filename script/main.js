document.addEventListener("DOMContentLoaded", function () {
    // Toggle menu open/close on burger click
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector(".header").classList.toggle("open");
    });

    // Track clicks inside the menu
    document.getElementById("menu").addEventListener("click", (event) => {
        event._isClickWithInMenu = true;
    });

    // clicks on the burger
    document.getElementById("burger").addEventListener("click", (event) => {
        event._isClickWithInMenu = true;
    });

    // Close menu when clicking outside
    document.body.addEventListener("click", (event) => {
        if (event._isClickWithInMenu) return;
        document.querySelector(".header").classList.remove("open");
    });

    // Close menu when clicking any navigation button
    const navButtons = document.querySelectorAll("#menu a");
    navButtons.forEach((button) => {
        button.addEventListener("click", () => {
            document.querySelector(".header").classList.remove("open");
        });
    });

    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.style.color = "red";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        if (message.length < 3) {
            formMessage.textContent = "Message must be at least 3 characters long.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Thank you for your message!";
        formMessage.style.color = "green";
        form.reset();
    });
});
