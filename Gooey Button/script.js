const button = document.querySelector('.gooey-button');
const sound = document.getElementById('gooeySound');

// Hover background color
button.addEventListener('mouseenter', () => {
  button.style.backgroundColor = '#ff00ff';
});

button.addEventListener('mouseleave', () => {
  button.style.backgroundColor = '#00f0ff';
});

// Click animation + sound
button.addEventListener('click', (e) => {
  // Create pulse ring at click position
  const pulse = document.createElement('span');
  pulse.classList.add('pulse-ring');

  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  pulse.style.left = `${x}px`;
  pulse.style.top = `${y}px`;

  button.appendChild(pulse);

  // Remove pulse after animation
  pulse.addEventListener('animationend', () => {
    pulse.remove();
  });

  // Play sound
  sound.currentTime = 0;
  sound.play();
});
