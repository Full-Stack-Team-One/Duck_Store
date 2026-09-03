import { headerDeploy } from "./main.js";
import { footerDeploy } from "./main.js";
headerDeploy('../components/header.html')
footerDeploy('../components/footer.html')
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');

  const showError = (message) => {
    alert(message);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const name = (formData.get('name') || '').toString().trim();
      const email = (formData.get('email') || '').toString().trim();
      const message = (formData.get('message') || '').toString().trim();

      if (!name) {
        showError('Please enter your name.');
        return;
      }

      if (!email) {
        showError('Please enter your email.');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showError('Please enter a valid email address.');
        return;
      }

      if (!message) {
        showError('Please write a message.');
        return;
      }

      const payload = {
        name,
        email,
        message,
      };

      console.log('Contact form submitted:', payload);

      const subject = encodeURIComponent(`DuckStore contact request from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

      window.location.href = `mailto:quack@duckstore.com?subject=${subject}&body=${body}`;
    });
  }

  const contactLinks = document.querySelectorAll('[data-contact-type]');

  contactLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const type = link.dataset.contactType;
      const value = link.dataset.contactValue || link.textContent.trim();

      console.log(`${type === 'phone' ? 'Phone' : 'Address'} clicked:`, value);

      if (type === 'phone') {
        event.preventDefault();
        window.location.href = 'tel:+15550190243';
      }

      if (type === 'address') {
        event.preventDefault();
        const encodedAddress = encodeURIComponent(value);
        window.location.href = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      }
    });
  });
});
