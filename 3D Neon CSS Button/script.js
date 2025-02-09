document.querySelector(".neon-button").addEventListener("mouseover", function() {
    this.classList.add("pulse");
});

document.querySelector(".neon-button").addEventListener("mouseleave", function() {
    this.classList.remove("pulse");
});
