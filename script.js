// ✅ Show scroll-to-top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Form validation
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("adoptionForm").addEventListener("submit", function (e) {
        const fullName = document.getElementById("fullname").value.trim();
        const contact = document.getElementById("Contact").value.trim();
        const petName = document.getElementById("petname").value.trim();

        if (fullName === "" || contact === "" || petName === "") {
            alert("Please fill out all fields.");
            e.preventDefault(); // Stop form from submitting
        } else {
            alert("Form submitted successfully!");
            // Optionally, you can allow the form to submit or handle it via JS
        }
    });
});