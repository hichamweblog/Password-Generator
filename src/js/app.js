import { characters } from './characters.js';

// Select DOM elements.
const btnEl = document.querySelector('.btn');
const password1El = document.querySelector('.first-password');
const password2El = document.querySelector('.second-password');

// Generate a random number between 0 (inclusive) and arr.length (exclusive).
function randomNumber(arr) {
	return Math.floor(Math.random() * arr.length);
}

// Generate two random passwords and display them.
function randomPasswords() {
	let password1 = [];
	let password2 = [];

	while (password1.length < 15 && password2.length < 15) {
		password1.push(characters[randomNumber(characters)]);
		password2.push(characters[randomNumber(characters)]);
	}

	password1El.textContent = password1.join('');
	password2El.textContent = password2.join('');
}

// Add a click event listener to the button to generate random passwords.
btnEl.addEventListener('click', randomPasswords);

// Function to copy text to the clipboard.
function copyText(element) {
	navigator.clipboard.writeText(element.textContent);

	// Display a tooltip when the text is copied.
	const tooltip = document.createElement('p');
	tooltip.className = 'tooltip';
	tooltip.textContent = 'Copied!';
	element.appendChild(tooltip);

	// Remove the tooltip after a short delay.
	setTimeout(() => {
		element.removeChild(tooltip);
	}, 1000);
}

// Listen for click events on the document to copy passwords.
document.addEventListener('click', (e) => {
	if (password1El.textContent && e.target.id === 'p-1') {
		copyText(password1El);
	}

	if (password2El.textContent && e.target.id === 'p-2') {
		copyText(password2El);
	}
});
