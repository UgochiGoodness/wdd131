// Get the current year
const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer');
const firstPara = footer.querySelector('p');

// Set copyright
firstPara.innerHTML = `&copy; ${currentYear} ♦ Ugochi Goodness Ugorji ♦ Nigeria`;

// Set last modified date
const lastModified = document.lastModified;
const secondPara = footer.querySelectorAll('p')[1]; // second <p>
secondPara.textContent = `Last Modified: ${lastModified}`;

/// Toggle mobile nav
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menuToggle");
    const nav = document.getElementById("navbar");

    toggleButton.addEventListener("click", () => {
        nav.classList.toggle("open");

        // Toggle button symbol
        if (nav.classList.contains("open")) {
            toggleButton.textContent = "✖"; // Close symbol
        } else {
            toggleButton.textContent = "☰"; // Hamburger symbol
        }
    });
});

// Store Form Submission
function storeUserInfo(name, email) {
    const user = {
        name: name,
        email: email
    };

    localStorage.setItem("userInfo", JSON.stringify(user));
    console.log(`User info saved: ${user.name}, ${user.email}`);
}

// Load Stored Info 
function loadUserInfoFromStorage() {
    const data = localStorage.getItem("userInfo");
    if (data) {
        const user = JSON.parse(data);
        console.log(`Welcome back, ${user.name}!`);
    }
}

// Array + Object + DOM 
function displayEmployees() {
    const team = [
        { name: "Adeife Adeoye", title: "Founder" },
        { name: "Ugochi Goodness Ugorji", title: "Tech Specialist/Developer" },
        { name: "Justina Mike", title: "Manager" }
    ];

    const container = document.querySelector(".employee-profiles");
    if (!container) return;

    container.innerHTML = ""; // Clear existing
    team.forEach(member => {
        const div = document.createElement("div");
        div.classList.add("employee");

        div.innerHTML = `
            <img src="images/${member.name.split(" ")[0].toLowerCase()}.jpg" alt="${member.name}" loading="lazy">
            <p>${member.name} - ${member.title}</p>
        `;
        container.appendChild(div);
    });
}
