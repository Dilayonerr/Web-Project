// routes.js
// Routes page - filter routes by area

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-bar .filter-tag");
  const routeCards = document.querySelectorAll(".route-card");

  if (filterButtons.length === 0 || routeCards.length === 0) {
    return; // HTML henüz bu yapıda değilse sessiz çık
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedArea = button.getAttribute("data-area");

      // Buton görsel durumu (aktif butonu vurgula)
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active-filter");
      });
      button.classList.add("active-filter");

      // Her rota kartı için göster/gizle
      routeCards.forEach(function (card) {
        const cardArea = card.getAttribute("data-area");

        if (selectedArea === "all" || selectedArea === cardArea) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
