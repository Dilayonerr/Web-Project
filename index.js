// index.js
// UniGuide Istanbul - Home page

document.addEventListener("DOMContentLoaded", function () {
  console.log("UniGuide Istanbul - Home page loaded.");

  // Ana CTA butonu (hero bölümündeki "Explore Routes" butonu)
  const exploreButton = document.querySelector(".btn-primary");

  if (exploreButton) {
    exploreButton.addEventListener("click", function () {
      // Kullanıcıya ufak bilgilendirme
      alert("You will see student-friendly routes in Istanbul on the next page.");
      // Link zaten routes.html'e gidiyor, ekstra bir şey yapmıyoruz
    });
  }
});
