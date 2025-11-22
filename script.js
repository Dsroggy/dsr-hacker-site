// smooth scroll
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// animate on scroll using IntersectionObserver
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".animate-on-scroll").forEach(section => observer.observe(section));

// footer year + typing effect
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const line = 'initializing DSR_HACKER_ENV >> Web + Games + AI loaded...';
  const target = document.getElementById("hero-typing");
  let i = 0;

  function type() {
    if (!target) return;
    if (i <= line.length) {
      target.textContent = line.slice(0, i) + "█";
      i++;
      setTimeout(type, 35);
    } else {
      // blink cursor
      let visible = true;
      setInterval(() => {
        if (!target) return;
        target.textContent = line + (visible ? " " : "█");
        visible = !visible;
      }, 450);
    }
  }
  type();
});
