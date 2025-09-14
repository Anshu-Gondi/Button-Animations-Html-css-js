const sparksContainer = document.querySelector(".sparks");

const button = document.querySelector(".spark-btn");

// Neon colors

const colors = [
  "#ff007f",
  "#ff00ff",
  "#00ffff",
  "#00ff66",
  "#ffff00",
  "#ff6600",
  "#ff0000",
];

function createSpark() {
  const spark = document.createElement("div");

  spark.classList.add("spark");

  // Pick random neon color

  spark.style.color = colors[Math.floor(Math.random() * colors.length)];

  spark.style.background = spark.style.color;

  // Random direction & distance

  const angle = Math.random() * Math.PI * 2;

  const distance = Math.random() * 90 + 30;

  const x = Math.cos(angle) * distance + "px";

  const y = Math.sin(angle) * distance + "px";

  spark.style.setProperty("--x", x);

  spark.style.setProperty("--y", y);

  sparksContainer.appendChild(spark);

  setTimeout(() => spark.remove(), 2000);
}

// Continuous sparks

setInterval(createSpark, 300);

// Extra sparks on hover

button.addEventListener("mouseenter", () => {
  for (let i = 0; i < 18; i++) {
    setTimeout(createSpark, i * 40); // burst
  }
});
