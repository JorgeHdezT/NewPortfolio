document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
          section.classList.add("fade-in");
      } else {
          section.classList.remove("fade-in");
      }
  });
});