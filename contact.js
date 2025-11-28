// contact.js
// Contact page - simple form validation

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    let errorMessage = "";

    if (name === "") {
      errorMessage += "- Please enter your name.\n";
    }

    if (email === "") {
      errorMessage += "- Please enter your e-mail.\n";
    } else if (!email.includes("@")) {
      errorMessage += "- Please enter a valid e-mail address.\n";
    }

    if (subject === "") {
      errorMessage += "- Please enter a subject.\n";
    }

    if (message === "") {
      errorMessage += "- Please write a message.\n";
    }

    if (errorMessage !== "") {
      event.preventDefault(); // Göndermeyi iptal et
      alert("Please fix the following:\n\n" + errorMessage);
    } else {
      alert("Thank you! Your message has been received (demo).");
      // Backend olmadığı için istersen yine de göndermeyi iptal edebilirsin:
      // event.preventDefault();
    }
  });
});
