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

// Wind Chill Calculation
const temp = parseFloat(document.getElementById('temp').textContent); // °F
const speed = parseFloat(document.getElementById('speed').textContent); // mph
const chillEl = document.getElementById('chill');

function calculateWindChill(t, s) {
  return (
    35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16))
  );
}

if (temp <= 50 && speed > 3) {
  let wc = calculateWindChill(temp, speed);
} else {
  chillEl.textContent = "N/A";
}