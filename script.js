document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        "aria-hidden": "true"
      }
    });
  }
});
