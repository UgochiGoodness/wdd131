const products = [
  { id: 'prod1', name: 'Smartphone X' },
  { id: 'prod2', name: 'Laptop Pro' },
  { id: 'prod3', name: 'Wireless Headphones' },
  { id: 'prod4', name: 'Smartwatch Series 5' },
  { id: 'prod5', name: 'Bluetooth Speaker' }
];

// Populate product options dynamically
window.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('productName');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});

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
