

document.addEventListener("DOMContentLoaded", function () {
  console.log("UniGuide Istanbul - Home page loaded.");

  
  const exploreButton = document.querySelector(".btn-primary");

  if (exploreButton) {
    exploreButton.addEventListener("click", function () {
      
      alert("You will see student-friendly routes in Istanbul on the next page.");
  
    });
  }
});
