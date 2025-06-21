document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Basic front-end validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('formResponse');
  if (!name || !email || !message) {
    response.textContent = "Please fill out all fields.";
    response.style.color = "#d90429";
    return;
  }
  // Demo message
  response.textContent = "Thank you for reaching out! We'll get back to you soon.";
  response.style.color = "#0a9396";
  document.getElementById('contactForm').reset();
});