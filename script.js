// Randomly select the correct box (1, 2, or 3)
const correctBox = Math.floor(Math.random() * 3) + 1;
const message = document.getElementById("message");
const invite = document.getElementById("invite");

function checkBox(num) {
  if (num === correctBox) {
    message.textContent = "You found it! 🎉";
    invite.classList.remove("hidden");
    launchConfetti();
  } else {
    message.textContent = "Nope! Try again 😄";
  }
}

// Simple confetti animation
function launchConfetti() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    const timeLeft = end - Date.now();
    if (timeLeft <= 0) return;
    const colors = ["#ff0", "#0ff", "#f0f", "#fff"];
    for (let i = 0; i < 10; i++) {
      const conf = document.createElement("div");
      conf.style.position = "fixed";
      conf.style.left = Math.random() * 100 + "vw";
      conf.style.top = "-10px";
      conf.style.width = "10px";
      conf.style.height = "10px";
      conf.style.background = colors[Math.floor(Math.random() * colors.length)];
      conf.style.opacity = 0.8;
      conf.style.borderRadius = "50%";
      conf.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
      document.body.appendChild(conf);
      setTimeout(() => conf.remove(), 4000);
    }
    requestAnimationFrame(frame);
  })();
}

// Add basic falling animation
const style = document.createElement("style");
style.textContent = `
@keyframes fall {
  to {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
