const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); 
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Switch to Light Mode';
    } else {
        themeToggle.textContent = 'Switch to Dark Mode';
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  const myElement = document.getElementById('myElement');

  toggleButton.addEventListener('click', function() {
    myElement.classList.toggle('hidden-section');
  });
});
