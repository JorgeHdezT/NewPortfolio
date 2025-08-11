document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("proyectos-container");

  async function loadCategory(file) {
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error("No se pudo cargar " + file);
      const html = await res.text();
      container.innerHTML = html;
    } catch (err) {
      container.innerHTML = `<p style="color:red;">Error cargando proyectos.</p>`;
      console.error(err);
    }
  }

  const isEnglishPage = window.location.pathname.endsWith("en.html");

  if (isEnglishPage) {
    loadCategory("../../projects-eng/todas.html");
  } else {
    loadCategory("../projects/todas.html");
  }


  document.querySelectorAll(".selector button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const file = btn.getAttribute("data-category");
      loadCategory(file);
    });
  });
});
