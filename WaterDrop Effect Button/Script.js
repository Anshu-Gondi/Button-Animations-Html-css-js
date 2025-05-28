const button = document.querySelector('.water-button');

const audio = document.getElementById('hoverSound');

let trailActive = false;

let lastParticleTime = 0;

button.addEventListener('mouseenter', (e) => {

    audio.currentTime = 0;

    audio.play();

    trailActive = true;

    for (let i = 0; i < 4; i++) {

        createRipple(e);

    }

});

button.addEventListener('mouseleave', () => {

    trailActive = false;

    button.style.transform = 'rotateX(0deg) rotateY(0deg)';

});

button.addEventListener('mousemove', (e) => {

    if (trailActive && Date.now() - lastParticleTime > 30) {

        createParticle(e);

        lastParticleTime = Date.now();

    }

    // Parallax effect

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -(y / rect.height) * 10;

    const rotateY = (x / rect.width) * 10;

    button.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

function createRipple(e) {

    const circle = document.createElement('span');

    circle.classList.add('ripple');

    const rect = button.getBoundingClientRect();

    const x = Math.random() * rect.width;

    const y = Math.random() * rect.height;

    circle.style.left = `${x}px`;

    circle.style.top = `${y}px`;

    button.appendChild(circle);

    setTimeout(() => circle.remove(), 1400);

}

function createParticle(e) {
    const type = "fire"; // Change to "glass", "icon", or mix types as needed
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (type === "fire") {
        const spark = document.createElement("span");
        spark.classList.add("spark");
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        button.appendChild(spark);
        setTimeout(() => spark.remove(), 600);
    }

    else if (type === "glass") {
        const drop = document.createElement("span");
        drop.classList.add("glass-drop");
        drop.style.left = `${x}px`;
        drop.style.top = `${y}px`;
        button.appendChild(drop);
        setTimeout(() => drop.remove(), 1000);
    }

    else if (type === "icon") {
        const icons = ["🔥", "✨", "💧", "⚡"];
        const particle = document.createElement("span");
        particle.classList.add("icon-particle");
        particle.textContent = icons[Math.floor(Math.random() * icons.length)];
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        button.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}
