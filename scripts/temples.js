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

const hamburgerBtn = document.getElementById('hamburgerBtn');
const nav = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', () => {
  nav.classList.toggle('open');

  // Toggle button symbol
  if (nav.classList.contains('open')) {
    hamburgerBtn.textContent = '✖'; // Close symbol
  } else {
    hamburgerBtn.textContent = '☰'; // Hamburger symbol
  }
});