const btn = document.getElementById("actionBtn");

// Parallax tilt on pointer move

btn.addEventListener("pointermove", (e) => {
  const rect = btn.getBoundingClientRect();

  const x = e.clientX - rect.left;

  const y = e.clientY - rect.top;

  const rx = (y / rect.height - 0.5) * -6; // tilt X

  const ry = (x / rect.width - 0.5) * 6; // tilt Y

  btn.style.transform = `translateY(-2px) rotateX(${rx}deg) rotateY(${ry}deg)`;
});

btn.addEventListener("pointerleave", () => {
  btn.style.transform = "";
});

// Ripple + spark burst on click / tap

btn.addEventListener("click", (e) => {
  const rect = btn.getBoundingClientRect();

  const x = e.clientX - rect.left;

  const y = e.clientY - rect.top;

  // Ripple

  const ripple = document.createElement("span");

  ripple.className = "ripple";

  ripple.style.left = x + "px";

  ripple.style.top = y + "px";

  btn.appendChild(ripple);

  ripple.addEventListener("animationend", () => ripple.remove());

  // Sparks

  const sparks = 14;

  for (let i = 0; i < sparks; i++) {
    const sp = document.createElement("span");

    sp.className = "sparkle";

    const deg = (360 / sparks) * i + (Math.random() * 12 - 6);

    const dist = 40 + Math.random() * 36;

    sp.style.setProperty("--rot", deg + "deg");

    sp.style.setProperty("--tx", `${dist}px`);

    sp.style.setProperty("--ty", `${Math.random() * 8 - 4}px`);

    sp.style.setProperty("--delay", `${Math.random() * 90}ms`);

    sp.style.setProperty("--size", `${5 + Math.random() * 5}px`);

    sp.style.left = x + "px";

    sp.style.top = y + "px";

    btn.appendChild(sp);

    sp.addEventListener("animationend", () => sp.remove());
  }
});
