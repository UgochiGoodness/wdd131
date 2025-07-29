// ===== Temple Data =====
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "January 11, 2004",
    area: 17450,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxhGpzoccMT8okuAS5xnXH6wxpehk9iN7SKydHAsCQSjZedcX4sopWZvn&s=10"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "November 27, 1919",
    area: 42500,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZC6X-5yH0VR6hu4JoM-LQeaxhRjUCxJAbFSHvkyiSKkXVg5UjBKq15bRN&s=10"
  },
  {
    templeName: "Manila Philippines Temple",
    location: "Manila, Philippines",
    dedicated: "September 25, 1984",
    area: 26683,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3Qc0WDWf8YPtNUwT_OcbaL4leE4dnc6OfCNQ0LNDFDHmFeIuljHzVdM&s=10"
  },
];

// ===== Display Function =====
function displayTemples(templesList) {
  const container = document.getElementById("temples-container");
  container.innerHTML = ""; // Clear previous content

  templesList.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// ===== Filter Functions =====
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () => {
  const result = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  displayTemples(result);
});
document.getElementById("new").addEventListener("click", () => {
  const result = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
  displayTemples(result);
});
document.getElementById("large").addEventListener("click", () => {
  const result = temples.filter(t => t.area > 90000);
  displayTemples(result);
});
document.getElementById("small").addEventListener("click", () => {
  const result = temples.filter(t => t.area < 10000);
  displayTemples(result);
});

// ===== Footer Script =====
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

// ===== Initial Display All =====
displayTemples(temples);