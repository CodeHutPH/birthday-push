document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      themeToggle.textContent = "🌑";
      themeToggle.setAttribute("aria-label", "Toggle light mode");
    } else {
      themeToggle.textContent = "☀️";
      themeToggle.setAttribute("aria-label", "Toggle dark mode");
    }
  });
});
