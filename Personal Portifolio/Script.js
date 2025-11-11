// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {
  
  // Select the contact form
  const form = document.getElementById("contactForm");

  // Check if the form exists (prevents errors on other pages)
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload

      // Collect form data
      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();

      // Simple validation
      if (!name || !email || !message) {
        alert("⚠️ Please fill in all fields before submitting.");
        return;
      }

      // Confirmation message
      alert(`✅ Thank you, ${name}! Your message has been sent successfully.`);

      // Reset form after submission
      form.reset();
    });
  }
});
