const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  // Ripple
  const circle = document.createElement("span");
  circle.classList.add("ripple");
  const rect = this.getBoundingClientRect();
  circle.style.left = e.clientX - rect.left + "px";
  circle.style.top = e.clientY - rect.top + "px";
  this.appendChild(circle);
  setTimeout(() => circle.remove(), 600);

  // Sparks
  for (let i = 0; i < 5; i++) {
    const spark = document.createElement("span");
    spark.classList.add("spark");
    spark.style.setProperty("--x", `${(Math.random() - 0.5) * 100}px`);
    spark.style.setProperty("--y", `${(Math.random() - 0.5) * 100}px`);
    spark.style.left = e.clientX - rect.left + "px";
    spark.style.top = e.clientY - rect.top + "px";
    this.appendChild(spark);
    setTimeout(() => spark.remove(), 1000);
  }
});
