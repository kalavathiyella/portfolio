function showAbout() {
    window.location.href = "about.html#about";
}

function showSkills() {
    window.location.href = "skills.html#skills";
}

function showProjects() {
    window.location.href = "projects.html#projects";
}

function showContact() {
    window.location.href = "contact.html#contact";
}

function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactform");
    const message = document.getElementById("formMessage");
    if (!form) return;
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const bio = document.getElementById("bio").value.trim();
        if (name === "") {
            showError("Name is required");
        } else if (email === "") {
            showError("Email is required");
        } else if (!validateEmail(email)) {
            showError("Please enter valid email");
        } else if (bio === "") {
            showError("Bio is required");
        } else {
            showSuccess("Form submitted successfully");
            form.reset();
        }
    });
    function showError(text) {
        message.innerText = text;
        message.style.color = "red";
    }
    function showSuccess(text) {
        message.innerText = text;
        message.style.color = "green";
    }
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    }
});