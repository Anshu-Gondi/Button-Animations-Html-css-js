const downloadBtn = document.getElementById('downloadBtn');
const loader = document.querySelector('.loader');
const checkmark = document.querySelector('.checkmark');
const text = downloadBtn.querySelector('.text');
const rainContainer = document.getElementById('rain');

function createRaindrop() {
  const drop = document.createElement('div');
  drop.classList.add('raindrop');
  drop.style.left = Math.random() * 100 + 'px';
  drop.style.animationDuration = (0.5 + Math.random()) + 's';
  rainContainer.appendChild(drop);
  setTimeout(() => drop.remove(), 1000);
}

setInterval(createRaindrop, 100);

downloadBtn.addEventListener('click', () => {
  text.textContent = "Downloading...";
  loader.style.display = 'inline-block';

  setTimeout(() => {
    const headers = ['Name', 'Age', 'Country'];
    const rows = [
      ['Alice', 25, 'USA'],
      ['Bob', 30, 'UK'],
      ['Carlos', 28, 'Brazil'],
    ];

    let csvContent = headers.join(',') + '\n' +
      rows.map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'cloud_data.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    loader.style.display = 'none';
    checkmark.style.display = 'inline-block';
    text.textContent = "Downloaded!";

    setTimeout(() => {
      checkmark.style.display = 'none';
      text.textContent = "Download CSV";
    }, 2000);
  }, 1500);
});
