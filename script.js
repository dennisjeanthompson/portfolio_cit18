
/* script.js — small interactivity: dark mode, projects loader, form validation */

document.addEventListener('DOMContentLoaded', () => {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // theme toggle (persist in localStorage)
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  const saved = localStorage.getItem('theme');
  if(saved === 'dark') body.classList.add('dark');

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  });

  // Contact form basic validation & "fake" send
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if(!name || !email || !message){
      msg.textContent = 'Please fill in all fields.';
      msg.style.color = 'crimson';
      return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      msg.textContent = 'Please enter a valid email address.';
      msg.style.color = 'crimson';
      return;
    }
    // simulate success (in real life, you'd call an API)
    msg.textContent = 'Thanks! Your message was sent (demo).';
    msg.style.color = 'green';
    form.reset();
  });

  // Load projects dynamically (demonstrates DOM manipulation)
  const projects = [
    {title: 'Responsive Portfolio', desc: 'A small portfolio site with responsive layout.', link: '#'},
    {title: 'To-do App', desc: 'A vanilla JS to-do app with localStorage.', link: '#'},
    {title: 'Interactive Chart', desc: 'A chart built with Recharts (React) for data viz demos.', link: '#'},
    {title: 'Accessibility Audit', desc: 'Improved accessibility for a client site and wrote the report.', link: '#'}
  ];

  const grid = document.getElementById('projects-grid');
  projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><p><a href="${p.link}" aria-label="Open ${p.title}">View</a></p>`;
    grid.appendChild(card);
  });

  // simple keyboard accessibility: focus outline for keyboards only
  function handleFirstTab(e) {
    if (e.key === 'Tab') document.body.classList.add('show-focus');
    window.removeEventListener('keydown', handleFirstTab);
  }
  window.addEventListener('keydown', handleFirstTab);
});
