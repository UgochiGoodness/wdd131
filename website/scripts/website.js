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

// Toggle mobile nav
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menuToggle");
    const nav = document.getElementById("navbar");

     if (nav.classList.contains('open')) {
    hamburgerBtn.textContent = '✖'; // Close symbol
  } else {
    hamburgerBtn.textContent = '☰'; // Hamburger symbol
  }
});
