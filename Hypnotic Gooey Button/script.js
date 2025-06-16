// Plasma blobs follow cursor
document.addEventListener('mousemove', (e) => {
  const blobs = document.querySelectorAll('.blob');
  blobs.forEach((blob, index) => {
    const speed = 0.03 + index * 0.01;
    const x = e.clientX;
    const y = e.clientY;
    blob.animate({
      left: `${x}px`,
      top: `${y}px`
    }, {
      duration: 3000 * speed,
      fill: 'forwards',
      easing: 'ease-out'
    });
  });
});

// Fog reacts to cursor with parallax
document.addEventListener('mousemove', (e) => {
  const fog = document.body;
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  fog.style.setProperty('--fogX', `${x}px`);
  fog.style.setProperty('--fogY', `${y}px`);
});
