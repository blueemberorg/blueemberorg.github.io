(function () {
  var isPortfolioPage = Array.from(document.querySelectorAll("h1")).some(function (h) {
    return h.textContent.indexOf("Önceki") !== -1;
  });
  if (!isPortfolioPage) return;

  var categories = {
    "Mobil Apps": ["YKS Cepte", "WorldChain Airdrop", "Soruçöz: LGS", "Combeen", "Morgenmarkt", "Tolky", "Nerd AI", "Facebuilding"],
    "Web Projeleri": ["Gedik", "AR Reklam", "Eleman", "Agency", "UKUS", "Benim Temizlik", "Bihter", "Gemicart"],
    "Oyun Projeleri": ["Arena Pit", "Flesh Reaver", "American Camp", "Tech Shop", "Bead Match", "Room Up", "Color Around", "Color Survivor", "Makeup Shooter", "Mecha Chain"]
  };

  function getCards() {
    return Array.from(document.querySelectorAll(".grid.gap-6 h2")).map(function (h2) {
      return h2.closest(".rounded-2xl.overflow-hidden");
    }).filter(Boolean);
  }

  function matchCategory(title, category) {
    var keys = categories[category] || [];
    return keys.some(function (k) {
      return title.toLowerCase().indexOf(k.toLowerCase()) !== -1;
    });
  }

  function setActive(btn) {
    document.querySelectorAll("button").forEach(function (b) {
      if (["Mobil Apps", "Web Projeleri", "Oyun Projeleri"].indexOf(b.textContent.trim()) === -1) return;
      var active = b === btn;
      b.classList.toggle("bg-black", active);
      b.classList.toggle("text-white", active);
      b.classList.toggle("border-black", active);
      b.classList.toggle("shadow-lg", active);
      b.classList.toggle("bg-white", !active);
      b.classList.toggle("text-black", !active);
    });
  }

  function filter(category) {
    getCards().forEach(function (card) {
      var title = card.querySelector("h2");
      if (!title) return;
      var show = matchCategory(title.textContent.trim(), category);
      card.style.display = show ? "" : "none";
    });
  }

  function bind() {
    document.querySelectorAll("button").forEach(function (btn) {
      var label = btn.textContent.trim();
      if (categories[label] && btn.dataset.filterBound !== "1") {
        btn.dataset.filterBound = "1";
        btn.addEventListener("click", function () {
          setActive(btn);
          filter(label);
        });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
