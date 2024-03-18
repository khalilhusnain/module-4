document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    themeToggle.addEventListener("change", function() {
        if (this.checked) {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }
    });

    });

