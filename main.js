// Year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Smooth scroll links
  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.getAttribute("data-scroll"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Simple XP animation (visual only)
  const xpFill = document.getElementById("xp-bar-fill");
  const xpLabel = document.getElementById("xp-label");
  const xpText = document.getElementById("xp-text");

  const targetPercent = 73;
  const maxXP = 1000;
  const currentXP = Math.round((maxXP * targetPercent) / 100);

  if (xpLabel) {
    xpLabel.textContent = `Level 5 • ${targetPercent}%`;
  }
  if (xpText) {
    xpText.textContent = `${currentXP} / ${maxXP} XP`;
  }

  if (xpFill) {
    requestAnimationFrame(() => {
      xpFill.style.transition = "width 0.9s ease-out";
      xpFill.style.width = targetPercent + "%";
    });
  }
});
