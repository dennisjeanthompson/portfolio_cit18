const toggleBtn = document.getElementById("darkToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "Message sent successfully! (Demo only)";
  message.style.color = "green";
  form.reset();
});
