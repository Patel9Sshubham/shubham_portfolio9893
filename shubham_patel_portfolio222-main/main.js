document.addEventListener("DOMContentLoaded", function () {
    let header = document.querySelector("header");
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    // Add shadow effect when scrolling
    window.addEventListener("scroll", () => {
        header.classList.toggle("shadow", window.scrollY > 0);
    });

    // Navbar toggle for mobile
    menu.addEventListener("click", function (event) {
        navbar.classList.toggle("active");
        event.stopPropagation(); // Prevent menu from closing immediately
    });

    // Close navbar when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !navbar.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });

    // Dark Mode Toggle
    let darkmode = document.querySelector("#darkmode");

    darkmode.addEventListener("click", function () {
        if (darkmode.classList.contains("bx-moon")) {
            darkmode.classList.replace("bx-moon", "bx-sun");
            document.body.classList.add("active");
        } else {
            darkmode.classList.replace("bx-sun", "bx-moon");
            document.body.classList.remove("active");
        }
    });
});
