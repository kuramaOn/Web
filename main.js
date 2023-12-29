// Smooth scrolling on navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Subscribe form handling
const subscribeForm = document.querySelector('.form-wrapper');
subscribeForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = document.querySelector('input[type="email"]');
  const email = emailInput.value;
  // Perform your desired action with the email here, like sending it to a server
  alert(`Thank you for subscribing with email: ${email}`);
  emailInput.value = '';
});
