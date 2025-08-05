const canvas = document.getElementById("butterfly-canvas");

const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;

canvas.height = canvas.offsetHeight;

window.addEventListener("resize", () => {
  canvas.width = canvas.offsetWidth;

  canvas.height = canvas.offsetHeight;
});

// Convert animated SVG to image

const svgData = `

<svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

  <g>

    <path d="M50 50 Q30 20 10 40 Q20 60 50 50" fill="purple">

      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="20 50 50" dur="0.5s" repeatCount="indefinite" direction="alternate"/>

    </path>

    <path d="M50 50 Q70 20 90 40 Q80 60 50 50" fill="deepskyblue">

      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="-20 50 50" dur="0.5s" repeatCount="indefinite" direction="alternate"/>

    </path>

  </g>

</svg>

`;

const svgBlob = new Blob([svgData], { type: "image/svg+xml" });

const svgUrl = URL.createObjectURL(svgBlob);

const butterflyImg = new Image();

butterflyImg.src = svgUrl;

// Butterfly with trail

class Butterfly {
  constructor() {
    this.reset();

    this.trail = [];
  }

  reset() {
    this.x = Math.random() * canvas.width;

    this.y = canvas.height + Math.random() * 50;

    this.size = 30 + Math.random() * 10;

    this.speedY = 0.4 + Math.random() * 0.4;

    this.angle = Math.random() * Math.PI * 2;

    this.angleSpeed = 0.02 + Math.random() * 0.02;
  }

  update() {
    this.angle += this.angleSpeed;

    this.y -= this.speedY;

    this.x += Math.sin(this.angle) * 1.5;

    // Store trail positions

    this.trail.unshift({ x: this.x, y: this.y, opacity: 1.0 });

    if (this.trail.length > 15) this.trail.pop();

    if (this.y + this.size < 0) {
      this.reset();

      this.trail = [];
    }
  }

  drawTrail() {
    for (let i = 0; i < this.trail.length; i++) {
      const t = this.trail[i];

      ctx.beginPath();

      ctx.arc(t.x + this.size / 2, t.y + this.size / 2, 4, 0, Math.PI * 2);

      ctx.fillStyle = `rgba(173,216,255, ${t.opacity})`; // Light blue glow

      ctx.shadowColor = "cyan";

      ctx.shadowBlur = 8;

      ctx.fill();

      t.opacity *= 0.9; // fade
    }
  }

  draw() {
    ctx.drawImage(butterflyImg, this.x, this.y, this.size, this.size);
  }
}

const butterflies = [];

for (let i = 0; i < 5; i++) butterflies.push(new Butterfly());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  butterflies.forEach((b) => {
    b.update();

    b.drawTrail();

    b.draw();
  });

  requestAnimationFrame(animate);
}

animate();
