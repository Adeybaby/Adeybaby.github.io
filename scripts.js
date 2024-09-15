document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("afterbegin", data);
      highlightActiveNav();
    });

  // Load footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("beforeend", data);
    });

  // Active nav highlighting
  function highlightActiveNav() {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  }

  // Contact form handling
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      console.log("Form submitted:", { name, email, message });
      alert("Thank you for your message! We will get back to you soon.");
      form.reset();
    });
  }
});
