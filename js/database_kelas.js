 fetch("../courses.json")
    .then(res => {
      if (!res.ok) throw new Error("Gagal load JSON");
      return res.json();
    })
    .then(courses => {
      const container = document.getElementById("courses");
      container.innerHTML = courses.map(c => `
        <div class="bg-white rounded-xl p-6 shadow-sm card-hover border border-gray-100">
          <div class="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center mb-4">
            ${c.icon}
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">${c.title}</h3>
          <p class="text-gray-600 text-sm mb-4">${c.desc}</p>
          <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span>${c.duration}</span>
            <span>${c.level}</span>
          </div>
          <button class="w-full bg-brand-blue text-white py-2 rounded-lg hover:bg-brand-dark transition-colors font-medium">
            Lihat Detail
          </button>
        </div>
      `).join("");
    })
    .catch(err => console.error(err));
