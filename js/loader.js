  document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");
  includes.forEach(el => {
    const file = el.getAttribute("data-include");
    if (file) {
      fetch(file)
        .then(response => {
          if (!response.ok) throw new Error(`Gagal load ${file}`);
          return response.text();
        })
        .then(data => {
          el.innerHTML = data;
        })
        .catch(err => {
          console.error(err);
          el.innerHTML = `<p style="color:red;">Gagal memuat ${file}</p>`;
        });
    }
  });
});
