let button = document.getElementById('toggleButton');
let textElement = document.getElementById('myText');

button.addEventListener('click', function() {
    textElement.classList.toggle('hidden'); // Add or remove the 'hidden' class
});